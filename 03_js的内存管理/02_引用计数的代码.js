// 垃圾回收机制的引用计数
var obj = { name: "why" };

var info = { name: "kobe", friend: obj };

var p = { name: "james", friend: obj };

// 引用计数存在一个最大的弊端：循环引用
var obj1 = { friend: obj2 };
var obj2 = { friend: obj1 };
// 可以使用obj1.friend = null来解决循环引用的问题，但是这样会导致内存泄漏