const includes = require('../conditional/includes')
const isArray = require('./array')
const isString = require('./string')

/**
 * @since 3.0.0
 * @memberOf is
 * @name isDot
 *
 * @TODO update with conditional
 *
 * @param  {*} x value to check
 * @return {boolean} x isDot
 *
 * @see isArray
 * @see isString
 * @see includes
 *
 * @example
 *    isDot('eh.oh')      //=> true
 *    isDot('eh')         //=> false
 *    isDot(['eh', 'oh']) //=> true
 */
module.exports = function isDot(x) {
  return isArray(x) || (isString(x) && x.includes('.'))
}
