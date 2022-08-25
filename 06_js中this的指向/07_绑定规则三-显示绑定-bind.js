// 显示绑定规则：bind
function foo() {
  console.log(this);
}

// foo.call("aaaa");// 默认绑定
// foo.call("aaaa");// 默认绑定
// foo.call("aaaa");// 默认绑定

// 默认显示和显示绑定bind发生了冲突，优先级（显示绑定）
var newFoo = foo.bind("aaa");
newFoo();
newFoo();
