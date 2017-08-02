const isNull = require('./null')
const isUndefined = require('./undefined')

/**
 * @desc Checks if `value` is `null` or `undefined`.
 * @since 4.0.0-alpha.1
 * @memberOf is
 *
 * @param  {*} x value
 * @return {boolean} isNullOrUndefined
 *
 * @name isNullOrUndefined
 * @alias isNill
 * @alias isNil
 *
 * @func
 * @category Lang
 *
 * {@link https://github.com/gcanti/tcomb/blob/master/lib/isNil.js tcomb-isnill}
 * {@link http://ramdajs.com/docs/#isNil ramda-isnill}
 * {@link https://github.com/infernojs/inferno/blob/master/packages/inferno-shared/src/index.ts#L23 inferno-isnullorundefined}
 * {@link https://nodejs.org/api/util.html#util_util_isnullorundefined_object node-util-isnullorundefined}
 * @see {@link inferno-isnullorundefined}
 * @see {@link ramda-isnil}
 * @see {@link tcomb-isnil}
 * @see {@link node-util-isnullorundefined}
 * @see is/null
 * @see is/undefined
 *
 * @example
 *
 *  isNullOrUndefined(null)
 *  //=> true
 *  isNullOrUndefined(undefined)
 *  //=> true
 *  isNullOrUndefined(void 0)
 *  //=> true
 *
 *  isNullOrUndefined(NaN)
 *  //=> false
 *  isNullOrUndefined({})
 *  //=> false
 *  isNullOrUndefined('')
 *  //=> false
 *  isNullOrUndefined(1)
 *  //=> false
 *  isNullOrUndefined(false)
 *  //=> false
 *
 */
module.exports = function isNullOrUndef(x) {
  return isUndefined(x) || isNull(x)
}
