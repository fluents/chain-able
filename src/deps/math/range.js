const isNill = require('../is/nullOrUndefined')

/**
 * Generate an integer Array containing an arithmetic progression. A port of
 * the native Python `range()` function. See
 * [the Python documentation](http://docs.python.org/library/functions.html#range).
 *
 * @name range
 * @since 5.0.0-beta.6
 * @memberOf math
 *
 * @param {number} start starting number
 * @param {number} [stop] ending number, defaultsTo(start)
 * @param {number} [step] step, defaultsto(-1 || 1)
 * @return {Array<number>} [start...stop]
 *
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L714 underscore-range}
 * @see {@link underscore-range}
 *
 * @example
 *
 *   range(10)
 *   //=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 *   range(1, 11)
 *   //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 *   range(0, 30, 5)
 *   //=> [0, 5, 10, 15, 20, 25]
 *   range(0, -10, -1)
 *   //=> [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
 *   range(0)
 *   //=> []
 *
 */
module.exports = function range(start, stop, step) {
  if (isNill(stop)) {
    stop = start || 0
    start = 0
  }
  if (!step) {
    step = stop < start ? -1 : 1
  }

  const length = Math.max(Math.ceil((stop - start) / step), 0)
  const result = new Array(length)

  for (let idx = 0; idx < length; idx++, start += step) {
    result[idx] = start
  }

  return result
}
