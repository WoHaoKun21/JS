// // 1、setTimeout

// function hySetTimeout(fn, duration) {
//   fn.call("abc");
// }

// hySetTimeout(function () {
//   console.log(this); // 被调用的时候，call改变了this指向
// }, 3000);

// setTimeout(function () {
//   console.log(this);
// }, 2000);

// // 2、监听盒子点击
// const boxDiv = document.getElementsByClassName("box")[0];
// boxDiv.onclick = function () {
//   console.log(this);
// };

// boxDiv.addEventListener("click", function () {
//   console.log(this); // fn.call(boxDiv)
// });
// boxDiv.addEventListener("click", function () {
//   console.log(this); // fn.call(boxDiv)
// });
// boxDiv.addEventListener("click", function () {
//   console.log(this); // fn.call(boxDiv)
// });

// 3、数组.forEach/map/filter/find
var names = ["abc", "cba", "nba"];
// names.forEach(function (item) {
//   console.log(item, this); // 如果forEach有第二个参数，那么this会显示指向第二个参数，箭头函数则会指向上下文对象
// }, {});

// names.map(function (item) {
//   console.log(item, this); // 如果map有第二个参数，那么this会显示指向第二个参数，箭头函数则会指向上下文对象
// }, 6);
