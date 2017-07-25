/**
 * increment, decrement, sum, subtract, add, multiply...
 * these should just stay external
 * there was something with the bitwise operator experiment
 * only to use this alongside the conditional for an insane sized evaluator
 *
 * @since 5.0.0-beta.4
 * @name increment
 * @memberOf expressions
 *
 * @alias inc
 * @alias plusOne
 *
 * @param {number} x number to increment
 * @return {number} x + 1
 *
 * @example
 *  increment(2) //=> 1
 */
// module.exports = add(1)
module.exports = x => x + 1
