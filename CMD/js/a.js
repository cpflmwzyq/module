// CMD使用后定义的define的代码
// define(["b"], function (require,exports,module,b) {
//     console.log("-----------a模块的内部代码");
//     console.log(b)
//     module.exports = "a模块的内容1";
// })

define(function (require, exports, module) {
    let b = require("b");
    console.log("a模块的内部代码", b);
    return "a模块的内容2";
})

