function add(x, y, z) {
  x = x + 2;
  y = y * 2;
  z = z * z;
  return x + y + z;
}

var result = add(10, 20, 30);
console.log(result);

// 柯里化的方式进行修改——每一层都有一个单一的职责
function add2(x, y, z) {
  x = x + 2;
  return function () {
    y = y * 2;
    return function () {
      z = z * z;
      return x + y + z;
    };
  };
}

var result2 = add2(10, 20, 30)()();
console.log(result2);
