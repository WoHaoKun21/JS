// "use strict"; // 开启严格模式————第一种方式

var message = "Hello Word"; // 不加var/let/const，正常运行————属于js中的一些静默的错误
console.log(message);

// 严格模式开启————第二种方式：对某一个函数开启严格模式
function foo() {
  "use strict";
  true.foo = "abc";
}

foo();
