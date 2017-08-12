const curry = require('../fp/curry')

/**
 * @desc a % b
 * @memberOf math
 * @since 5.0.0-beta.7
 * @curried 2
 *
 * @param {number} a a - (b [...])
 * @param {number} b [...] (Math.floor(a / b) * b)
 * @return {number} a % b
 *
 * {@link https://tc39.github.io/ecma262/#eqn-modulo emca-modulo}
 * {@link http://2ality.com/2012/02/js-integers.html 2ality-integers}
 * @see {@link 2ality-integers}
 * @see {@link emca-modulo}
 *
 * @example
 *  1 % 200 //=> 1
 */
const modulo = function(a, b) {
  return a % b
  // return a - (Math.floor(a / b) * b)
}

module.exports = curry(2, modulo)
