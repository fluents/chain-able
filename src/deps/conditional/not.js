const curry = require('../fp/curry')

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
 * @param  {*} x value to pass to function
 * @return {Function} !Function(x)
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
const not = (fn, x) => !fn(x)
module.exports = curry(2, not)

// curry(2,
// function not(predicate) {
//   return function() {
//     return !predicate.apply(this, arguments)
//   }
// }
