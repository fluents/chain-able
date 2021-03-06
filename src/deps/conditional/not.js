/**
 * return a negated function
 * @memberOf conditional
 * @since  4.0.1
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
