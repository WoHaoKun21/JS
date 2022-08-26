var obj = {
  name: "why",
  foo: function () {
    console.log(this);
  },
};

// obj.foo(); // 隐式绑定，this会指向obj对象

// // 1、call/apply的显示绑定高于隐式绑定
// obj.foo.call("abc"); // 当隐式绑定和显示绑定同时存在，this会指向显示绑定里面的“abc”
// obj.foo.apply("abc");

// // 2、bind显示绑定——优先级高于隐式绑定
// var bar = obj.foo.bind("abc");
// bar();

// 3、bind更明显的比较
function foo() {
  console.log(this);
}

var obj2 = {
  name: "obj2",
  foo: foo.bind("abc"),
};
obj2.foo();
