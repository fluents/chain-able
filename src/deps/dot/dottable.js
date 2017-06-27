const isObj = require('../is/obj')
const isArray = require('../is/array')
const isString = require('../is/string')

// const isDot = require('./is/dot')
// const isDottable = (obj, path) => isObj(obj) && isDot(path)
module.exports = (obj, path) => (isObj(obj) && isString(path)) || isArray(path)
