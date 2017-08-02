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
 * {@link https://github.com/infernojs/inferno/blob/master/packages/inferno-shared/src/index.ts#L57 inferno-isundefined}
 * {@link https://nodejs.org/api/util.html#util_util_isundefined_object node_util_isundefined}
 * @see {@link node_util_isundefined}
 * @see {@link inferno-isundefined}
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
