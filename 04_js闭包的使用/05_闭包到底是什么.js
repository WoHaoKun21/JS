// 高阶函数的执行过程；
// function foo() {
//   var name = "foo";// 因为内部帮助我们将本该销毁的变量保存了下来，所以这里的name是可用的。
//   function bar() {
//     console.log("bar", name);
//   }
//   return bar;
// }

// var fn = foo();
// fn(); // bar

// 在JavaScript中，每当创建一个函数，闭包就会在函数创建的同时被创建出来
// 函数内部使用了其外层作用域的变量，并且将变量进行了存储，这其实就相当于创建了一个闭包
var name = "why";
function demo() {
  console.log(name);
}
