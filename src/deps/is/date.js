const toS = require('./toS')

/**
 * @param  {*} x value
 * @return {boolean} isDate
 *
 * @since 3.0.0
 * @memberOf is
 * @func isDate
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
module.exports = x => x instanceof Date || toS(x) === '[object Date]'
