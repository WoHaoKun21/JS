"use strict";
// 严格模式常见的限制

// // ​1、 无法意外地创建全局变量；
// message = "Hello Word";
// console.log(message);
// function foo() {
//   age = 20; // 不是通过var/let/const创建的变量默认是全局变量，严格模式下，不允许
// }
// foo();
// console.log(age);

// // 2、严格模式不允许函数参数有相同的名称——相同的形参在非严格模式下不会报错
// function foo(x, y, x) {
//   console.log(x, y, x);
// }

// foo(10, 20, 30);

// // ​3、静默错误
// true.name = "abc";
// NaN = 123;
// var obj = {};
// // 添加属性，并设置属性的属性
// Object.defineProperty(obj, "name", {
//   writable: false, // 是否可写
//   value: "why",
// });
// obj.name = "abc";
// delete obj.name;

// // ​4、不允许使用原先的八进制格式；
// var num = 0o123; // 0o开头的表示八进制——这种是允许的
// var num2 = 0x123; // 0x开头的表示十六进制——这种是允许的
// var num3 = 0b100; // 0b开头的表示二进制——这种是允许的
// console.log(num, num2, num3);

// ​5、不允许使用with；

// // ​6、eval函数不会向上引用变量；
// var jsString = 'var message = "Hello Word"; console.log(message)';
// eval(jsString);
// console.log(message); // 非严格模式下，进行打印，严格模式则报错

