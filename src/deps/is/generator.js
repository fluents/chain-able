const toS = require('./toS')

/**
 * @desc is generator function
 * @since 4.0.0-beta.2
 * @param  {*} x value to check
 * @return {boolean} x isGenerator
 *
 * @alternate fn.constructor.name === 'GeneratorFunction'
 * @see https://github.com/jonschlinkert/kind-of/blob/master/index.js#L66
 *
 * @example
 *
 *   isGenerator(*function() {})
 *  //=> true
 *  isGenerator(function() {})
 *  //=> false
 *
 */
module.exports = x => toS(x) === '[object GeneratorFunction]'
