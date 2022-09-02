// 案例一、
/*
    foo函数是一个纯函数
     1、在执行的过程中没有产生任何副作用
*/
function foo(num1, num2) {
  return num1 - 2 + num2 - num2;
}

// 案例二、bar不是一个纯函数，因为他改变了外部的变量
var name = "abc";
function bar() {
  console.log("bar其他的代码执行");
  name = "cba";
}

bar();

console.log(name);

// 案例三、不是一个纯函数，因为对传入的参数进行了修改
function bar2(info) {
  info.age = 100;
}

var obj = { name: "why", age: 18 };
bar2(obj);
console.log(obj);

// 案例四、test是一个纯函数，因为它没有改变参数中的对象
var obj2 = { name: "why", age: 18 };
function test(info) {
  return { ...info, age: 100 };
}

var newObj2 = test(obj2);
console.log(newObj2);
console.log(obj2);
