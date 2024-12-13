// import path from 'path'
const path = require('path')
console.log(`Current working dir - ${path.join(__dirname)}`)
console.log(path.join(__filename))
console.log(path.join(__dirname))

console.log(path.join(__dirname,"employees","one","two"))