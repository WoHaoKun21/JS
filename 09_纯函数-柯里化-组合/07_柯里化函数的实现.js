// 函数柯里化的实现
function add1(x, y, z) {
  return x + y + z;
}

function add2(x, y, z) {
  x = x + 2;
  y = y * 2;
  z = z * z;
  return x + y + z;
}

function makeAdder(count) {
  count = count * count;
  return function (num) {
    return count + num;
  };
}

function log(date, type, message) {
  console.log(
    `[${date.getHours()}:${date.getMinutes()}][${type}]: [${message}]`
  );
}

// 封装一个函数柯里化————不需要手动将函数转为柯里化
function hyCurrying(fn) {
  // 把函数转变为柯里化函数
  function curried(...args) {
    // 判断当前已经接收的参数的个数，和参数本身需要接收的参数是否已经一致了
    // 1、当已经传入的参数大于等于需要的参数时，就执行这个函数
    if (args.length >= fn.length) {
      return fn.apply(this, args); // 绑定this
    } else {
      // 2、没有达到需要的参数时，返回一个新的函数，将之前的参数和继续来接收的参数合并
      return function (...args2) {
        // 接收到参数后，需要递归调用curried来检查哈桑农户的个数是否达到指定的长度
        return curried.apply(this, [...args, ...args2]);
      };
    }
  }
  return curried;
}

var curryAdd = hyCurrying(add1);

console.log(curryAdd(10, 20)(30));
console.log(curryAdd(10)(20, 30));
console.log(curryAdd(10, 20, 30));
