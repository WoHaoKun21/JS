// // 1、测试箭头函数中this指向————都指向window
// var name = "why";

// var foo = () => {
//   console.log(this);
// };

// foo();
// var obj = { foo: foo };
// obj.foo();
// foo.call("abc");

// 2、应用场景
var obj = {
  data: [],
  getData: function () {
    // 发送网络请求，将请求结果放到上面的data中
    // 不使用箭头函数
    // var _this = this;
    // setTimeout(function () {
    //   var result = ["abc", "cba", "nba"];
    //   _this.data = result;
    // }, 2000);

    // 使用箭头函数————不用将之前的this进行存储，它会自动去上下文作用域寻找this
    setTimeout(() => {
      var result = ["abc", "cba", "nba"];
      this.data = result;
      console.log(obj.data);
    }, 2000);
  },
};

obj.getData();
