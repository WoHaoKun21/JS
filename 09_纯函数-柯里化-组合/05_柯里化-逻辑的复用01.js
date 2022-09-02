// 函数柯里化实现逻辑复用

// function sum(m, n) {
//   return m + n;
// }

// // 加入在程序中，我们经常吧我们的5和另外一个数字进行相加
// console.log(sum(5, 10));
// console.log(sum(5, 14));
// console.log(sum(5, 1100));
// console.log(sum(5, 555));

function makeAdder(count) {
  count = count * count;
  return function (num) {
    return count + num;
  };
}

// var result = makeAdder(5)(10);
// console.log(result);
var adder5 = makeAdder(5);
console.log(adder5(10));
console.log(adder5(14));
console.log(adder5(1100));
console.log(adder5(555));
