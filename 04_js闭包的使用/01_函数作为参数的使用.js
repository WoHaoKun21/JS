// 在js中函数作为一等公民及可以作为参数传递给另一个函数，可以作为另外一个函数的返回值

// function foo(arg) {
//   console.log("foo", arg);
// }

// foo(123);

// --------------------------------------------------------------

// // 将函数作为另外一个函数的参数
// function foo2(param) {
//   param();
// }
// function bar() {
//   console.log("bar");
// }
// foo2(bar);

// --------------------------------------------------------------

function calc(num1, num2, calcFn) {
  console.log(calcFn(num1, num2));
}
// 相加
function add(num1, num2) {
  return num1 + num2;
}
// 相减
function sub(num1, num2) {
  return num1 - num2;
}
// 相乘
function mul(num1, num2) {
  return num1 * num2;
}

var m = 20;
var n = 30;
calc(m, n, add); // 相加
calc(m, n, sub); // 相减
calc(m, n, mul); // 相乘
