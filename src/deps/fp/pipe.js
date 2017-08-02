const isArray = require('../is/array')
const argumentor = require('../cast/argumentor')
const pipeTwo = require('./pipeTwo')

/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity; the remaining functions must be unary.
 * In some libraries this function is named `sequence`.
 *
 * @icon |
 * @func
 * @memberOf fp
 * @since v5.0.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @symb pipe(f, g, h)(a, b) = h(g(f(a, b)))
 * @extends fp/pipeTwo
 *
 * @param {Function} first function first
 * @param {...Function} rest function next
 * @return {Function}
 *
 * @see https://github.com/ramda/ramda/blob/master/src/compose.js
 * @see https://github.com/ramda/ramda/blob/master/src/pipe.js
 * @see https://github.com/ramda/ramda/blob/master/test/pipe.js
 *
 * @types fp
 * @tests fp/pipe
 *
 * @example
 *
 *      var f = R.pipe(Math.pow, R.negate, R.inc);
 *      f(3, 4); // -(3^4) + 1
 *
 * @example
 *
 *    var x = v => v + 'x'
 *    var y = v => v + 'y'
 *    var z = v => v + 'z'
 *
 *    const xyz = pipe(x, y, z)
 *    /// starts with w, adds x, then y, then z
 *    const wxyz = xyz('w')
 *    //=> 'wxyz'
 *
 */
module.exports = function pipe(first) {
  // @TODO: could move into pipeArray
  // could start from first, second? etc?
  // (isArray(first) ? first : argumentor.apply(null, arguments))
  let args = argumentor
    .apply(null, arguments)
    .slice(1)
    .reduce(pipeTwo)
    // .reduce((previous, next) => pipeTwo(previous, next))

  return pipeTwo(first, args)
}
