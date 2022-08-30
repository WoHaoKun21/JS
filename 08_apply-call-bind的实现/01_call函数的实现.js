// 给所有的函数添加一个hycall方法

Function.prototype.hycall = function () {
    console
};

function foo() {
  console.log("foo函数的执行");
}

function sum(num1, num2) {
  return num1 + num2;
}

foo.call();
foo.hycall();
