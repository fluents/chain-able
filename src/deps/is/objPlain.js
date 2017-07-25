const funcToString = require('../native/functionToString')
const hasOwnProperty = require('../util/hasOwnProperty')
const getPrototypeOf = require('../util/getPrototypeOf')
const isObjTag = require('./objTag')
const isObjectLike = require('./objNotNull')
const isFunction = require('./function')
const isNull = require('./null')

/** Used to infer the `Object` constructor. */
const objectConstructorString = funcToString.call(Object)

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @since 5.0.0-beta.5
 * @memberOf is
 *
 * @param {*} value The value to check.
 * @return {boolean} Returns `true` if `value` is a plain object, else `false`.
 *
 * @name isObjPlain
 * @alias isPlainObject
 * @alias isObjectPlain
 * @alias isBlankObject
 *
 * {@link https://github.com/madrobby/zepto/blob/master/src/zepto.js#L74 zepto-isplainobject}
 * {@link https://github.com/canjs/canjs/blob/2.3-legacy/util/object/isplain/isplain.js can-is-plain}
 * @see {@link can-is-plain}
 * @see {@link zepto-isplainobject}
 *
 * @see is/objNotNull
 * @see is/objTag
 *
 * @func
 * @fork 0.8.0
 * @category Lang
 *
 * @example
 *
 * function Foo() {
 *   this.a = 1
 * }
 *
 * isPlainObject(new Foo)
 * // => false
 *
 * isPlainObject([1, 2, 3])
 * // => false
 *
 * isPlainObject({ 'x': 0, 'y': 0 })
 * // => true
 *
 * isPlainObject(Object.create(null))
 * // => true
 *
 */
function isPlainObject(x) {
  if (!isObjectLike(x) || !isObjTag(x)) {
    return false
  }

  // --- get prototype
  const proto = getPrototypeOf(x)
  if (isNull(proto)) {
    return true
  }

  // --- check if constructor is === `Object.constructor`

  const constructor =
    hasOwnProperty(proto, 'constructor') &&
    proto.constructor

  return isFunction(constructor) && constructor instanceof constructor &&
    funcToString.call(constructor) === objectConstructorString
}

module.exports = isPlainObject
