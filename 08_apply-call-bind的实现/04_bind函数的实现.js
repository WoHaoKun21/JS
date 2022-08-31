// hybind函数的实现————对应bind方法
Function.prototype.hybind = function (thisArg, ...argArray) {
  // 1、获取到需要调用的函数
  var fn = this;
  // 绑定this，并判定绑定的类型
  thisArg =
    thisArg !== null || thisArg !== undefined ? Object(thisArg) : window; // 传过来的如果是undfined或者null

  return function (...args) {
    // 3、将函数放到thisArg中调用
    thisArg.fn = fn;
    var finalArgs = [...argArray, ...args]; // 将两个参数进行合并
    var result = thisArg.fn(...finalArgs);
    delete thisArg.fn;
    return result;
  };
};

function foo() {
  console.log("foo被执行", this);
}

function sum(num1, num2, num3, num4) {
  console.log(num1, num2, num3, num4);
}

// // 1、系统的bind调用
// var bar = foo.bind("abc");
// bar();

// var newSum = sum.bind("aaa", 10, 20, 30, 40);
// newSum();

// var newSum = sum.bind("aaa", 10);
// newSum(20, 30, 40);

// // 2、使用自己实现hybind
// var bar = foo.hybind("abc");
// bar();

var bar2 = sum.hybind("abc", 10, 20);
bar2(30, 40);
