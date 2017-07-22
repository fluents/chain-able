/**
 * Performs left-to-right function composition. ONLY CAN PIPE 2 ARGUMENTS
 *
 * @NOTE The result of pipe is not automatically curried.
 * @NOTE This is a variation, is the internal version with only 2 functions, for now
 *
 * @func
 * @memberOf fp
 * @since v5.0.0
 * @category Function
 *
 * @param {...Function} f function first
 * @param {...Function} g function next
 * @return {Function}
 *
 * @see https://github.com/ramda/ramda/blob/master/src/pipe.js
 * @see https://github.com/ramda/ramda/blob/master/test/pipe.js
 *
 * @types fp
 * @tests fp/pipe
 *
 * @example
 *
 *      var f = R.pipe(Math.pow, R.negate);
 *      f(3, 4); // -(3^4) + 1
 *
 */
module.exports = function _pipe(f, g) {
  return function() {
    return g.call(this, f.apply(this, arguments))
  }
}
