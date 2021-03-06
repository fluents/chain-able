/**
 * @param  {*} x value
 * @return {boolean} isNumberPrimitive
 *
 * @since 3.0.0
 * @memberOf is
 * @func isNumberPrimitive
 * @see is/real
 *
 * @example
 *
 *  isNumberPrimitive(1)
 *  //=> true
 *  isNumberPrimitive(Number(1))
 *  //=> true
 *  isNumberPrimitive(NaN)
 *  //=> true
 *  isNumberPrimitive(new Number(1))
 *  //=> false
 *
 *  isNumberPrimitive(null)
 *  //=> false
 *  isNumberPrimitive(undefined)
 *  //=> false
 *  isNumberPrimitive(void 0)
 *  //=> false
 *  isNumberPrimitive({})
 *  //=> false
 *  isNumberPrimitive('')
 *  //=> false
 *  isNumberPrimitive(false)
 *  //=> false
 */
module.exports = x => typeof x === 'number'
