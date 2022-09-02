function add(x, y, z) {
  x = x + 2;
  y = y * 2;
  z = z * z;
  return x + y + z;
}

var result = add(10, 20, 30);
console.log(result);

// 柯里化的方式进行修改
function add2(x) {
  x = x + 2;
  return function (y) {
    y = y * 2;
    return function (z) {
      z = z * z;
      return x + y + z;
    };
  };
}

var result2 = add2(10)(20)(30);
console.log(result2);

// ES6的函数柯里化
var add3 = (x) => {
  x = x + 2;
  return (y) => {
    y = y * 2;
    return (z) => {
      z = z * z;
      return x + y + z;
    };
  };
};

var result3 = add3(10)(20)(30);
console.log(result3);
