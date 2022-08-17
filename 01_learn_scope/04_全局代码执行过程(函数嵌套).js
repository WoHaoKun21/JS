// var name = "why";// 如果注销掉也不会报错，因为window对象属性上面有name属性——较为特殊
var age = 18;
foo(123);
function foo(num) {
  console.log(m);
  var m = 20;
  var n = 10;
  // 函数嵌套函数
  function bar() {
    console.log(age);
  }
  bar();
}
