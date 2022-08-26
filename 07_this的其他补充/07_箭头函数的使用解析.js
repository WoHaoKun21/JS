// 1、编写箭头函数——组成
/*   三部分组成
 *（1）()：参数
 *（2）=>：箭头
 *（3）{}：函数的执行体
 */
var foo = (num1, num2, num3) => {
  console.log(num1, num2, num3);
};

function bar(num1, num2, num3) {
  console.log(num1, num2, num3);
}

// 高阶函数在使用时，也可以直接传入箭头函数
var nums = [10, 20, 45, 78];
nums.forEach((item, index, arr) => {});

// // 箭头函数————常见的简写：
// // 简写一、如果只有一个参数，()可以省略掉
// nums.forEach((item) => {
//   console.log(item);
// });

// // 简写二、如果函数执行体只有一行代码，那么{}也可以省略
// // 强调：并且它会默认将这行代码的执行结果作为返回值
// nums.forEach((item) => console.log(item)); // nums：[10, 20, 45, 78];
// var newNums = nums.filter((item) => item % 2 === 0);
// console.log(newNums);

// // filter/map/reduce
// var result = nums
//   .filter((item) => item % 2 === 0)
//   .map((item) => item * 100)
//   .reduce((preValue, item) => preValue + item);
// console.log(result);

// 简写三：如果一个箭头函数，只有一行代码，并且只返回一个对象，这个时候如何编写简写
var bar = () => {
  return { name: "why", age: 18 };
};
// 省略：
var bars = () => ({ name: "why", age: 18 });
