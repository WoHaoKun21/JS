// 隐式绑定：obj.fn()；
// obj对象会被js引擎绑定到fn函数中的this里面

function foo() {
  console.log(this);
}

// // 案例一、
// var obj = {
//   name: "why",
//   foo: foo,
// };

// obj.foo(); // this指向obj对象

// // 案例二、
// var obj = {
//   name: "why",
//   eating: function () {
//     console.log(this.name, "在吃东西");
//   },
//   running: function () {
//     console.log(obj.name, "在跑步");
//   },
// };

// obj.eating();
// obj.running();

// var fn = obj.eating;
// fn();

// 案例三、
var obj1 = {
  name: "obj1",
  foo() {
    console.log(this);
  },
};

var obj2 = {
  name: "obj2",
  bar: obj1.foo,
};

obj2.bar(); // this指向obj2，因为是obj2对象进行调用的，所以会改变this指向为obj2
