const toS = require('./toS')

/**
 * @param  {*} x value
 * @return {boolean} isDate
 *
 * @since 3.0.0
 * @memberOf is
 * @func isDate
 * @extends toS
 *
 * @example
 *
 *  isDate(new Date())
 *  //=> true
 *  isDate(Date.now())
 *  //=> false
 *  isDate(1)
 *  //=> false
 *  isDate('')
 *  //=> false
 *
 * @example
 *
 *  const e = {}
 *  eh[Symbol.toStringTag] = '[Object Date]'
 *  isDate(eh)
 *  //=> true
 *
 * @example
 *
 *  class Eh extends Date()
 *  isDate(new Eh())
 *  //=> true
 */
module.exports = function isDate(x) {
  return toS(x) === '[object Date]'
  // x instanceof Date ||
}
