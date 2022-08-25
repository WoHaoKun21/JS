// this指向什么，跟函数所处的位置是没有关系的，跟函数被调用的方式是有关系的

function foo() {
  console.log("函数调用时this指向：", this);
}

// 1、直接调用这个函数
foo(); // this指向window对象

// 2、创建一个对象，对象中的函数只想foo；
var obj = {
  name: "why",
  foo: foo, // 即将上面的函数进行使用
};
obj.foo(); // this指向obj对象

// 3、apply调用
foo.apply("abc"); // this指向这个字符串
