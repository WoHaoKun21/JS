function foo() {
  console.log(n); // 打印的undefined，因为当前作用域已经哟了对应的属性
  var n = 200;
  console.log(n);
}
var n = 100;
foo();
