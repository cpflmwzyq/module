// import {a, b} from "./m1.js";
// import m2, {k, t} from "./m2.js";
// // m2模块等价写法
// // import { k, default as m2} from "./m2.js"

// export {a, b, k, m2 as default};
// export const r = "m-r";




// 下面的代码与上面所有的代码等价 不用导入直接导出 别人的模块
export {a,b} from "./m1.js";
export {k, t, default} from "./m2.js";
export const r = "m-r";