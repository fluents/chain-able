const toS = require('./toS')

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @since 4.0.0
 * @category Lang
 * @memberOf is
 *
 * @param {*} value The value to check.
 * @return {boolean} Returns `true` if `value` is a symbol, else `false`.
 *
 * @example
 *
 * isSymbol(Symbol.iterator)
 * // => true
 *
 * isSymbol('abc')
 * // => false
 *
 */
module.exports = x => toS(x) === '[object Symbol]'
