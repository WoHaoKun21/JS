var names = ["abc", "acb", "bac", "bca"];

// // slice只要给它传入一个start/end，name对于同一个数组来说，它会给我们返回确定的值
// // slice函数本身它是不会修改原来的数组
// // slice本身就是一个纯函数，以为它没有改变原有的数据
// var newNames = names.slice(0, 3); // 数组截取
// console.log(newNames);
// console.log(names);

// splice在执行的时候，会修改掉调用数组对象本身，修改的这个操作就是产生的副作用
// splice就不是一个纯函数
var newNames2 = names.splice(2);
console.log(newNames2);
console.log(names);
