const isArray = require('./array')
const isObjLoose = require('./objLoose')
const isNullOrUndef = require('./nullOrUndefined')
const isFunction = require('./function')

module.exports = x =>
  !isNullOrUndef(x) && !isArray(x) && !isFunction(x) && isObjLoose(x)
