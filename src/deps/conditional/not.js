const curry = require('../fp/curry')

/**
 * return a negated function
 * A function wrapping a call to the given function in a `!` operation.
 * It will:
 * - return `true` when the underlying function would return a false-y value,
 * - and `false` when it would return a truth-y one.
 *
 * {@link https://github.com/ramda/ramda/blob/master/src/not.js ramda-not}
 * {@link https://github.com/lodash/lodash/blob/master/negate.js lodash-negate}
 * {@link http://documentcloud.github.io/underscore-contrib/#not-1 underscore-not}
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L916 underscore-negate}
 * @see {@link underscore-negate}
 * @see {@link underscore-not}
 * @see {@link lodash-negate}
 * @see {@link ramda-not}
 *
 * @alias negate
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
