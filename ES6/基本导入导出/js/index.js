// import {
//     a,
//     test
// } from "./a.js" //{}里面放的是导出的名字
import {
    b
} from "./b.js"
// test()
import {
    a as a1
} from "./a.js" //把导入的a改名字，但是不能改值 a = 18 报错
import "./init.js" //这种写法表示，我只想运行一次init.js模块中的代码，并不要它导出的东西，也会有模块缓存，多次导入只运行一次
console.log(b);
console.log(a1);
// console.log(a1);

// import * as obj from "./a.js"; //把a.js模块中的所有东西一起导入到obj中
// console.log(obj);
