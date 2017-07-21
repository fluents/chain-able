/**
 * return a negated function
 * A function wrapping a call to the given function in a `!` operation.
 * It will:
 * - return `true` when the underlying function would return a false-y value,
 * - and `false` when it would return a truth-y one.
 *
 * @name not
 * @memberOf conditional
 * @since  4.0.1
 * @func
 *
 * @param  {Function} fn any function
 * @return {Function} !Function
 *
 * @example
 *
 *    const falsed = not(x => true)
 *    const trued = not(x => false)
 *
 *    trued()
 *    //=> true
 *
 *    falsed()
 *    //=> false
 *
 */
module.exports = fn => x => !fn(x)

// function not(predicate) {
//   return function() {
//     return !predicate.apply(this, arguments)
//   }
// }
