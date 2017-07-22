const length = require('../util/length')
const isObj = require('./obj')
const isFunction = require('./function')
const isNumber = require('./number')

/**
 * @desc isBuffer, global Buffer
 * @since 5.0.0-beta.1
 *
 * @memberOf is
 * @param {Buffer | *} x value to check if Buffer
 * @return {boolean} x is Buffer
 *
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * @see https://github.com/feross/is-buffer
 *
 * @example
 *
 *    isBuffer({}) //=> false
 *    isBuffer(new Buffer('eh')) //=> true
 *
 */
module.exports = function isBuffer(x) {
  if (!x || isObj(x) || length(x)) return false
  else if (!isFunction(x.copy) || isFunction(x.slice)) return false
  else if (length(x) > 0 && isNumber(x[0])) return false
  else return true
}

// another way to write it
// module.exports = function isBuffer(val) {
//   var c = val.constructor
//   return c &&
//     typeof c.isBuffer === 'function' &&
//     c.isBuffer(val)
// }
