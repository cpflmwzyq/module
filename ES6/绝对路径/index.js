const path = require('path')
const url = path.resolve('./a.js')
import {
    a
} from `${url}`
console.log(a)