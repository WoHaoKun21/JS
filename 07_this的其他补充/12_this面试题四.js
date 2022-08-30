var name = "window";
function Person(name) {
  this.name = name;
  this.obj = {
    name: "obj",
    foo1: function () {
      return function () {
        console.log(this.name);
      };
    },
    foo2: function () {
      return () => {
        console.log(this.name);
      };
    },
  };
}

var person1 = new Person("person1");
var person2 = new Person("person2");

// person1.obj.foo1()(); // window：函数独立调用
// person1.obj.foo1.call(person2)(); //window：函数独立调用
// person1.obj.foo1().call(person2); // person2：显式调用函数优先级大于隐式调用

person1.obj.foo2()(); // obj：箭头函数，this指向obj，因为箭头函数的上级作用域时foo2，foo2是同obj进行隐式调用进行绑定的
person1.obj.foo2.call(person2)(); // person2：箭头函数，this指向上级通过显示绑定的person2
person1.obj.foo2().call(person2); // obj：箭头函数不受隐式绑定影像，指向obj
