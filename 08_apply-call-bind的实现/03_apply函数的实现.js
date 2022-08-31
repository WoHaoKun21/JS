// apply函数的实现——————自己实现hyapply
Function.prototype.hyapply = function (thisArg, argArray) {
  // 实现apply方法
  // 1、利用隐式调用获取函数
  var fn = this;

  // 2、处理strin类型、number、boolean类型，以及不在规则内的null、undefined
  thisArg =
    thisArg !== null || thisArg !== undefined ? Object(thisArg) : window; // 如果thisArg是undefined/null，那么this指向window

  // argArray = argArray ? argArray : []; // 判断是否传入了第二个参数————也可以直接给参数一个默认值
  argArray = argArray || []; // 判断是否传入了第二个参数

  // 3、调用需要执行的函数，并进行处理
  thisArg.fn = fn;
  var result = thisArg.fn(...argArray);
  delete thisArg.fn;

  // 4、将结果进行返回
  return result;
};

function sum(num1, num2) {
  console.log("sum被调用：", this, num1, num2);
  return num1 + num2;
}

function foo(num1) {
  return num1;
}

function bar() {
  console.log("bar被执行", this);
}

// // 系统方法调用
// foo.apply({ name: "why" });
// var result = sum.apply({ name: "why" }, [20, 30, 40]);
// console.log("apply调用结果：", result);

// // 自己实现的函数的hyapply方法
// var result = sum.hyapply("abc", [20, 30, 40]);
// console.log("htapply函数的结果：", result);

// var result = foo.hyapply("abc", [20]);
// console.log("htapply函数的结果：", result);

bar.hyapply(0);
