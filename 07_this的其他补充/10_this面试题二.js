var name = "window";
var person1 = {
  name: "person1",
  foo1: function () {
    console.log(this.name);
  },
  foo2: () => console.log(this.name), // 它的上层作用域时window对象，person1 的大括号并没有产生作用域
  foo3: function () {
    return function () {
      console.log(this.name);
    };
  },
  foo4: function () {
    return () => {
      console.log(this.name);
    };
  },
};

var person2 = {
  name: "person2",
};
// this指向————————————
person1.foo1(); // person1：隐式调用
person1.foo1.call(person2); // person2：显示调用(call/apply/bind)优先级大于隐式绑定

person1.foo2(); // window：箭头函数，this指向上下文对象也就是window对象
person1.foo2.call(person2); // window：同上

person1.foo3()(); // window：相当于独立调用
person1.foo3.call(person2)(); // window：最终调用返回函数的时候使用了 “独立函数调用”
person1.foo3().call(person2); // person2：最终调用返回函数的时候使用的是 “显式调用”

person1.foo4()(); // person1：箭头函数不绑定this，上层作用域的this时person1
person1.foo4.call(person2)(); // person2：上层作用域被显示绑定为person2
person1.foo4().call(person2); // person1：上层找到
