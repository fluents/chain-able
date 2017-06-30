/**
 * @param  {*} x value
 * @return {boolean} isTrue
 *
 * @since 4.0.0-alpha.1
 * @memberOf is
 * @func isTrue
 *
 * @example
 *
 *  isTrue(true)
 *  //=> true
 *  isTrue(false)
 *  //=> false
 *  isTrue(1)
 *  //=> false
 *  isTrue('')
 *  //=> false
 *
 */
module.exports = x => x === true
