// "use strict"; // 开启严格模式

var message = "Hello Word";
// console.log(message);

// with语句：可以形成自己的作用域
var obj = { name: "why", age: 24, message: "obj对象" };

function foo() {
  function bar() {
    with (obj) {
      console.log(message); // 如果with传递的obj里面有message，那么打印它，如果没有则去上级作用域进行寻找——————目前已经不推荐使用，严格模式下不能使用
    }
  }
  bar();
}

foo();

var info = { name: "kobe" };
with (info) {
  console.log(name); // 当前作用域没有name的时候会去info里面进行寻找，如果没有则去上级作用域进行寻找
}
