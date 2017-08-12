const not = require('../conditional/not')
const isEven = require('./even')

/**
 * @desc isEven
 * @param {number | any} x value to check
 * @return {boolean} isEven
 *
 * @extends isOdd
 * @variations inverse
 *
 * @example
 *
 *    isEven(1)
 *    //=> false
 *    isEven(2)
 *    //=> true
 *
 *    var rando = Math.floor(Math.random(0, 10000))
 *    isEven(rando) !== isOdd(rando)
 *    //=> true
 *
 */
module.exports = not(isEven)
