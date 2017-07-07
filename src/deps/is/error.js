const toS = require('./toS')

/**
 * @param  {*} x value
 * @return {boolean} isError
 *
 * @memberOf is
 * @func isError
 *
 * @example
 *
 *  isError(new Error())
 *  //=> true
 *  isError(new Error().stack)
 *  //=> false
 *  isError(1)
 *  //=> false
 *  isError('')
 *  //=> false
 *
 * @example
 *
 *  const e = {}
 *  eh[Symbol.toStringTag] = '[Object Error]'
 *  isError(eh)
 *  //=> true
 *
 * @example
 *
 *  class Eh extends Error()
 *  isError(new Eh())
 *  //=> true
 *
 */
module.exports = function isError(x) {
  return x instanceof Error || toS(x) === '[object Error]'
}
