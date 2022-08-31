// 在箭头函数中是没有arguments的，回去上级去寻找，
// 在浏览器中，全局对象中是没有arguments的
// 在node中全局对象中有arguments

// // 案例三、
// var foo = () => {
//   console.log(arguments);
// };

// foo();

// // 案例二、
// function foo2() {
//   return () => {
//     console.log(arguments); // 会获取上级的arguments，因为function函数有arguments
//   };
// }

// var bar = foo2(1, 2, 3);
// bar();

// // 案例三、箭头函数中替代arguments的方法——拓展运算
var foo3 = (num1, num2, ...args) => {
  console.log(args); // 打印的是剩余参数
};

foo3(10, 20, 30, 40, 50);
