const objStrict = require('./objStrict')
const isFunction = require('./function')

/**
 * @func isObj
 *
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @return {boolean} Returns `true` if `value` is an object, else `false`.
 *
 * @memberOf is
 * @see https://github.com/lodash/lodash/blob/master/isObject.js
 * @NOTE Object.prototype.toString.call(val) === '[object Object]'
 *
 * @example
 *
 * isObject({})
 * // => true
 *
 * isObject([1, 2, 3])
 * // => true
 *
 * isObject(Function)
 * // => true
 *
 * isObject(null)
 * // => false
 */
module.exports = x => objStrict(x) || isFunction(x)
