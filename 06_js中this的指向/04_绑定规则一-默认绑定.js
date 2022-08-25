// 默认绑定：独立函数调用

// // 案例一、
// function foo() {
//   console.log(this);
// }

// foo(); // 独立函数调用

// // 案例二、
// function foo1() {
//   console.log(this);
// }

// function foo2() {
//   console.log(this);
//   foo1();// 独立函数调用
// }

// function foo3() {
//   console.log(this);
//   foo2();// 独立函数调用
// }
// foo3();

// // 案例三、
// var obj = {
//   name: "why",
//   foo: function () {
//     console.log(this);
//   },
// };
// var bar = obj.foo;
// bar(); // 调用的时候只要是独立调用，那么this就是默认指向

// // 案例四、
// function foo() {
//   console.log(this);
// }
// var obj = {
//   name: "why",
//   foo: foo,
// };
// var bar = obj.foo;
// bar();

// 案例五、
function foo() {
  return function () {
    console.log(this);
  };
}
var obj = {
  name: "why",
  foo: foo,
};
var fn = foo();
fn();

var obj = {
  name: "why",
  eating: fn,
};

obj.eating(); // 隐式绑定
