const isNull = require('./null')
const isUndefined = require('./undefined')

module.exports = function isNullOrUndef(o) {
  return isUndefined(o) || isNull(o)
}
