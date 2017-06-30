const isNull = require('./null')
const isUndefined = require('./undefined')

/**
 * @desc Checks if `value` is `null` or `undefined`.
 * @alias isNil
 * @category Lang
 *
 * @param  {*} x value
 * @return {boolean} isNullOrUndefined
 *
 * @since 4.0.0-alpha.1
 * @memberOf is
 * @func isNullOrUndefined
 *
 * @see is/null
 * @see is/undefined
 * @see https://github.com/infernojs/inferno/blob/master/packages/inferno-shared/src/index.ts#L23
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
