/**
 * Returns whatever was passed in, thus named return
 *
 * @name return
 * @alias identity
 * @alias inputOutput
 * @alias sameInSameOut
 * @alias io
 *
 * @memberOf fp
 * @since 3.0.0
 * @version 5.0.0 <- moved out into a function
 * @version 2.0.0 <- was named `flipReturn`
 *
 * @param {*} value The value to return
 * @return {*} always `value`
 *
 * @func
 * @category Function
 * @sig a -> (* -> a)
 *
 * @types fp
 * @tests fp/return
 *
 * @example
 *
 *      var t = identity(1)
 *      t //=> 1
 *
 */
module.exports = function identity(value) {
  return value
}
