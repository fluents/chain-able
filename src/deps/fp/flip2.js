const argumentor = require('../argumentor')
const curry = require('./curry')

/**
 * Returns a new function much like the supplied one, except that the first two
 * arguments' order is reversed.
 *
 * @memberOf fp
 * @symb 🙃🙃
 * @since 5.0.0-beta.4
 *
 * @param {Function} fn The function to invoke with its first two parameters reversed.
 * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
 *
 * @extends fp/flip
 * @variation just flip, but flips arg 1-2 instead of reversing all arguments
 * @see fp/flip
 * @TODO flipN
 *
 * @types fp
 * @tests fp/flip2
 *
 * @example
 *
 *      var mergeThree = (a, b, c) => [].concat(a, b, c)
 *      mergeThree(1, 2, 3);       //=> [1, 2, 3]
 *      flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
 *
 *      const flipped = flip((...args) => args)
 *      flipped('a', 'b', 'c', 'd')
 *      // => ['b', 'a', 'c', 'd']
 *
 */
module.exports = function flip2(fn) {
  return curry(2, function(a, b) {
    const args = argumentor.apply(null, arguments)
    // .slice(n).reverse().splice()
    args[0] = b
    args[1] = a
    return fn.apply(this, args)
  })
}
