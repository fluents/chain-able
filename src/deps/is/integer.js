/**
 * Determine if the passed argument is an integer.
 * @since 5.0.0-beta.5
 * @memberOf is
 *
 * @param {*} x number to check if it is an integer
 * @return {boolean} x is integer
 *
 * @category Type
 *
 * {@link https://tc39.github.io/ecma262/#sec-isinteger emca-is-integer}
 * {@link https://github.com/ramda/ramda/blob/master/src/internal/_isInteger.js ramda-is-integer}
 * @see {@link ramda-is-integer}
 * @see {@link emca-is-integer}
 *
 * @example
 *
 *    isInteger(10)    //=> true
 *    isInteger(3.2)   //=> false
 *    isInteger(false) //=> false
 *
 */
module.exports = Number.isInteger || function _isInteger(x) {
  return (x << 0) === x
}
