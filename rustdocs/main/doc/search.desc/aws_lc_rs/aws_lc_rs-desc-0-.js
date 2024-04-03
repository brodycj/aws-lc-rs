searchState.loadedDescShard("aws_lc_rs", 0, "A <em>ring</em>-compatible crypto library using the cryptographic …\nAuthenticated Encryption with Associated Data (AEAD).\nKey Agreement: ECDH, including X25519.\nBlock and Stream Ciphers for Encryption and Decryption.\nConstant-time operations.\nSHA-2 and the legacy SHA-1 digest algorithm.\nSerialization formats\nError reporting.\nPanics if the underlying implementation is not FIPS, …\nHMAC-based Extract-and-Expand Key Derivation Function.\nHMAC is specified in RFC 2104.\nInitialize the <em>AWS-LC</em> library. (This should generally not …\nSerialization and deserialization.\nInitialization Vector (IV) cryptographic primitives\nKey-Encapsulation Mechanisms (KEMs), including support for …\nKey Wrap Algorithms.\nPBKDF2 derivation and verification.\nPKCS#8 is specified in RFC 5208.\nCryptographic pseudo-random number generation.\nRSA Signature and Encryption Support.\nPublic key signatures: signing and verification.\nReferences a test input file.\nTLS 1.2 PRF API’s for usage in RFC 5246 and RFC 7627.\nIndicates whether the underlying implementation is FIPS.\nUnstable aws-lc-rs features.\nAES-128 in GCM mode with 128-bit tags and 96 bit nonces.\nAES-128 in GCM mode with nonce reuse resistance, 128-bit …\nAES-256 in GCM mode with 128-bit tags and 96 bit nonces.\nAES-256 in GCM mode with nonce reuse resistance, 128-bit …\nThe additionally authenticated data (AAD) for an opening …\nAn AEAD Algorithm.\nAn AEAD key bound to a nonce sequence.\nChaCha20-Poly1305 as described in RFC 7539.\nImmutable keys for use in situations where <code>OpeningKey</code>/…\nThe maximum length of a tag for the algorithms in this …\nAll the AEADs we support use 96-bit nonces.\nA nonce for a single AEAD opening or sealing operation.\nA sequences of unique nonces.\nAn AEAD key for authenticating and decrypting (“opening…\nAEAD Cipher key using a randomized nonce.\nAn AEAD key for encrypting and signing (“sealing”), …\nTLS 1.2 (RFC 5246)\nTLS 1.3 (RFC 8446)\nAn authentication tag.\nThe Transport Layer Security (TLS) protocol version.\nAEAD Encryption key used for TLS protocol record …\nAEAD Encryption key used for TLS protocol record …\nAn AEAD key without a designated role or nonce sequence.\nReturns the next nonce in the sequence.\nThe key’s AEAD algorithm.\nThe key’s AEAD algorithm.\nThe key’s AEAD algorithm.\nThe key’s AEAD algorithm.\nThe key’s AEAD algorithm.\nThe key’s AEAD algorithm.\nConstructs a <code>Nonce</code> with the given value, assuming that the …\nThe chacha20-poly1305@openssh.com AEAD-ish construct.\nConstruct an empty <code>Aad</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstruct the <code>Aad</code> from the given bytes.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe length of the key.\nConstructs a new key from the given <code>UnboundKey</code> and …\nNew Random Nonce Sequence\nNew TLS record sealing key. Only supports <code>AES_128_GCM</code> and …\nNew TLS record opening key. Only supports <code>AES_128_GCM</code> and …\nConstructs an <code>UnboundKey</code>.\nConstructs a <code>LessSafeKey</code> from an <code>UnboundKey</code>.\nThe length of the nonces.\nImplementations of <code>NonceSequence</code> for use with <code>BoundKey</code>s.\nAuthenticates and decrypts (“opens”) data in place.\nSee <code>super::OpeningKey::open_in_place()</code> for details.\nAuthenticates and decrypts (“opens”) data in place.\nLike <code>OpeningKey::open_in_place()</code>, except it accepts an …\nAuthenticates and decrypts (“opens”) data into another …\nSee <code>super::OpeningKey::open_within()</code> for details.\nAuthenticates and decrypts (“opens”) data in place, …\nLike <code>OpeningKey::open_within()</code>, except it accepts an …\nQUIC Header Protection.\nDeprecated. Renamed to <code>seal_in_place_append_tag</code>.\nDeprecated. Renamed to <code>seal_in_place_append_tag()</code>.\nEncrypts and signs (“seals”) data in place, appending …\nAccepts a <code>Nonce</code> and <code>Aad</code> construction that is unique for …\nEncrypts and signs (“seals”) data in place, appending …\nLike <code>SealingKey::seal_in_place_append_tag()</code>, except it …\nEncrypts and signs (“seals”) data in place with extra …\nEncrypts and signs (“seals”) data in place.\nEncrypts and signs (“seals”) data in place.\nEncrypts and signs (“seals”) data in place.\nLike <code>SealingKey::seal_in_place_separate_tag()</code>, except it …\nThe length of a tag.\nThe key’s associated <code>TlsProtocolId</code>.\nThe key’s associated <code>TlsProtocolId</code>.\nConstructs a <code>Nonce</code> with the given value, assuming that the …\nThe length of key.\nA key for opening packets.\nThe length in bytes of the <code>packet_length</code> field in a SSH …\nA key for sealing packets.\nThe length in bytes of an authentication tag.\nReturns the decrypted, but unauthenticated, packet length.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConstructs a new <code>SealingKey</code>.\nConstructs a new <code>OpeningKey</code>.\nOpens (authenticates and decrypts) a packet.\nSeals (encrypts and signs) a packet.\n<code>Counter32</code> is an implementation of the <code>NonceSequence</code> trait. …\n<code>NonceSequenceBuilder</code> facilitates the building of a …\n<code>Counter64</code> is an implementation of the <code>NonceSequence</code> trait. …\n<code>NonceSequenceBuilder</code> facilitates the building of a …\nConstructs a new <code>Counter32</code> with internal identifier and …\nConstructs a new <code>Counter64</code> with internal identifier and …\nProvides the current internal counter value.\nThe starting counter value for the <code>Counter32</code>.\nProvides the current internal counter value.\nThe starting counter value for the <code>Counter64</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nProvides the current counter indicating how many nonces …\nProvides the current counter indicating how many nonces …\nProvides the internal identifier.\nThe identifier for the <code>Counter32</code> - this value helps …\nProvides the internal identifier.\nThe identifier for the <code>Counter64</code> - this value helps …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nProvides the limit on the number of nonces allowed to be …\nThe limit for the number of nonces the <code>Counter32</code> can …\nProvides the limit on the number of nonces allowed to be …\nThe limit for the number of nonces the <code>Counter64</code> can …\nConstructs a <code>Counter32Builder</code> with all default values.\nConstructs a <code>Counter64Builder</code> with all default values.\nAES-128.\nAES-256.\nA QUIC Header Protection Algorithm.\n<code>ChaCha20</code>.\nA key for generating QUIC Header Protection masks.\nQUIC sample for new key masks\nThe key’s algorithm.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe length of the key.\nCreate a new header protection key.\nGenerate a new QUIC Header Protection mask.\nThe required sample length.\nA key agreement algorithm.\nECDH using the NSA Suite B P-256 (secp256r1) curve.\nECDH using the NSA Suite B P-384 (secp384r1) curve.\nECDH using the NSA Suite B P-521 (secp521r1) curve.\nAn ephemeral private key for use (only) with …\nA private key for use (only) with <code>agree</code>. The signature of …\nA public key for key agreement.\nAn unparsed, possibly malformed, public key for key …\nX25519 (ECDH using Curve25519) as described in RFC 7748.\nPerforms a key agreement with a private key and the given …\nPerforms a key agreement with an ephemeral private key and …\nThe algorithm for the private key.\nThe algorithm for the private key.\nThe algorithm for the public key.\nThe agreement algorithm associated with this public key\nExposes the private key encoded as a big-endian …\nExposes the seed encoded as a big-endian fixed-length …\nSerializes the key as a DER-encoded <code>ECPrivateKey</code> (RFC …\nThe bytes provided for this public key\nComputes the public key from the private key.\nComputes the public key from the private key.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstructs an ECDH key from private key bytes\nDeserializes a DER-encoded private key structure to …\nGenerate a new ephemeral private key for the given …\nGenerate a new private key for the given algorithm.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConstructs a new <code>UnparsedPublicKey</code>.\nAES 128-bit cipher\nThe number of bytes in an AES 128-bit key\nAES 256-bit cipher\nThe number of bytes in an AES 256-bit key\nThe number of bytes for an AES-CBC initialization vector …\nThe number of bytes for an AES-CTR initialization vector …\nAES 128-bit\nAES 256-bit\nA cipher algorithm.\nCipher algorithm identifier.\nCipher block chaining (CBC) mode.\nCounter (CTR) mode.\nA cipher decryption key that does not perform block …\nThe contextual data used to encrypt or decrypt data.\nA cipher encryption key that does not perform block …\nThe contextual data used to encrypt or decrypt data.\nA 128-bit Initialization Vector.\nA 128-bit Initialization Vector.\nThe cipher operating mode.\nA cipher decryption key that performs block padding.\nA cipher encryption key that performs block padding.\nA key bound to a particular cipher algorithm.\nReturns the algorithm associated with this key.\nReturns the cipher algorithm.\nReturns the cipher algorithm.\nReturns the cipher algorithm.\nReturns the cipher algorithm.\nConstructs a new <code>PaddedBlockEncryptingKey</code> cipher with …\nConstructs a new <code>PaddedBlockDecryptingKey</code> cipher with …\nConstructs an <code>EncryptingKey</code> operating in counter (CTR) …\nConstructs a cipher decrypting key operating in counter …\nDecrypts and unpads data provided in <code>in_out</code> in-place. …\nDecrypts the data provided in <code>in_out</code> in-place. Returns a …\nPads and encrypts data provided in <code>in_out</code> in-place. …\nEncrypts the data provided in <code>in_out</code> in-place. Returns a …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nPads and encrypts data provided in <code>in_out</code> in-place. …\nEncrypts the data provided in <code>in_out</code> in-place using the …\nReturns the cipher operating mode.\nReturns the cipher operating mode.\nReturns the cipher operating mode.\nReturns the cipher operating mode.\nConstructs an <code>UnboundCipherKey</code>.\nReturns <code>Ok(())</code> if <code>a == b</code> and <code>Err(error::Unspecified)</code> …\nA digest algorithm.\nA context for multi-step (Init-Update-Finish) digest …\nA calculated digest value.\nThe maximum block length (<code>Algorithm::block_len</code>) of all the …\nThe maximum chaining length (<code>Algorithm::chaining_len</code>) of …\nThe maximum output length (<code>Algorithm::output_len</code>) of all …\nSHA-1 as specified in FIPS 180-4. Deprecated.\nThe length of the output of SHA-1, in bytes.\nSHA-224 as specified in FIPS 180-4.\nThe length of the output of SHA-224, in bytes.\nSHA-256 as specified in FIPS 180-4.\nThe length of the output of SHA-256, in bytes.\nSHA-384 as specified in FIPS 180-4.\nThe length of the output of SHA-384, in bytes.\nSHA3-256 as specified in FIPS 202.\nSHA3-384 as specified in FIPS 202.\nSHA3-512 as specified in FIPS 202.\nSHA-512 as specified in FIPS 180-4.\nSHA-512/256 as specified in FIPS 180-4.\nThe length of the output of SHA-512/256, in bytes.\nThe length of the output of SHA-512, in bytes.\nThe algorithm that this context is using.\nThe algorithm that was used to calculate the digest value.\nThe internal block length.\nThe internal block length.\nThe size of the chaining value of the digest function, in …\nThe size of the chaining value of the digest function, in …\nReturns the digest of <code>data</code> using the given digest …\nFinalizes the digest calculation and returns the digest …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConstructs a new context.\nThe length of a finalized digest.\nThe length of a finalized digest.\nUpdates the message to digest with all the data in <code>data</code>.\nTrait for values that can be serialized into a big-endian …\nTrait for types that can be serialized into a DER format.\nSerialized bytes\nSerialized bytes\nSerialized bytes\nSerialized bytes\nSerialized bytes\nSerializes into a big-endian format.\nSerializes into a DER format.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAn error parsing or validating a key.\nAn error with absolutely no details.\nThe value returned from …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAn HKDF algorithm.\nHKDF using HMAC-SHA-1. Obsolete.\nHKDF using HMAC-SHA-256.\nHKDF using HMAC-SHA-384.\nHKDF using HMAC-SHA-512.\nThe length of the OKM (Output Keying Material) for a …\nAn HKDF OKM (Output Keying Material)\nA HKDF PRK (pseudorandom key).\nA salt for HKDF operations.\nThe algorithm used to derive this salt.\nThe HKDF-Expand operation.\nThe HKDF-Extract operation.\nFills <code>out</code> with the output of the HKDF-Expand operation for …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe underlying HMAC algorithm.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe length that <code>Prk::expand()</code> should expand its input to.\nThe <code>OkmLength</code> given to <code>Prk::expand()</code>.\nConstructs a new <code>Salt</code> with the given value based on the …\nConstruct a new <code>Prk</code> directly with the given value.\nAn HMAC algorithm.\nA context for multi-step (Init-Update-Finish) HMAC signing.\nHMAC using SHA-1. Obsolete.\nHMAC using SHA-224.\nHMAC using SHA-256.\nHMAC using SHA-384.\nHMAC using SHA-512.\nA key to use for HMAC signing.\nA deprecated alias for <code>Tag</code>.\nRenamed to <code>Context</code>.\nRenamed to <code>Key</code>.\nAn HMAC tag.\nMerged into <code>Key</code>.\nThe digest algorithm for the key.\nThe digest algorithm this HMAC algorithm is based on.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGenerate an HMAC signing key using the given digest …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConstruct an HMAC signing key using the given digest …\nCalculates the HMAC of <code>data</code> using the key <code>key</code> in one step.\nFinalizes the HMAC calculation and returns the HMAC value. …\nUpdates the HMAC with all the data in <code>data</code>. <code>update</code> may be …\nCalculates the HMAC of <code>data</code> using the signing key <code>key</code>, and …\nConstructs a new HMAC signing context using the given …\nA serialized positive integer.\nReturns the value, ordered from significant byte to least …\nReturns the first byte.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nAn initialization vector that must be unique for the …\nLength of a 128-bit IV in bytes.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nConstructs a new <code>FixedLength</code> from pseudo-random bytes.\nReturns the size of the iv in bytes.\nA KEM algorithm\nIdentifier for a KEM algorithm.\nAn identifier for a KEM algorithm.\nA set of encrypted bytes produced by …\nA serializable decapulsation key usable with KEMs. This …\nA serializable encapsulation key usable with KEM …\nSerialized bytes\nThe cryptographic shared secret output from the KEM …\nReturn the algorithm associated with the given KEM …\nReturn the algorithm associated with the given KEM …\nPerforms the decapsulate operation using this KEM …\nPerforms the encapsulate operation using this KEM …\nComputes the KEM encapsulation key from the KEM …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGenerate a new KEM decapsulation key for the given …\nReturns the identifier for this algorithm.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the <code>EnscapsulationKey</code> bytes.\nCreates a new KEM encapsulation key from raw bytes. This …\nReturns the algorithm’s associated AWS-LC nid.\nAES Block Cipher with 128-bit key.\nAES Block Cipher with 256-bit key.\nAES Block Cipher with 128-bit key.\nAES Block Cipher with 256-bit key.\nAn AES Block Cipher\nAES Key Encryption Key.\nA key wrap block cipher.\nThe Key Wrapping Algorithm Identifier\nThe key-encryption key used with the selected cipher …\nA Key Wrap (KW) algorithm implementation.\nA Key Wrap with Padding (KWP) algorithm implementation.\nReturns the block cipher algorithm identifier configured …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe block cipher identifier.\nReturns the algorithm identifier.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe key size in bytes to be used with the block cipher.\nReturns the algorithm key length.\nConstruct a new Key Encryption Key.\nPeforms the key wrap decryption algorithm using a block …\nPeforms the key wrap decryption algorithm using …\nPeforms the key wrap padding decryption algorithm using a …\nPeforms the key wrap padding decryption algorithm using …\nPeforms the key wrap encryption algorithm using a block …\nPeforms the key wrap encryption algorithm using …\nPeforms the key wrap padding encryption algorithm using a …\nPeforms the key wrap padding encryption algorithm using …\nA PBKDF2 algorithm.\nPBKDF2 using HMAC-SHA1.\nPBKDF2 using HMAC-SHA256.\nPBKDF2 using HMAC-SHA384.\nPBKDF2 using HMAC-SHA512.\nFills <code>out</code> with the key derived using PBKDF2 with the given …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nVerifies that a previously-derived (e.g., using <code>derive</code>) …\nA generated PKCS#8 document.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA random value constructed from a <code>SecureRandom</code> that hasn’…\nA type that can be returned by <code>aws_lc_rs::rand::generate()</code>.\nA secure random number generator.\nA secure random number generator where the random values …\nExpose the random value.\nFills <code>dest</code> with random bytes.\nFills <code>dest</code> with random bytes.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGenerate the new random value using <code>rng</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConstructs a new <code>SystemRandom</code>.\nAn RSA key pair, used for signing.\nRSA key-size.\nA serialized RSA public key.\nLow-level API for the verification of RSA signatures.\n2048-bit key\n3072-bit key\n4096-bit key\n8192-bit key\nParameters for RSA verification.\nThe public exponent, encoded in big-endian bytes without …\nThe public exponent (e).\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nParses a DER-encoded <code>RSAPrivateKey</code> structure (RFC 8017).\nParses an unencrypted PKCS#8-encoded RSA private key.\nGenerate a RSA <code>KeyPair</code> of the specified key-strength.\nGenerate a RSA <code>KeyPair</code> of the specified key-strength.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the size of the key in bytes.\nMaximum modulus length in bits.\nMinimum modulus length in bits.\nThe public modulus (n).\nThe public modulus, encoded in big-endian bytes without …\nReturns the length in bytes of the key pair’s public …\nParses a DER-encoded <code>RSAPublicKey</code> structure (RFC 8017) to …\nSign <code>msg</code>. <code>msg</code> is digested using the digest algorithm from …\nVerifies that <code>signature</code> is a valid signature of <code>message</code> …\nVerification of ASN.1 DER-encoded ECDSA signatures using …\nSigning of ASN.1 DER-encoded ECDSA signatures using the …\nVerification of fixed-length (PKCS#11 style) ECDSA …\nSigning of fixed-length (PKCS#11 style) ECDSA signatures …\nVerification of ASN.1 DER-encoded ECDSA signatures using …\nSigning of ASN.1 DER-encoded ECDSA signatures using the …\nVerification of fixed-length (PKCS#11 style) ECDSA …\nSigning of fixed-length (PKCS#11 style) ECDSA signatures …\nVerification of ASN.1 DER-encoded ECDSA signatures using …\nSigning of ASN.1 DER-encoded ECDSA signatures using the …\nVerification of fixed-length (PKCS#11 style) ECDSA …\nSigning of fixed-length (PKCS#11 style) ECDSA signatures …\n<em>Not recommended.</em> Verification of ASN.1 DER-encoded ECDSA …\n<em>Not recommended.</em> Verification of ASN.1 DER-encoded ECDSA …\nVerification of ASN.1 DER-encoded ECDSA signatures using …\nSigning of ASN.1 DER-encoded ECDSA signatures using the …\nVerification of fixed-length (PKCS#11 style) ECDSA …\nSigning of fixed-length (PKCS#11 style) ECDSA signatures …\nVerification of ASN.1 DER-encoded ECDSA signatures using …\nSigning of ASN.1 DER-encoded ECDSA signatures using the …\nVerification of fixed-length (PKCS#11 style) ECDSA …\nSigning of fixed-length (PKCS#11 style) ECDSA signatures …\nVerification of ASN.1 DER-encoded ECDSA signatures using …\nSigning of ASN.1 DER-encoded ECDSA signatures using the …\nVerification of fixed-length (PKCS#11 style) ECDSA …\nSigning of fixed-length (PKCS#11 style) ECDSA signatures …\nVerification of ASN.1 DER-encoded ECDSA signatures using …\nSigning of ASN.1 DER-encoded ECDSA signatures using the …\nVerification of fixed-length (PKCS#11 style) ECDSA …\nSigning of fixed-length (PKCS#11 style) ECDSA signatures …\nVerification of Ed25519 signatures.\nThe length of an Ed25519 public key.\nAn ECDSA key pair, used for signing.\nElliptic curve private key.\nElliptic curve public key.\nAn ECDSA signing algorithm.\nAn ECDSA verification algorithm.\nAn Ed25519 key pair, for signing.\nThe seed value for the <code>EdDSA</code> signature scheme using …\nParameters for <code>EdDSA</code> signing and verification.\nKey pairs for signing messages (private key and public …\nThe type of the public key.\nVerification of signatures using RSA keys of 1024-8192 …\nVerification of signatures using RSA keys of 1024-8192 …\nVerification of signatures using RSA keys of 1024-8192 …\nVerification of signatures using RSA keys of 2048-8192 …\nVerification of signatures using RSA keys of 2048-8192 …\nVerification of signatures using RSA keys of 2048-8192 …\nVerification of signatures using RSA keys of 2048-8192 …\nVerification of signatures using RSA keys of 3072-8192 …\nPKCS#1 1.5 padding using SHA-256 for RSA signatures.\nPKCS#1 1.5 padding using SHA-384 for RSA signatures.\nPKCS#1 1.5 padding using SHA-512 for RSA signatures.\nVerification of signatures using RSA keys of 2048-8192 …\nVerification of signatures using RSA keys of 2048-8192 …\nVerification of signatures using RSA keys of 2048-8192 …\nRSA PSS padding using SHA-256 for RSA signatures.\nRSA PSS padding using SHA-384 for RSA signatures.\nRSA PSS padding using SHA-512 for RSA signatures.\nAn RSA signature encoding as described in RFC 3447 Section …\nA public key signature returned from a signing operation.\nAn unparsed, possibly malformed, public key for signature …\nA signature verification algorithm.\nExposes the private key encoded as a big-endian …\nExposes the seed encoded as a big-endian fixed-length …\nSerializes the key as a DER-encoded <code>ECPrivateKey</code> (RFC …\nProvides the public key as a DER-encoded (X.509) …\nSerializes the public key in an uncompressed form (X9.62) …\nThe signature encoding.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstructs an ECDSA key pair by parsing an unencrypted …\nConstructs an Ed25519 key pair by parsing an unencrypted …\nConstructs an Ed25519 key pair by parsing an unencrypted …\nConstructs an ECDSA key pair from the private key and …\nDeserializes a DER-encoded private key structure to …\nConstructs an Ed25519 key pair from the private key seed …\nGenerates a new key pair.\nGenerates a new key pair and returns the key pair …\nGenerates a new key pair and returns the key pair …\nGenerates a <code>Ed25519KeyPair</code> using the <code>rng</code> provided, then …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConstruct a new <code>UnparsedPublicKey</code>.\nAccess functions related to the private key.\nThe public key for the key pair.\nProvides the public key.\nProvides the private key “seed” for this <code>Ed25519</code> key …\nReturns the signature of the message using a random nonce.\nReturns the signature of the message msg.\nSerializes this <code>Ed25519KeyPair</code> into a PKCS#8 v2 document.\nSerializes this <code>EcdsaKeyPair</code> into a PKCS#8 v1 document.\nSerializes this <code>Ed25519KeyPair</code> into a PKCS#8 v1 document.\nVerify the signature <code>signature</code> of message <code>msg</code> with the …\nParses the public key and verifies <code>signature</code> is a valid …\nVerify the signature <code>signature</code> of message <code>msg</code> with the …\nThe TLS PRF <code>P_hash</code> Algorithm\nSHA-256 <code>P_hash</code> algorithm\nSHA-384 <code>P_hash</code> algorithm\nSHA-512 <code>P_hash</code> algorithm\nEncapsulates a PRF algorithm and secret bytes to be used …\nCalculates <code>len</code> bytes of TLS PRF using the configured …\nCalculates <code>len</code> bytes of TLS PRF using the configured …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConstructs a new <code>Secret</code> for use with the associated <code>P_hash</code> …\nUnstable KEM Algorithms for usage with the <code>crate::kem</code> …\nIdentifier for an unstable KEM algorithm.\nNIST Round 3 submission of the Kyber-1024 algorithm.\nNIST Round 3 submission of the Kyber-512 algorithm.\nNIST Round 3 submission of the Kyber-768 algorithm.\nReturns the argument unchanged.\nRetrieve an unstable KEM <code>Algorithm</code> using the <code>AlgorithmId</code> …\nCalls <code>U::from(self)</code>.")