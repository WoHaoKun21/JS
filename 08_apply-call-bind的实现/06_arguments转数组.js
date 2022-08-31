function foo(num1, num2) {
  // 将argument里面的数据进行处理
  // 1、for循环
  var newArr = [];
  for (var i = 0; i < arguments.length; i++) {
    newArr.push(arguments[i] * 10);
  }
  console.log("newArr：", newArr);

  // 2、将arguments转为数组类型
  //    2.1 逐个遍历放到新数组中——for循环，同上

  //    2.2 通过数组的slice方法改变调用的this实现数组转换
  var newArr2 = Array.prototype.slice.call(arguments);
  console.log("newArr2：", newArr2);
  var newArr3 = [].slice.call(arguments); // 也是可以替代上面的方法的
  console.log("newArr3：", newArr3);

  //    2.3 ES6的语法
  var newArr4 = Array.from(arguments);
  console.log("newArr4：", newArr4);

  //    2.4 展开运算符
  var newArr5 = [...arguments];
  console.log("newArr5：", newArr5);
}

foo(10, 20, 30, 40, 50);

// var names = ["abc", "acb", "bac", "bca"];
// names.slice();

// // 数组的slice的实现方法
// Array.prototype.slice = function (start, end) {
//   var arr = this;
//   start = start || 0;
//   end = end || arr.length;
//   var newArr = [];
//   for (var i = start; i < end; i++) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// };
