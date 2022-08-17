// 代码执行过程：编译阶段和执行阶段
var name = "why";
console.log("代码执行过程：", num1);
var num1 = 20;
var num2 = 30;
var result = num1 + num2;
console.log("代码执行的结果：", result);
// 代码运行方式：1、在浏览器中运行(通过script引入运行)；2、在node中运行：node js文件路径

/** 
 * 1、代码解析，v8引擎内部帮助我们自动创建一个全局对象：var GlobalObject = { String, Date, setTimeout, setInterval, window: GlobalObject, ... }
 * 2、运行代码；
 *   2.1：v8引擎为了执行代码，v8引擎内部会有一个执行上下文栈(函数调用栈)
 *   2.2：因为我们执行的是全局代码，为了全局代码都能正常的执行，需要创建全局执行上下文(全局代码需要被执行时才会创建)
 * 
 * 代码解析阶段：
 * var globalObject = {
 *      String: String,
 *      Date: Date,
 *      setTimeout: setTimeout,
 *      setInterval: setInterval,
 *      window: globalObject,
 *      name: undefined,
 *      num1: undefined,
 *      num2: undefined,
 *      ...
 * }
*/
