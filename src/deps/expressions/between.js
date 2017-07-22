const curry = require('../fp/curry')

/**
 * @param  {number} x number between
 * @param  {number} min minimum
 * @param  {number} max maximum
 * @param  {boolean} greaterThanOrEqualTo strictly between, not equal to (left right)
 * @return {boolean} x >= min && x <= max
 *
 * @example
 *    between(100, 0, 200)   //=> true
 *    between(100, 100, 100) //=> true
 *    between(100, 10, 99)   //=> false
 */
function between(x, min, max, greaterThanOrEqualTo = true) {
  return x >= min && x <= max
}

module.exports = curry(3, between)
