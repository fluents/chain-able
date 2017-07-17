const or = require('../conditional/or')
const isFunction = require('./function')
const isRegExp = require('./regexp')

/**
 * @func isMatcher
 * @memberOf is
 * @since 3.0.0
 *
 * @param  {*} x value to check
 * @return {boolean} isFunction || isRegExp
 *
 * @see is/regexp
 * @see is/function
 * @see conditionals/or
 *
 * @example
 *
 *    isMatcher(/(.*)/)
 *    //=> true
 *
 *    isMatcher(x => true)
 *    //=> true
 *
 *    isMatcher(1)
 *    //=> false
 *    isMatcher('.*')
 *    //=> false
 *
 */
module.exports = or(isFunction, isRegExp) // x => isFunction(x) || isRegExp(x)
// x instanceof RegExp
