// 闭包内存泄漏案例
function createFnArray() {
  // 数组占据空间计算：4 * 1024 * 1024 = 4M；4表示一个number类型占据的空间
  var arr = new Array(1024 * 1024).fill(1); // 创建一个4M的数组，并使用fill：方法把数组里的内容进行填充——填充的是数字1
  return function () {
    console.log(arr.length);
  };
}

// var arrayFn = createFnArray(); // 调用函数，将返回的函数进行赋值操作
// arrayFn = null;// 标识函数不再使用，防止内泄露

var arrayFns = [];
for (var i = 0; i < 100; i++) {
  arrayFns.push(createFnArray()); // 调用一百次函数，将函数的返回值存储到创建的数组中
}
