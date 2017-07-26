const curry = require('../../fp/curry')

/**
 * @desc haystack includes needle
 * @memberOf includes
 * @version 1.0.0
 * @since 4.0.0
 *
 * @param  {Array | string} haystack haystack includes needle
 * @param  {string | *} needle needle in haystack
 * @return {boolean} needle in haystack
 *
 * @name includes
 * @alias haystackNeedle
 * @func
 *
 * @TODO `~haystack.indexOf(needle)`
 *
 * {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_NOT mozilla-bitwise-not}
 * @see {@link mozilla-bitwise-not}
 * @see conditional/includes/flipped
 *
 * @example
 *
 *    includes('eh', 'e')      //=> true
 *    includes('eh', 'nope')   //=> false
 *    includes(['eh'], 'eh')   //=> true
 *    includes(['eh'], 'nope') //=> false
 *
 */
const includes = (haystack, needle) => haystack.includes(needle)

module.exports = curry(2, includes)
