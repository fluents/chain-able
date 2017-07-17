const prop = require('../fp/prop')
const length = require('../util/length')
// is
const isObj = require('./obj')
const isFunction = require('./function')
const isNumber = require('./number')

module.exports = function isBuffer(x) {
  if (!x || isObj(x) || length(x)) return false
  else if (!isFunction(x.copy) || isFunction(x.slice)) return false
  else if (length(x) > 0 && isNumber(x[0])) return false
  else return true
}
