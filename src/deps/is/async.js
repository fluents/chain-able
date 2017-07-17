const toS = require('./toS')

/**
 * @category Lang
 *
 * @param  {*} x value
 * @return {boolean} isAsync
 * @since 4.0.0-beta.2
 *
 * @memberOf is
 * @func isAsync
 *
 * @example
 *
 *  isAsync(async function() {})
 *  //=> true
 *  isAsync(new Promise(r => r()))
 *  //=> false
 *  isAsync({})
 *  //=> false
 *  isAsync(function() {})
 */
module.exports = function isAsync(x) {
  return toS(x) === '[object AsyncFunction]'
}
