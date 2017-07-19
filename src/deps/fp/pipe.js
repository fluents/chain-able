/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity; the remaining functions must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * @NOTE The result of pipe is not automatically curried.
 * @NOTE This is a variation, is the internal version with only 2 functions, for now
 *
 * @func
 * @memberOf fp
 * @since v5.0.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 *
 * @param {...Function} f function first
 * @param {...Function} g function next
 * @return {Function}
 *
 * @see R.compose
 * @see https://github.com/ramda/ramda/blob/master/src/pipe.js
 *
 * @example
 *
 *      var f = R.pipe(Math.pow, R.negate, R.inc);
 *      f(3, 4); // -(3^4) + 1
 *
 */
module.exports = function _pipe(f, g) {
  return function() {
    return g.call(this, f.apply(this, arguments))
  }
}
