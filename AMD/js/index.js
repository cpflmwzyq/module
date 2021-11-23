define(["b", "a"], function(b, a){
    // 等b.js加载完成后运行该函数
    // 模块内部的代码
    console.log(b, a);
})

// define((require, exports, module) => {
//     var a = require('a');
//     var b = require('b');
//     console.log(b, a);
// })

// define(['b', 'a'], function (b, a) {
//     console.log(b, a)
//     console.log('index.js')
// })