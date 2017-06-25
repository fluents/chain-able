const ObjectKeys = require('../util/keys')
const isObj = require('./obj')

// Object.prototype.toString.call(val) === '[object Object]' &&
module.exports = val => isObj(val) && ObjectKeys(val).length !== 0
