// 函数调用函数执行的过程
var message = "Hello Global";
function foo() {
  console.log(message);
}

function bar() {
  var message = "Hello Bar";
  foo();
}

bar();
// 函数的父级作用域跟他定义的位置有关系，跟他的调用位置没有关系
