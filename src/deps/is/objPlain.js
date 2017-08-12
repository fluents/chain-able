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
 * {@link https://github.com/facebook/immutable-js/blob/master/src/fromJS.js#L52 immutable-is-plain-object}
 * {@link https://github.com/mobxjs/mobx/blob/master/src/utils/utils.ts#L78 mobx-isobjectplain}
 * {@link https://github.com/lodash/lodash/blob/master/isPlainObject.js lodash-isplainobject}
 * {@link http://stackoverflow.com/questions/34111902/why-do-lodashs-isobject-isplainobject-behave-differently-than-typeof-x stackoverflow-lodash-isplainobject}
 * {@link https://github.com/madrobby/zepto/blob/master/src/zepto.js#L74 zepto-isplainobject}
 * {@link https://github.com/canjs/canjs/blob/2.3-legacy/util/object/isplain/isplain.js can-is-plain}
 * @see {@link can-is-plain}
 * @see {@link zepto-isplainobject}
 * @see {@link stackoverflow-lodash-isplainobject}
 * @see {@link lodash-isplainobject}
 * @see {@link mobx-isobjectplain}
 * @see {@link immutable-is-plain-object}
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
 * //=> false
 *
 * isPlainObject([1, 2, 3])
 * //=> false
 *
 * isPlainObject({ 'x': 0, 'y': 0 })
 * //=> true
 *
 * isPlainObject(Object.create(null))
 * //=> true
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
