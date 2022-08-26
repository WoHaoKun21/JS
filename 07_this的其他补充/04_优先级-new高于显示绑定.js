// new 关键字不能和apply/call不能一起使用

// new和bind进行比较
function foo() {
  console.log(this);
}

var bar = foo.bind("aaa");
var obj = new bar(); // 当new和bind同时存在，函数调用后，this指向new出来的{}对象

// 优先级绑定规则：new绑定 > 显示绑定(apply/call/bind) > 隐式绑定 (obj.foo()) > 默认绑定(函数独立调用)
//               显示绑定规则中，bind的优先级最高
