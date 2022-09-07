function foo() {
  "use strict";
  console.log(this); // 非严格模式下指向window————仅限于默认绑定
}

foo();

function foo2() {
  console.log(this); // 严格模式下指向undefined————仅限于默认绑定
}
foo2();

var obj = {
  name: "why",
  foo: foo,
};

obj.foo();
