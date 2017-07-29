const argumentor = require('../argumentor')

/**
 * @desc flip the fn args:
 *       Creates a function that invokes `func` with arguments reversed.
 *
 * @memberOf fp
 * @symb 🙃
 * @since 5.0.0-beta.4
 *
 * @param {Function} fn The function to invoke with its first two parameters reversed.
 * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
 *
 * @func
 * @ramda v0.1.0
 * @category Function
 * @sig ((a, b, c, ...) -> z) -> (b -> a -> c -> ... -> z)
 *
 * @TODO could also just call with fn.apply([b, a]), and have flipN
 *
 * {@link https://github.com/lodash/lodash/blob/4.2.1-npm-packages/lodash.flip/index.js lodash-flip}
 * {@link https://github.com/ramda/ramda/blob/master/src/flip.js ramda-flip}
 * @see {@link ramda-flip}
 * @see {@link lodash-flip}
 * @see fp/reverse
 *
 * @types fp
 * @tests fp/flip
 *
 * @example
 *
 *      var mergeThree = (a, b, c) => [].concat(a, b, c)
 *      mergeThree(1, 2, 3);       //=> [1, 2, 3]
 *      flip(mergeThree)(1, 2, 3); //=> [3, 2, 1]
 *
 *      const flipped = flip((...args) => args)
 *      flipped('a', 'b', 'c', 'd')
 *      //=> ['d', 'c', 'b', 'a']
 *
 */
module.exports = function flip(fn) {
  // could wrap in arity
  return function() {
    return fn.apply(this, argumentor.apply(null, arguments).reverse())
  }
}
