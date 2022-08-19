function foo() {
  var name = "foo";
  var age = 18;

  function bar() {
    // 在这个闭包函数执行的时候会有一个“parentScope”属性是指向父级作用域对象的，这个属性可以用来访问父级作用域的自由变量
    console.log(name);
    console.log(age);
  }
  return bar;
}

var fn = foo();
fn();

/* 如果只使用一次就不使用了，闭包导致的内存占用会一直存在，导致内存浪费和数据泄露；如果还会用到就不需要进行释放，解决：
 * fn = null;
 * foo = null;
 */
