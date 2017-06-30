/**
 * @param  {*} x value
 * @return {boolean} isNull
 *
 * @since 3.0.0
 * @memberOf is
 * @func isNull
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
