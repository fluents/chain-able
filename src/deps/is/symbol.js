const toS = require('./toS')

/**
 * @desc checks if `value` is classified as a `Symbol` primitive or object.
 * @since 4.0.0
 * @memberOf is
 *
 * @param {*} value The value to check.
 * @return {boolean} Returns `true` if `value` is a symbol, else `false`.
 * 
 * @category Lang
 *
 * {@link https://nodejs.org/api/util.html#util_util_issymbol_object node-util-issymbol}
 * @see {@link node-util-issymbol}
 * 
 * @example
 *
 *   isSymbol(Symbol.iterator)
 *   //=> true
 *
 *   isSymbol('abc')
 *   //=> false
 *
 */
module.exports = x => toS(x) === '[object Symbol]'
