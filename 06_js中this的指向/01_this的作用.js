// 从某写角度来说，开发中如果没有this，很多的问题我们也是有解决方案
// 但是没有this，会让我们编写代码变得非常的不方便
var obj = {
  name: "why",
  eating: function () {
    console.log("eating数据：", this.name + "在吃饭");
  },
  running: function () {
    console.log("running数据：", this.name + "在跑步");
  },
  studying: function () {
    console.log("studying数据：", this.name + "在学习");
  },
};

var person = {
  name: "kobe",
  eating: function () {
    console.log("eating数据：", this.name + "在吃饭");
  },
  running: function () {
    console.log("running数据：", this.name + "在跑步");
  },
  studying: function () {
    console.log("studying数据：", this.name + "在学习");
  },
};

// obj.eating();
// person.running();
// obj.studying();
