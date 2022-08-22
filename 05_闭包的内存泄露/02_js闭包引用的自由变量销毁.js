// js闭包引用的自由变量销毁————
function foo() {
  var name = "why";
  var age = 18;

  function bar() {
    // debugger;// 此处调试器会暂停执行，可以查看变量的值
    console.log(name); // 之访问name变量, age不进行访问, 但是age属性却没有进行销毁
  }
  return bar;
}

var fn = foo();
fn(); // why
