// 特殊的绑定，忽略显示绑定————超出了绑定规则
function foo() {
  console.log(this);
}

foo.apply("abc");
foo.call({});

// apply/call/bind：当传入为null/undefined时，自动将this绑定成全局对象————忽略显示绑定
foo.apply(null);
foo.call(undefined);

var bar = foo.bind(null);
bar();
