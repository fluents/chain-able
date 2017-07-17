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
module.exports = x => isFunction(x) || isRegExp(x)
// x instanceof RegExp
