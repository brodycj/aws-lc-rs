(function() {var type_impls = {
"aws_lc_rs":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Context\" class=\"impl\"><a class=\"src rightside\" href=\"src/aws_lc_rs/hmac.rs.html#366-438\">source</a><a href=\"#impl-Context\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"aws_lc_rs/hmac/struct.Context.html\" title=\"struct aws_lc_rs::hmac::Context\">Context</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_key\" class=\"method\"><a class=\"src rightside\" href=\"src/aws_lc_rs/hmac.rs.html#371-375\">source</a><h4 class=\"code-header\">pub fn <a href=\"aws_lc_rs/hmac/struct.Context.html#tymethod.with_key\" class=\"fn\">with_key</a>(signing_key: &amp;<a class=\"struct\" href=\"aws_lc_rs/hmac/struct.Key.html\" title=\"struct aws_lc_rs::hmac::Key\">Key</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Constructs a new HMAC signing context using the given digest algorithm\nand key.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.update\" class=\"method\"><a class=\"src rightside\" href=\"src/aws_lc_rs/hmac.rs.html#383-385\">source</a><h4 class=\"code-header\">pub fn <a href=\"aws_lc_rs/hmac/struct.Context.html#tymethod.update\" class=\"fn\">update</a>(&amp;mut self, data: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>])</h4></section></summary><div class=\"docblock\"><p>Updates the HMAC with all the data in <code>data</code>. <code>update</code> may be called\nzero or more times until <code>finish</code> is called.</p>\n<h5 id=\"panics\"><a class=\"doc-anchor\" href=\"#panics\">§</a>Panics</h5>\n<p>Panics if the HMAC cannot be updated</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.sign\" class=\"method\"><a class=\"src rightside\" href=\"src/aws_lc_rs/hmac.rs.html#417-419\">source</a><h4 class=\"code-header\">pub fn <a href=\"aws_lc_rs/hmac/struct.Context.html#tymethod.sign\" class=\"fn\">sign</a>(self) -&gt; <a class=\"struct\" href=\"aws_lc_rs/hmac/struct.Tag.html\" title=\"struct aws_lc_rs::hmac::Tag\">Tag</a></h4></section></summary><div class=\"docblock\"><p>Finalizes the HMAC calculation and returns the HMAC value. <code>sign</code>\nconsumes the context so it cannot be (mis-)used after <code>sign</code> has been\ncalled.</p>\n<p>It is generally not safe to implement HMAC verification by comparing\nthe return value of <code>sign</code> to a tag. Use <code>verify</code> for verification\ninstead.</p>\n<h5 id=\"panics-1\"><a class=\"doc-anchor\" href=\"#panics-1\">§</a>Panics</h5>\n<p>Panics if the HMAC calculation cannot be finalized</p>\n</div></details></div></details>",0,"aws_lc_rs::hmac::SigningContext"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Context\" class=\"impl\"><a class=\"src rightside\" href=\"src/aws_lc_rs/hmac.rs.html#348-354\">source</a><a href=\"#impl-Clone-for-Context\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"aws_lc_rs/hmac/struct.Context.html\" title=\"struct aws_lc_rs::hmac::Context\">Context</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/aws_lc_rs/hmac.rs.html#349-353\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","aws_lc_rs::hmac::SigningContext"],["<section id=\"impl-Send-for-Context\" class=\"impl\"><a class=\"src rightside\" href=\"src/aws_lc_rs/hmac.rs.html#356\">source</a><a href=\"#impl-Send-for-Context\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"aws_lc_rs/hmac/struct.Context.html\" title=\"struct aws_lc_rs::hmac::Context\">Context</a></h3></section>","Send","aws_lc_rs::hmac::SigningContext"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Context\" class=\"impl\"><a class=\"src rightside\" href=\"src/aws_lc_rs/hmac.rs.html#358-364\">source</a><a href=\"#impl-Debug-for-Context\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"aws_lc_rs/hmac/struct.Context.html\" title=\"struct aws_lc_rs::hmac::Context\">Context</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/aws_lc_rs/hmac.rs.html#359-363\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","aws_lc_rs::hmac::SigningContext"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()