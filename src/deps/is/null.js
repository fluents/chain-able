/**
 * @param  {*} x value
 * @return {boolean} isNull
 *
 * @since 3.0.0
 * @memberOf is
 * 
 * @func 
 * @name isNull
 * 
 * {@link https://nodejs.org/api/util.html#util_util_isnull_object node-util-isnull}
 * @see {@link node-util-isnull}
 * 
 * @example
 *
 *  isNull(null)
 *  //=> true
 *
 *  isNull(undefined)
 *  //=> false
 *  isNull(void 0)
 *  //=> false
 *  isNull({})
 *  //=> false
 *  isNull('')
 *  //=> false
 *  isNull(1)
 *  //=> false
 *
 */
module.exports = x => x === null
