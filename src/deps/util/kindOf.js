const toS = require('../is/toS')

/**
 * split at space, replace brackets and space, lowercase
 * @since 5.0.0-beta.5
 * @memberOf util
 *
 * @param {*} x any value, checks Object.toString
 * @return {string} kind-of
 *
 * @see util/simpleKindOf
 *
 * @example
 *
 *    kindOf(new Map) //=> 'map'
 *
 */
module.exports = function kindOf(x) {
  return toS(x).split(' ').pop().replace(/\s\[|\]/g, '').toLowerCase()
}
