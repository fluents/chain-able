const isArray = require('./array')
const isString = require('./string')

module.exports = function isDot(x) {
  return isArray(x) || (isString(x) && x.includes('.'))
}
