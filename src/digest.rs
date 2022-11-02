// Copyright 2015-2019 Brian Smith.
//
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHORS DISCLAIM ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY
// SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
// OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
// CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

// SPDX-License-Identifier: Apache-2.0
// Modifications Copyright Amazon.com, Inc. or its affiliates. See GitHub history for details.

//! SHA-2 and the legacy SHA-1 digest algorithm.
//!
//! If all the data is available in a single contiguous slice then the `digest`
//! function should be used. Otherwise, the digest can be calculated in
//! multiple steps using `Context`.

// Contrary to Ring's original SHA implementations, which does the hashing operations in rust,
// aws-lc-ring-facade calls the EVP_Digest APIs from AWS-LC's crypto.

#![allow(non_snake_case)]
use crate::{debug, derive_debug_via_id};

mod digest_ctx;
mod sha;
use crate::error::Unspecified;
use digest_ctx::DigestContext;
pub use sha::{
    SHA1_FOR_LEGACY_USE_ONLY, SHA1_OUTPUT_LEN, SHA256, SHA256_OUTPUT_LEN, SHA384,
    SHA384_OUTPUT_LEN, SHA512, SHA512_256, SHA512_256_OUTPUT_LEN, SHA512_OUTPUT_LEN,
};
use std::mem::MaybeUninit;
use std::os::raw::c_uint;
#[cfg(feature = "threadlocal")]
use thread_local::ThreadLocal;

/// A context for multi-step (Init-Update-Finish) digest calculations.
///
/// # Examples
///
/// ```
/// use aws_lc_ring_facade::digest;
///
/// let one_shot = digest::digest(&digest::SHA384, b"hello, world");
///
/// let mut ctx = digest::Context::new(&digest::SHA384);
/// ctx.update(b"hello");
/// ctx.update(b", ");
/// ctx.update(b"world");
/// let multi_part = ctx.finish();
///
/// assert_eq!(&one_shot.as_ref(), &multi_part.as_ref());
/// ```

#[cfg(not(feature = "threadlocal"))]
#[derive(Clone)]
pub struct Context {
    /// The context's algorithm.
    pub(crate) algorithm: &'static Algorithm,
    digest_ctx: DigestContext,
    // The spec specifies that SHA-1 and SHA-256 support up to
    // 2^64-1 bits of input. SHA-384 and SHA-512 support up to
    // 2^128-1 bits.
    msg_len: usize,
    max_input_reached: bool,
}

#[cfg(feature = "threadlocal")]
pub struct Context {
    /// The context's algorithm.
    pub(crate) algorithm: &'static Algorithm,
    digest_ctx: ThreadLocal<DigestContext>,
    // The spec specifies that SHA-1 and SHA-256 support up to
    // 2^64-1 bits of input. SHA-384 and SHA-512 support up to
    // 2^128-1 bits.
    msg_len: usize,
    max_input_reached: bool,
}

#[cfg(feature = "threadlocal")]
impl Clone for Context {
    fn clone(&self) -> Self {
        let result = Self {
            algorithm: self.algorithm,
            digest_ctx: ThreadLocal::new(),
            msg_len: self.msg_len,
            max_input_reached: self.max_input_reached,
        };
        #[cfg(feature = "threadlocal")]
        let _ = result.digest_ctx.get_or(|| self.get_digest_ctx().clone());
        result
    }
}

unsafe impl Send for Context {}

impl Context {
    /// Constructs a new context.
    pub fn new(algorithm: &'static Algorithm) -> Self {
        let result = Self {
            algorithm,
            #[cfg(feature = "threadlocal")]
            digest_ctx: ThreadLocal::new(),
            #[cfg(not(feature = "threadlocal"))]
            digest_ctx: DigestContext::new(algorithm).unwrap(),
            msg_len: 0u128 as usize,
            max_input_reached: false,
        };
        #[cfg(feature = "threadlocal")]
        let _ = result.get_digest_ctx();
        result
    }

    #[cfg(feature = "threadlocal")]
    fn get_digest_ctx(&self) -> &DigestContext {
        self.digest_ctx
            .get_or(|| DigestContext::new(self.algorithm).unwrap())
    }

    #[cfg(not(feature = "threadlocal"))]
    fn get_digest_ctx(&self) -> &DigestContext {
        &self.digest_ctx
    }

    /// Updates the message to digest with all the data in `data`.
    ///
    /// The original implementation of Ring defers the failure of overflowed
    /// inputs to `finish`, so we replicate the behavior.
    #[inline]
    pub fn update(&mut self, data: &[u8]) {
        Self::try_update(self, data).expect("digest update failed");
    }
    #[inline]
    fn try_update(&mut self, data: &[u8]) -> Result<(), Unspecified> {
        unsafe {
            // Check if the message has reached the algorithm's maximum allowed input, or overflowed
            // the msg_len counter.
            let (msg_len, max_input_reached) = self.msg_len.overflowing_add(data.len());
            self.msg_len = msg_len;
            self.max_input_reached = max_input_reached;
            (!self.max_input_reached)
                .then(|| self.max_input_reached = self.msg_len > self.algorithm.max_input_len);

            if self.max_input_reached {
                return Err(Unspecified);
            }
            if 1 != aws_lc_sys::EVP_DigestUpdate(
                *self.get_digest_ctx().ctx,
                data.as_ptr().cast(),
                data.len(),
            ) {
                return Err(Unspecified);
            }
            Ok(())
        }
    }

    /// Finalizes the digest calculation and returns the digest value.
    ///
    /// `finish` consumes the context so it cannot be (mis-)used after `finish`
    /// has been called.
    #[inline]
    pub fn finish(self) -> Digest {
        Self::try_finish(self).expect("EVP_DigestFinal failed")
    }

    #[inline]
    fn try_finish(self) -> Result<Digest, Unspecified> {
        assert!(!self.max_input_reached);

        let mut output = [0u8; MAX_OUTPUT_LEN];
        let mut out_len = MaybeUninit::<c_uint>::uninit();
        unsafe {
            if 1 != aws_lc_sys::EVP_DigestFinal(
                *self.get_digest_ctx().ctx,
                output.as_mut_ptr(),
                out_len.as_mut_ptr(),
            ) {
                return Err(Unspecified);
            }
        }

        Ok(Digest {
            algorithm: self.algorithm,
            digest_msg: output,
            digest_len: self.algorithm.output_len,
        })
    }

    /// The algorithm that this context is using.
    #[inline(always)]
    pub fn algorithm(&self) -> &'static Algorithm {
        self.algorithm
    }
}

/// Returns the digest of `data` using the given digest algorithm.
///
/// # Examples:
///
/// ```
/// # #[cfg(feature = "alloc")]
/// # {
/// use aws_lc_ring_facade::{digest, test};
/// let expected_hex = "09ca7e4eaa6e8ae9c7d261167129184883644d07dfba7cbfbc4c8a2e08360d5b";
/// let expected: Vec<u8> = test::from_hex(expected_hex).unwrap();
/// let actual = digest::digest(&digest::SHA256, b"hello, world");
///
/// assert_eq!(&expected, &actual.as_ref());
/// # }
/// ```
#[inline]
pub fn digest(algorithm: &'static Algorithm, data: &[u8]) -> Digest {
    let mut output = [0u8; MAX_OUTPUT_LEN];
    (algorithm.one_shot_hash)(data, &mut output);

    Digest {
        algorithm,
        digest_msg: output,
        digest_len: algorithm.output_len,
    }
}

/// A calculated digest value.
///
/// Use [`Self::as_ref`] to get the value as a `&[u8]`.
#[derive(Clone, Copy)]
pub struct Digest {
    /// The trait `Copy` can't be implemented for dynamic arrays, so we set a
    /// fixed array and the appropriate length.
    digest_msg: [u8; MAX_OUTPUT_LEN],
    digest_len: usize,

    algorithm: &'static Algorithm,
}

impl Digest {
    /// The algorithm that was used to calculate the digest value.
    #[inline(always)]
    pub fn algorithm(&self) -> &'static Algorithm {
        self.algorithm
    }
}

impl AsRef<[u8]> for Digest {
    #[inline(always)]
    fn as_ref(&self) -> &[u8] {
        &self.digest_msg[..self.digest_len]
    }
}

impl core::fmt::Debug for Digest {
    fn fmt(&self, fmt: &mut core::fmt::Formatter) -> core::fmt::Result {
        write!(fmt, "{:?}:", self.algorithm)?;
        debug::write_hex_bytes(fmt, self.as_ref())
    }
}

/// A digest algorithm.
pub struct Algorithm {
    /// The length of a finalized digest.
    pub output_len: usize,

    /// The size of the chaining value of the digest function, in bytes. For
    /// non-truncated algorithms (SHA-1, SHA-256, SHA-512), this is equal to
    /// `output_len`. For truncated algorithms (e.g. SHA-384, SHA-512/256),
    /// this is equal to the length before truncation. This is mostly helpful
    /// for determining the size of an HMAC key that is appropriate for the
    /// digest algorithm.
    ///
    /// This function isn't actually used in aws-lc-ring-facade, and is only
    /// kept for compatibility with the original ring implementation.
    pub chaining_len: usize,

    /// The internal block length.
    pub block_len: usize,

    max_input_len: usize,

    one_shot_hash: fn(msg: &[u8], output: &mut [u8]),

    pub(crate) id: AlgorithmID,

    pub(crate) hash_nid: i32,
}

unsafe impl Send for Algorithm {}

#[derive(Debug, Eq, PartialEq)]
pub(crate) enum AlgorithmID {
    SHA1,
    SHA256,
    SHA384,
    SHA512,
    SHA512_256,
}

impl PartialEq for Algorithm {
    fn eq(&self, other: &Self) -> bool {
        self.id == other.id
    }
}

impl Eq for Algorithm {}

derive_debug_via_id!(Algorithm);

/// The maximum block length ([`Algorithm::block_len`]) of all the algorithms
/// in this module.
pub const MAX_BLOCK_LEN: usize = 1024 / 8;

/// The maximum output length ([`Algorithm::output_len`]) of all the
/// algorithms in this module.
pub const MAX_OUTPUT_LEN: usize = 512 / 8;

/// The maximum chaining length ([`Algorithm::chaining_len`]) of all the
/// algorithms in this module.
pub const MAX_CHAINING_LEN: usize = MAX_OUTPUT_LEN;

/// Match digest types for EVP_MD functions.
pub(crate) fn match_digest_type(algorithm_id: &AlgorithmID) -> *const aws_lc_sys::EVP_MD {
    unsafe {
        match algorithm_id {
            AlgorithmID::SHA1 => aws_lc_sys::EVP_sha1(),
            AlgorithmID::SHA256 => aws_lc_sys::EVP_sha256(),
            AlgorithmID::SHA384 => aws_lc_sys::EVP_sha384(),
            AlgorithmID::SHA512 => aws_lc_sys::EVP_sha512(),
            AlgorithmID::SHA512_256 => aws_lc_sys::EVP_sha512_256(),
        }
    }
}

#[cfg(test)]
mod tests {
    mod max_input {
        extern crate alloc;
        use super::super::super::digest;
        #[cfg(not(feature = "threadlocal"))]
        use crate::digest::digest_ctx::DigestContext;
        use alloc::vec;
        #[cfg(feature = "threadlocal")]
        use thread_local::ThreadLocal;

        macro_rules! max_input_tests {
            ( $algorithm_name:ident ) => {
                mod $algorithm_name {
                    use super::super::super::super::digest;

                    #[test]
                    fn max_input_test() {
                        super::max_input_test(&digest::$algorithm_name);
                    }

                    #[test]
                    #[should_panic]
                    fn too_long_input_test_block() {
                        super::too_long_input_test_block(&digest::$algorithm_name);
                    }

                    #[test]
                    #[should_panic]
                    fn too_long_input_test_byte() {
                        super::too_long_input_test_byte(&digest::$algorithm_name);
                    }
                }
            };
        }

        fn max_input_test(alg: &'static digest::Algorithm) {
            let mut context = nearly_full_context(alg);
            let next_input = vec![0u8; alg.block_len - 1];
            context.update(&next_input);
            let _ = context.finish(); // no panic
        }

        fn too_long_input_test_block(alg: &'static digest::Algorithm) {
            let mut context = nearly_full_context(alg);
            let next_input = vec![0u8; alg.block_len];
            context.update(&next_input);
            let _ = context.finish(); // should panic
        }

        fn too_long_input_test_byte(alg: &'static digest::Algorithm) {
            let mut context = nearly_full_context(alg);
            let next_input = vec![0u8; alg.block_len - 1];
            context.update(&next_input); // no panic
            context.update(&[0]);
            let _ = context.finish(); // should panic
        }

        fn nearly_full_context(alg: &'static digest::Algorithm) -> digest::Context {
            // All implementations of Ring's original digest only support up
            // to 2^64-1 bits of input; AWS-LC's rust wrappers support up to
            // 2^128-1 for SHA-384 and SHA-512, aligning with the spec.
            digest::Context {
                algorithm: alg,
                #[cfg(feature = "threadlocal")]
                digest_ctx: ThreadLocal::new(),
                #[cfg(not(feature = "threadlocal"))]
                digest_ctx: DigestContext::new(alg).unwrap(),
                msg_len: (alg.max_input_len - alg.block_len + 1),
                max_input_reached: false,
            }
        }

        max_input_tests!(SHA1_FOR_LEGACY_USE_ONLY);
        max_input_tests!(SHA256);
        max_input_tests!(SHA384);
        max_input_tests!(SHA512);
    }

    #[test]
    fn digest_coverage() {
        use crate::digest;

        for alg in [
            &digest::SHA1_FOR_LEGACY_USE_ONLY,
            &digest::SHA256,
            &digest::SHA384,
            &digest::SHA512,
        ] {
            // Clone after updating context with message, then check if the final Digest is the same.
            let mut ctx = digest::Context::new(alg);
            ctx.update(b"hello, world");
            let ctx_clone = ctx.clone();
            assert_eq!(ctx_clone.algorithm(), ctx.algorithm());

            let orig_digest = ctx.finish();
            let clone_digest = ctx_clone.finish();
            assert_eq!(orig_digest.algorithm(), clone_digest.algorithm());
            assert_eq!(orig_digest.as_ref(), clone_digest.as_ref());
            assert_eq!(orig_digest.clone().as_ref(), clone_digest.as_ref());
        }
    }
}