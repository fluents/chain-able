const toS = require('./toS')
const isBooleanPrimitive = require('./booleanPrimitive')

/**
 * @desc Checks if `value` is classified as a boolean primitive OR object.
 * @since 3.0.0
 * @version 1.0.0 <- supported primitive & object
 * @version 2.0.0 <- split out primitive
 * @category Lang
 * @memberOf is
 *
 * @param  {*} x value
 * @return {boolean} isBoolean
 *
 * @extends isTrue
 * @extends isFalse
 * @extends isBooleanPrimitive
 *
 * @func
 * @name isBoolean
 *
 * {@link https://github.com/infernojs/inferno/blob/master/packages/inferno-shared/src/index.ts#L23 inferno-isboolean}
 * {@link https://github.com/gcanti/tcomb/blob/master/lib/isBoolean.js tcomb-isboolean}
 * {@link https://nodejs.org/api/util.html#util_util_isboolean_object node-util-isboolean}
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L1352 underscore-is-boolean}
 * @see {@link inferno-isboolean}
 * @see {@link tcomb-isboolean}
 * @see {@link underscore-is-boolean}
 * @see {@link node-util-isboolean}
 * @see is/toS
 *
 * @example
 *
 *  isBoolean(false)
 *  //=> true
 *  isBoolean(new Boolean(1))
 *  //=> true
 *  isBoolean(1)
 *  //=> false
 *  isBoolean('')
 *  //=> false
 *
 */
module.exports = function isBoolean(x) {
  return isBooleanPrimitive(x) || toS(x) === '[object Boolean]'
}
