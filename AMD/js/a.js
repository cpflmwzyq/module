// AMD使用先定义的define里面的内容

// define(function () {
//     return {
//         name: '陈鹏飞',
//         age: 18
//     }
// })

define(function (require, exports, module) {
    var b = require("b");
    console.log("a模块的内部代码", b);
    module.exports = "a模块的内容";
})

define(["b"], function (b) {
    console.log("------a模块的内部代码");
    return "a模块的内容";
})

