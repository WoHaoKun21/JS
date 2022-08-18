// 函数作为返回值的使用
// js语法允许函数内部在定义函数

// function foo() {
//   function bar() {
//     console.log("bar");
//   }
//   return bar;
// }

// var fn = foo();
// fn(); // 执行的就是foo函数返回的bar函数

// --------------------------------------------------------------

function makeAdder(count) {
  // count 被保留下来了
  function add(num) {
    return count + num;
  }
  return add;
}

var add5 = makeAdder(5);
console.log(add5(6)); // 执行的是makeAdder函数返回的add函数，让传入的两次参数进行相加
console.log(add5(20));

var add10 = makeAdder(10);
console.log(add10(100));

// 高阶函数：把一个函数如果接受另外一个函数作为参数，或者该函数会返回另外一个函数作为返回值的函数，那么这个函数就称之为是一个高阶函数
