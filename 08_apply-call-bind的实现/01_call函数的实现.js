// 给所有的函数添加一个hycall方法
Function.prototype.hycall = function (thisArg, ...args) {
  // 在这里执行调用的函数（foo）
  // 问题：得可以获取到那一个函数执行了hycall函数
  // 1、获取被调用的函数
  var fn = this;

  // 2、对thisArg转成对象类型防止传入的是非对象类型
  thisArg =
    thisArg !== null || thisArg !== undefined ? Object(thisArg) : window; // 传过来的如果是undfined或者null

  // 3、调用需要被执行的函数————只不过会多出一个fn属性
  thisArg.fn = fn;
  var result = thisArg.fn(...args); // 展开运算符
  delete thisArg.fn;

  // 4、将最终的结果返回出去
  return result;
};

function foo() {
  console.log("foo函数的执行", this);
}

function sum(num1, num2) {
  console.log("sum函数被执行", this, num1, num2);
  return num1 + num2;
}

// // 系统的函数的call方法
// foo.call({});
// var result = sum.call("abc", 20, 30);
// console.log("系统调用的结果：", result);

// 自己实现的函数的hycall方法
// 默认进行了隐式绑定————利用了隐式绑定事项call绑定
// foo.hycall({ name: "why", age: 18 });
// foo.hycall(undefined);
var result = sum.hycall("abc", 20, 30, 40, 50);
console.log("hycall的调用：", result);
