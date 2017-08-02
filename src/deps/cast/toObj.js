const isNil = require('../is/nullOrUndefined')

/**
 * cast to object, instead of throwing (like in the spec), returns {} if nill
 * @since 5.0.0-beta.6
 * @memberOf cast
 *
 * @name toObj
 * @alias toObject
 *
 * @param  {*} x cast to object
 * @return {Object} Object(x) || {}
 *
 * {@link http://ecma-international.org/ecma-262/7.0/#sec-toobject emca-toobject}
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L637 underscore-to-object}
 * @see {@link underscore-to-object}
 * @see {@link emca-toobject}
 *
 * @example
 *
 *    toObj(null) //=> {}
 *
 * @example
 *
 *    var obj = {eh: true}
 *    var objected = toObj(obj)
 *    obj === objected //=> true
 *
 */
module.exports = function toObj(x) {
  // @NOTE this is spec, but IMO, better to return false, or empty obj
  // if (x === null || x === undefined) {
  //   throw new TypeError('Null or undefined passed to ToObject')
  // }
  // if (isNil(x)) return {}
  // else return Object(x)
  return Object(x)
}
