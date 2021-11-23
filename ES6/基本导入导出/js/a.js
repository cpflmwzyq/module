// import { b } from "./b.js" //导入b.js模块

export let a = 1;//导出a，值为1，类似于CommonJS中的exports.a = 1
// export function test(){//导出test，值为一个函数，类似于CommonJS中的exports.test = function(){}
//     console.log('test')
// }

// export class Person{//导出类
    
// }

// export const name = "abc";

let age = 18;
let sex = 1;
export {age, sex} //将age变量的名称作为导出的名称，age变量的值，作为导出的值...
