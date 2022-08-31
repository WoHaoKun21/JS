// arguments的基本使用，函数调用传递的参数以类数组的形式进行存储
function foo(num1, num2, num3) {
  // 类数组对象：argument，长得像一个数组，本质是一个对象
  // console.log(arguments);

  // 1、常见的对arguments的三个操作
  //   ①：获取参数的长度————length
  console.log(arguments.length);

  //   ②：根据索引值获取某一个参数
  console.log(arguments[0]);
  console.log(arguments[1]);

  //   ③：callee获取当前argument所在的函数
  console.log(arguments.callee); // 获取当前函数
}

foo(10, 20, 30, 40, 50);
