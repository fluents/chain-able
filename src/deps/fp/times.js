const curry = require('../fp/curry')
const toLength = require('../cast/toLength')

/**
 * - Run a function **n** times.
 * - Calls an input function `n` times, returning an array containing the results
 * of those function calls.
 * - `fn` is passed one argument: The current value of `n`, which begins at `0`
 * and is gradually incremented to `n - 1`.
 * - Invokes the iteratee `n` times, returning an array of the results of
 * each invocation. The iteratee is invoked with one argumentindex).
 *
 * @since 5.0.0-beta.1
 * @memberOf fp
 * @curried 2
 *
 * @NOTE lodash & underscore have `(number, fn)`, ramda has `(fn, number)`
 *
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @return {Array} Returns the array of results.
 *
 * @name times
 * @fork 0.1.0
 * @category Util
 * @category List
 * @sig (Number -> a) -> Number -> [a]
 *
 * {@link https://github.com/lodash/lodash/blob/master/times.js lodash-times}
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L1436 underscore-times}
 * {@link https://github.com/ramda/ramda/blob/master/src/times.js ramda-times}
 * @see {@link ramda-times}
 * @see {@link underscore-times}
 * @see {@link lodash-times}
 * @see cast/toLength
 *
 * @example
 *
 *   times(3, String)
 *   //=> ['0', '1', '2']
 *
 *   times(4, () => 0)
 *   //=> [0, 0, 0, 0]
 *
 */
function times(n, iteratee) {
  n = toLength(n)
  const result = new Array(Math.max(0, n))
  for (let i = 0; i < n; i++) result[i] = iteratee(i)
  return result
}

module.exports = curry(2, times)
