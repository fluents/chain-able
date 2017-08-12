const converge = require('./converge')
const argumentor = require('../../cast/argumentsToArray')

/**
 * juxt applies a list of functions to a list of values.
 * @since 5.0.0-beta.7
 * @memberOf loop
 * @curried 1
 *
 * @param {Array} fns An array of functions
 * @return {Function} A function that returns a list of values after applying each of the original `fns` to its parameters.
 *
 * @func
 * @fork v0.19.0
 * @category Function
 * @sig [(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])
 * @symb R.juxt([f, g, h])(a, b) = [f(a, b), g(a, b), h(a, b)]
 * @see R.applySpec
 *
 * @example
 *
 *      var getRange = juxt([Math.min, Math.max]);
 *      getRange(3, 4, 9, -3); //=> [-3, 9]
 *
 */
module.exports = (function juxt(fns) {
  return converge(argumentor, fns)
})
