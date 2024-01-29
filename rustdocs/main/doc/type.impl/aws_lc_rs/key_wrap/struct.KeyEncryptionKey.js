(function() {var type_impls = {
"aws_lc_rs":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-KeyEncryptionKey%3CCipher%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/aws_lc_rs/key_wrap.rs.html#174-194\">source</a><a href=\"#impl-KeyEncryptionKey%3CCipher%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Cipher: <a class=\"trait\" href=\"aws_lc_rs/key_wrap/trait.BlockCipher.html\" title=\"trait aws_lc_rs::key_wrap::BlockCipher\">BlockCipher</a>&gt; <a class=\"struct\" href=\"aws_lc_rs/key_wrap/struct.KeyEncryptionKey.html\" title=\"struct aws_lc_rs::key_wrap::KeyEncryptionKey\">KeyEncryptionKey</a>&lt;Cipher&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/aws_lc_rs/key_wrap.rs.html#179-187\">source</a><h4 class=\"code-header\">pub fn <a href=\"aws_lc_rs/key_wrap/struct.KeyEncryptionKey.html#tymethod.new\" class=\"fn\">new</a>(cipher: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'static Cipher</a>, key: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"struct\" href=\"aws_lc_rs/error/struct.Unspecified.html\" title=\"struct aws_lc_rs::error::Unspecified\">Unspecified</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Construct a new Key Encryption Key.</p>\n<h5 id=\"errors\"><a class=\"doc-anchor\" href=\"#errors\">§</a>Errors</h5>\n<ul>\n<li><a href=\"aws_lc_rs/error/struct.Unspecified.html\" title=\"struct aws_lc_rs::error::Unspecified\"><code>Unspecified</code></a>: Any error that occurs constructing the key encryption key.</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.block_cipher_id\" class=\"method\"><a class=\"src rightside\" href=\"src/aws_lc_rs/key_wrap.rs.html#191-193\">source</a><h4 class=\"code-header\">pub fn <a href=\"aws_lc_rs/key_wrap/struct.KeyEncryptionKey.html#tymethod.block_cipher_id\" class=\"fn\">block_cipher_id</a>(&amp;self) -&gt; <a class=\"enum\" href=\"aws_lc_rs/key_wrap/enum.BlockCipherId.html\" title=\"enum aws_lc_rs::key_wrap::BlockCipherId\">BlockCipherId</a></h4></section></summary><div class=\"docblock\"><p>Returns the block cipher algorithm identifier configured for the key.</p>\n</div></details></div></details>",0,"aws_lc_rs::key_wrap::AesKek"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-KeyWrap-for-KeyEncryptionKey%3CAesBlockCipher%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/aws_lc_rs/key_wrap.rs.html#198-310\">source</a><a href=\"#impl-KeyWrap-for-KeyEncryptionKey%3CAesBlockCipher%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"aws_lc_rs/key_wrap/trait.KeyWrap.html\" title=\"trait aws_lc_rs::key_wrap::KeyWrap\">KeyWrap</a> for <a class=\"struct\" href=\"aws_lc_rs/key_wrap/struct.KeyEncryptionKey.html\" title=\"struct aws_lc_rs::key_wrap::KeyEncryptionKey\">KeyEncryptionKey</a>&lt;<a class=\"struct\" href=\"aws_lc_rs/key_wrap/struct.AesBlockCipher.html\" title=\"struct aws_lc_rs::key_wrap::AesBlockCipher\">AesBlockCipher</a>&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.wrap\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/aws_lc_rs/key_wrap.rs.html#209-251\">source</a><a href=\"#method.wrap\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"aws_lc_rs/key_wrap/trait.KeyWrap.html#tymethod.wrap\" class=\"fn\">wrap</a>&lt;'output&gt;(\n    self,\n    plaintext: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>],\n    output: &amp;'output mut [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&amp;'output mut [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>], <a class=\"struct\" href=\"aws_lc_rs/error/struct.Unspecified.html\" title=\"struct aws_lc_rs::error::Unspecified\">Unspecified</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Peforms the key wrap encryption algorithm using <code>KeyEncryptionKey</code>’s configured block cipher.\nIt wraps <code>plaintext</code> and writes the corresponding ciphertext to <code>output</code>.</p>\n<h5 id=\"validation\"><a class=\"doc-anchor\" href=\"#validation\">§</a>Validation</h5>\n<ul>\n<li><code>plaintext.len()</code> must be a multiple of eight</li>\n<li><code>output.len() &gt;= (input.len() + 8)</code></li>\n</ul>\n<h5 id=\"errors\"><a class=\"doc-anchor\" href=\"#errors\">§</a>Errors</h5>\n<ul>\n<li><a href=\"aws_lc_rs/error/struct.Unspecified.html\" title=\"struct aws_lc_rs::error::Unspecified\"><code>Unspecified</code></a>: An error occurred either due to <code>output</code> being insufficiently sized, <code>input</code> exceeding\nthe allowed input size, or for other unspecified reasons.</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unwrap\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/aws_lc_rs/key_wrap.rs.html#263-309\">source</a><a href=\"#method.unwrap\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"aws_lc_rs/key_wrap/trait.KeyWrap.html#tymethod.unwrap\" class=\"fn\">unwrap</a>&lt;'output&gt;(\n    self,\n    ciphertext: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>],\n    output: &amp;'output mut [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&amp;'output mut [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>], <a class=\"struct\" href=\"aws_lc_rs/error/struct.Unspecified.html\" title=\"struct aws_lc_rs::error::Unspecified\">Unspecified</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Peforms the key wrap decryption algorithm using <code>KeyEncryptionKey</code>’s configured block cipher.\nIt unwraps <code>ciphertext</code> and writes the corresponding plaintext to <code>output</code>.</p>\n<h5 id=\"validation-1\"><a class=\"doc-anchor\" href=\"#validation-1\">§</a>Validation</h5>\n<ul>\n<li><code>ciphertext.len()</code> must be a multiple of 8</li>\n<li><code>output.len() &gt;= (input.len() - 8)</code></li>\n</ul>\n<h5 id=\"errors-1\"><a class=\"doc-anchor\" href=\"#errors-1\">§</a>Errors</h5>\n<ul>\n<li><a href=\"aws_lc_rs/error/struct.Unspecified.html\" title=\"struct aws_lc_rs::error::Unspecified\"><code>Unspecified</code></a>: An error occurred either due to <code>output</code> being insufficiently sized, <code>input</code> exceeding\nthe allowed input size, or for other unspecified reasons.</li>\n</ul>\n</div></details></div></details>","KeyWrap","aws_lc_rs::key_wrap::AesKek"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-KeyEncryptionKey%3CCipher%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/aws_lc_rs/key_wrap.rs.html#409-415\">source</a><a href=\"#impl-Debug-for-KeyEncryptionKey%3CCipher%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Cipher: <a class=\"trait\" href=\"aws_lc_rs/key_wrap/trait.BlockCipher.html\" title=\"trait aws_lc_rs::key_wrap::BlockCipher\">BlockCipher</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"aws_lc_rs/key_wrap/struct.KeyEncryptionKey.html\" title=\"struct aws_lc_rs::key_wrap::KeyEncryptionKey\">KeyEncryptionKey</a>&lt;Cipher&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/aws_lc_rs/key_wrap.rs.html#410-414\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","aws_lc_rs::key_wrap::AesKek"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-KeyWrapPadded-for-KeyEncryptionKey%3CAesBlockCipher%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/aws_lc_rs/key_wrap.rs.html#312-407\">source</a><a href=\"#impl-KeyWrapPadded-for-KeyEncryptionKey%3CAesBlockCipher%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"aws_lc_rs/key_wrap/trait.KeyWrapPadded.html\" title=\"trait aws_lc_rs::key_wrap::KeyWrapPadded\">KeyWrapPadded</a> for <a class=\"struct\" href=\"aws_lc_rs/key_wrap/struct.KeyEncryptionKey.html\" title=\"struct aws_lc_rs::key_wrap::KeyEncryptionKey\">KeyEncryptionKey</a>&lt;<a class=\"struct\" href=\"aws_lc_rs/key_wrap/struct.AesBlockCipher.html\" title=\"struct aws_lc_rs::key_wrap::AesBlockCipher\">AesBlockCipher</a>&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.wrap_with_padding\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/aws_lc_rs/key_wrap.rs.html#322-357\">source</a><a href=\"#method.wrap_with_padding\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"aws_lc_rs/key_wrap/trait.KeyWrapPadded.html#tymethod.wrap_with_padding\" class=\"fn\">wrap_with_padding</a>&lt;'output&gt;(\n    self,\n    plaintext: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>],\n    output: &amp;'output mut [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&amp;'output mut [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>], <a class=\"struct\" href=\"aws_lc_rs/error/struct.Unspecified.html\" title=\"struct aws_lc_rs::error::Unspecified\">Unspecified</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Peforms the key wrap padding encryption algorithm using <code>KeyEncryptionKey</code>’s configured block cipher.\nIt wraps and pads <code>plaintext</code> writes the corresponding ciphertext to <code>output</code>.</p>\n<h5 id=\"validation\"><a class=\"doc-anchor\" href=\"#validation\">§</a>Validation</h5>\n<ul>\n<li><code>output.len() &gt;= (input.len() + 15)</code></li>\n</ul>\n<h5 id=\"errors\"><a class=\"doc-anchor\" href=\"#errors\">§</a>Errors</h5>\n<ul>\n<li><a href=\"aws_lc_rs/error/struct.Unspecified.html\" title=\"struct aws_lc_rs::error::Unspecified\"><code>Unspecified</code></a>: An error occurred either due to <code>output</code> being insufficiently sized, <code>input</code> exceeding\nthe allowed input size, or for other unspecified reasons.</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unwrap_with_padding\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/aws_lc_rs/key_wrap.rs.html#368-406\">source</a><a href=\"#method.unwrap_with_padding\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"aws_lc_rs/key_wrap/trait.KeyWrapPadded.html#tymethod.unwrap_with_padding\" class=\"fn\">unwrap_with_padding</a>&lt;'output&gt;(\n    self,\n    ciphertext: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>],\n    output: &amp;'output mut [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&amp;'output mut [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>], <a class=\"struct\" href=\"aws_lc_rs/error/struct.Unspecified.html\" title=\"struct aws_lc_rs::error::Unspecified\">Unspecified</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Peforms the key wrap padding decryption algorithm using <code>KeyEncryptionKey</code>’s configured block cipher.\nIt unwraps the padded <code>ciphertext</code> and writes the corresponding plaintext to <code>output</code>.</p>\n<h5 id=\"sizing-output\"><a class=\"doc-anchor\" href=\"#sizing-output\">§</a>Sizing <code>output</code></h5>\n<p><code>output.len() &gt;= input.len()</code>.</p>\n<h5 id=\"errors-1\"><a class=\"doc-anchor\" href=\"#errors-1\">§</a>Errors</h5>\n<ul>\n<li><a href=\"aws_lc_rs/error/struct.Unspecified.html\" title=\"struct aws_lc_rs::error::Unspecified\"><code>Unspecified</code></a>: An error occurred either due to <code>output</code> being insufficiently sized, <code>input</code> exceeding\nthe allowed input size, or for other unspecified reasons.</li>\n</ul>\n</div></details></div></details>","KeyWrapPadded","aws_lc_rs::key_wrap::AesKek"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()