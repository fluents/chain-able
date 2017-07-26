const curry = require('../fp/curry')

/**
 * Delays a function for the given number of milliseconds, and then calls
 * it with the arguments supplied.
 *
 * @since 5.0.0-beta.5
 *
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @return {number} Returns the timer id.
 *
 * @curried 2
 * @func
 * @fork 0.1.0
 * @category Function
 *
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L818 underscore-delay}
 * {@link https://github.com/lodash/lodash/blob/master/delay.js lodash-delay}
 * @see {@link lodash-delay}
 * @see {@link underscore-delay}
 *
 * @example
 *
 *   delay(text => console.log(text), 1000, 'later')
 *   // => Logs 'later' after one second.
 *
 */
function delay(func, wait, ...args) {
  // return setTimeout(func, +wait || 0, ...args)
  return setTimeout(function() {
    return func.apply(this, args)
  }, wait)
}

module.exports = curry(2, delay)
