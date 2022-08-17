var n = 100;
function foo() {
  n = 200; // 改变了全局变量里面的属性值
}
foo();
console.log(n);
