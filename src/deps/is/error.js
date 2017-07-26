const toS = require('./toS')

/**
 * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
 * `SyntaxError`, `TypeError`, or `URIError` object.
 *
 * @version 3.0.0 <- adding .message prop check
 * @version 2.0.0 <- just string tag
 * @version 1.0.0 <- was instanceof
 *
 * @param  {*} x value
 * @return {boolean} isError
 *
 * @since 4.0.0
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
  return toS(x) === '[object Error]'
  //  return tag == '[object Error]' || tag == '[object DOMException]' ||
  // (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value))

  // x instanceof Error ||
}
