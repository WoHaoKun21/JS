// 数组中的函数使用
var nums = [10, 5, 11, 100, 55];

// var newNums = [];
// for (var i = 0; i < nums.length; i++) {
//   var num = nums[i];
//   if (num % 2 === 0) {
//     newNums.push(num);
//   }
// }
// console.log(newNums);

// --------------------------------------------------------------

// 函数和方法的区别
// // 函数——function：独立的function，那么称之为是一个函数
// function foo() {}
// // 方法——method：当我们的一个函数属于某一个对象时，我们称这个函数是这个对象的方法
// var obj = {
//   foo: function () {}, // 这个函数是obj对象的方法
// };
// obj.foo(); // 执行的是obj对象的方法

// --------------------------------------------------------------

//                                            数组方法
// // 一、filter过滤    [10, 5, 11, 100, 55]
// var newNums = nums.filter(function (item, inedx, arr) {
//   return item % 2 === 0;
// });
// console.log(newNums);

// // 二、map：用来进行映射的
// var newNums2 = nums.map(function (item) {
//   return item * 10;
// });
// console.log(newNums2);

// // 三、forEach：遍历数组————没有返回值
// nums.forEach(function (item) {
//   console.log(item);
// });

// // 四、find/findIndex：查找数组中的某一个元素
// var item = nums.find(function (item) {
//   return item === 11; // 找到指定的数据后，就不再循环了，并且返回该数据
// });
// console.log(item);

// var friends = [
//   { name: "why", age: 18 },
//   { name: "kobe", age: 40 },
//   { name: "james", age: 35 },
//   { name: "curry", age: 30 },
// ];
// var findFriend = friends.find(function (item) {
//   return item.name === "james";
// });
// console.log(findFriend);

// var friendIndex = friends.findIndex(function (item) {
//   return item.name === "james";
// });
// console.log(friendIndex);

// 五、reduce：累加求和：[10, 5, 11, 100, 55]
//    1、for循环
var total = 0;
for (var i = 0; i < nums.length; i++) {
  total += nums[i];
}
console.log(total);

//   2、reduce方法
var total = nums.reduce(function (prevValue, item) {
  return prevValue + item;
}, 0);
console.log(total);
