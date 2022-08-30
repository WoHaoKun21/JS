var name = "window";
function Person(name) {
  this.name = name;
  this.foo1 = function () {
    console.log(this.name);
  };
  this.foo2 = () => console.log(this.name);
  this.foo3 = function () {
    return function () {
      console.log(this.name);
    };
  };
  this.foo4 = function () {
    return () => {
      console.log(this.name);
    };
  };
}

var person1 = new Person("person1"); // 当我们new的时候就会创建一个对象，并且对对象进行操作：{ name: "person1", foo1: fn, foo2: fn, foo3: fn, foo4: fn}
var person2 = new Person("person2");

// person1.foo1(); // person1：隐式绑定，this指向person1
// person1.foo1.call(person2); // person2：显示调用

// person1.foo2();// person1：箭头函数，this指向上层作用域的this————通过构造器创建的对象就是一块作用域
// person1.foo2.call(person2);// person1：箭头函数，this指向person1

// person1.foo3()();// window：函数独立调用
// person1.foo3.call(person2)();// window：函数独立调用
// person1.foo3().call(person2);// person2：显示绑定

// person1.foo4()();// person1：箭头函数
// person1.foo4.call(person2)();// person2：箭头函数调用，指向person2
// person1.foo4().call(person2);// person1：箭头函数，指向person1
