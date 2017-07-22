/**
 * @desc Checks if `value` is `undefined`.
 * @category Lang
 *
 * @param  {*} x value
 * @return {boolean} isUndefined
 *
 * @since 4.0.0-alpha.1
 * @memberOf is
 * @func isUndefined
 *
 * @see is/nullOrUndefined
 * @see https://github.com/infernojs/inferno/blob/master/packages/inferno-shared/src/index.ts#L57
 *
 * @example
 *
 *  isUndefined(undefined)
 *  //=> true
 *  isUndefined(void 0)
 *  //=> true
 *
 *  isUndefined(null)
 *  //=> false
 *  isUndefined(NaN)
 *  //=> false
 *  isUndefined({})
 *  //=> false
 *  isUndefined('')
 *  //=> false
 *  isUndefined(1)
 *  //=> false
 *  isUndefined(false)
 *  //=> false
 *
 */
module.exports = x => x === undefined
