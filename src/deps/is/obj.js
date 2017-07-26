const objTypeof = require('./objTypeof')
const isFunction = require('./function')
const isNull = require('./null')
// const objNotNull = require('./objNotNull')

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 * @memberOf is
 * @since 3.0.0
 * @category Lang
 *
 * @param {*} value The value to check.
 * @return {boolean} Returns `true` if `value` is an object, else `false`.
 *
 * @func
 * @name isObj
 * @alias isObject
 *
 * {@link https://github.com/lodash/lodash/blob/master/isObject.js lodash-isobject}
 * {@link https://github.com/mobxjs/mobx/blob/master/src/utils/utils.ts#L74 mobx-is-obj}
 * @see {@link mobx-isobject}
 * @see {@link lodash-isobject}
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
 *
 */
module.exports = x => !isNull(x) && (objTypeof(x) || isFunction(x))
