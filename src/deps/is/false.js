/**
 * @param  {*} x value
 * @return {boolean} isFalse
 *
 * @since 4.0.0-alpha.1
 * @memberOf is
 * @func isFalse
 *
 * @example
 *
 *  isFalse(false)
 *  //=> true
 *  isFalse(true)
 *  //=> false
 *  isFalse(0)
 *  //=> false
 *  isFalse('')
 *  //=> false
 *
 */
module.exports = function isFalse(x) {
  return x === false
}
