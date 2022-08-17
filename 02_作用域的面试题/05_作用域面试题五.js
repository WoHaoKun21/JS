function foo() {
  var a = (b = 100);
  /*
   *会编译为：var a = 100;  b=100;
   */
}
foo();
console.log(a); // 找不到
console.log(b);// 得到100，但是不会打印出来，因为上一个打印错误终止运行了
