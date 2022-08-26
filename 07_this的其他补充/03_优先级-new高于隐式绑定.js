var obj = {
    name: "obj",
    foo: function () {
      console.log(this);
    },
  };
  
  // 当this的隐式规则和new同时存在，new的规则优先级高于隐式
  var f = new obj.foo(); //打印的this是foo创建的{}对象
  console.log(f);
  