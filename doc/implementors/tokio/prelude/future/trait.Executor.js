(function() {var implementors = {};
implementors["tokio"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"tokio/prelude/future/trait.Executor.html\" title=\"trait tokio::prelude::future::Executor\">Executor</a>&lt;T&gt; for <a class=\"struct\" href=\"tokio/runtime/current_thread/struct.Handle.html\" title=\"struct tokio::runtime::current_thread::Handle\">Handle</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio/prelude/trait.Future.html\" title=\"trait tokio::prelude::Future\">Future</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.unit.html\">()</a>, Error = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>","synthetic":false,"types":["tokio::runtime::current_thread::runtime::Handle"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"tokio/prelude/future/trait.Executor.html\" title=\"trait tokio::prelude::future::Executor\">Executor</a>&lt;T&gt; for <a class=\"struct\" href=\"tokio/runtime/struct.TaskExecutor.html\" title=\"struct tokio::runtime::TaskExecutor\">TaskExecutor</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio/prelude/trait.Future.html\" title=\"trait tokio::prelude::Future\">Future</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.unit.html\">()</a>, Error = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>","synthetic":false,"types":["tokio::runtime::threadpool::task_executor::TaskExecutor"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()