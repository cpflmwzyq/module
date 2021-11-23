// define(["b", "a"], function(b, a){
//     // 等b.js加载完成后运行该函数
//     // 模块内部的代码
//     // console.log(b, a);
//     console.log(b)
//     console.log(a)
// })

define((require, exports, module) => {
    let a = require('a');
    let b = require('b');
    console.log(a, b);
})