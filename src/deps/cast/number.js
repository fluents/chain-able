/**
 * @since 5.0.0-beta.6
 * @memberOf cast
 *
 * @name toNumber
 * @alias toNum
 * @alias ToNumber
 *
 * @param  {*} x number to cast to primitive number
 * @return {number} +x
 *
 * @see http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tonumber
 */
function toNumber(x) {
  return +x
}
module.exports = toNumber
