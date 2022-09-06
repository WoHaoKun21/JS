function hyCompose(...fns) {
  var length = fns.length;
  for (var i = 0; i < length; i++) {
    if (typeof fns[i] !== "function") {
      // throw new TypeError("要求参数必须都为函数");
      throw new TypeError("Expected arguments are functions");
    }
  }

  return function compose(...args) {
    var index = 0;
    var result = length ? fns[index].apply(this, args) : args;
    while (++index < length) {
      result = fns[index].call(this, result);
    }
    return result;
  };
}

function dobule(m, n) {
  return m * 2;
}

function square(m, n) {
  return m ** 2;
}

var newFn = hyCompose(dobule, square);
console.log(newFn(10, 10));
