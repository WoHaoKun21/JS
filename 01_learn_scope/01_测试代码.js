// // 1、 v8引擎解析代码过程：
// //  遇到script标签后，交给v8引擎解析，解析完成后，把解析结果放到栈中，并且把栈顶的结果放到变量中，然后把栈顶的结果移除。
// const name = "why";
// console.log(name);
// function foo() {
//     console.log("foo");
// }
// foo();


// 2、函数预解析：
function outer() {// 这个函数会被进行解析成AST结构
    console.log("outer");
    function inner() {// 不管里面有多少代码都不会被解析，因为没有被调用
        var inner = "inner";
        console.log(inner);
    }
}
outer();// 调用函数