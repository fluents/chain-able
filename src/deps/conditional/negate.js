/**
 * @name negate
 * @memberOf conditional
 * @since 5.0.0-beta.6
 * @see conditional/not
 * @param  {Function} predicate call this
 * @return {Function} call this to call predicate with arguments
 *
 * @example
 *    const T = x => true
 *    const F = negate(t)
 *    F(true)   //=> false
 *    F(false)  //=> true
 */
module.exports = function negate(predicate) {
  return function() {
    return !predicate.apply(this, arguments)
  }
}
