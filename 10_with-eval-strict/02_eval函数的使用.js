var message = "Hello Word";
console.log(message);

// 将上面的代码放到字符串里面
var jsString =
  'var message = "Hello Word"; console.log("eval函数执行",message);'; // 如何执行字符串里面的代码呢？
eval(jsString); // 将字符串放入到eval函数中，会将字符串中的js代码进行执行
