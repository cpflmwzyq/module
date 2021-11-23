// import method, { name } from "./a.js"    //method作为默认导出


// import {name} from "./a.js"
// console.log(name);
// method();   //可以通过函数改变name的值，所以导出的时候尽量用const
// console.log(name);




// import "./arrayPatcher.js"   //只希望这个模块的代码运行一次，不需要导出
// var arr = [3,4,5,6,7];
// arr.print();



import * as m from "./m.js";
console.log(m);

