const path = require('path')
const url = path.resolve('./a.js')
const a = require(url)
// const a = require('./a.js')
console.log(a)