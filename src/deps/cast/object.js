const isNill = require('../is/nullOrUndefined')

/**
 * cast to object, instead of throwing (like in the spec), returns false if nill
 * @since 5.0.0-beta.6
 * @memberOf cast
 *
 * @name toObj
 * @alias toObject
 * @alias ToObject
 *
 * @param  {*} x cast to object
 * @return {Object|false} Object(x)
 *
 * @see https://github.com/jashkenas/underscore/blob/master/underscore.js#L637
 * @see http://people.mozilla.org/~jorendorff/es6-draft.html#sec-toobject
 */
module.exports = function toObj(x) {
  // @NOTE this is spec, but IMO, better to return false, or empty obj
  // if (x === null || x === undefined) {
  //   throw new TypeError('Null or undefined passed to ToObject')
  // }
  if (isNill(x)) return false
  else return Object(x)
}
