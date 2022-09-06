// 组合函数没组合前
function dobule(num) {
  return num * 2;
}

function square(num) {
  return num ** 2;
}

var count = 10;
var result = square(dobule(count));
console.log(result);

// 将上面的函数进行简单的组合调用————组合函数
function componseFn(m, n) {
  return function (count) {
    return n(m(count));
  };
}

var newFn = componseFn(dobule, square);
console.log(newFn(10));
