// 显示绑定规则：call/apply
function foo() {
  console.log("函数被调用了", this);
}

// foo直接调用和apply/call的不同在于this绑定不同
// foo直接调用指向的是全局对象(window)
// foo();

// var obj = {
//   name: "why",
// };

// // call/apply是可以指定this的绑定对象
// foo.call(obj);
// foo.apply(obj);
// foo.apply("aaa");

// call/apply有什么区别？
function sum(num1, num2) {
  console.log(num1 + num2, this);
}
// call/apply的参数的区别
sum.call("call", 20, 30);
sum.apply("apply", [20, 50]);

// call/apply在执行函数的时候，是可以明确的绑定this，这个绑定规则称之为显示绑定
