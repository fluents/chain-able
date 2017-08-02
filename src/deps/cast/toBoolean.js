/**
 * @name toBoolean
 * @alias toBool
 *
 * @since 5.0.0-beta.6
 * @memberOf cast
 *
 * @param  {*} x anything
 * @return {boolean} !!x
 *
 * {@link https://tc39.github.io/ecma262/#sec-toboolean emca-toboolean}
 * {@link https://github.com/chriso/validator.js/blob/master/src/lib/toBoolean.js validator-toboolean}
 * @see {@link validator-toboolean}
 * @see {@link emca-toboolean}
 *
 * @example
 *
 *    toBoolean(0)     //=> false
 *    toBoolean(1)     //=> true
 *    toBoolean(true)  //=> true
 *    toBoolean(false) //=> false
 *    toBoolean({}     //=> true
 *
 */
const toBoolean = function(x) {
  return !!x
}

module.exports = toBoolean
