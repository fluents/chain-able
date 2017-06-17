const isObj = require('./obj')

// Object.prototype.toString.call(val) === '[object Object]' &&
module.exports = val => isObj(val) && Object.keys(val).length !== 0
