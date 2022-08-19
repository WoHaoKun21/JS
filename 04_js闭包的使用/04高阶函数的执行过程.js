// 高阶函数的执行过程；
function foo() {
  function bar() {
    console.log("bar");
  }
  return bar;
}

var fn = foo();
fn(); // bar
