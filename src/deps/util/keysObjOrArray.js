const isObj = require('../is/obj')
const isArray = require('../is/array')
const ObjectKeys = require('./keys')

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @since 0.1.0
 * @category Object
 *
 * @param {Object} object The object to query.
 * @return {Array} Returns the array of property names.
 *
 * @see deps/util/props
 * @see values, valuesIn
 * @see https://github.com/lodash/lodash/blob/master/.internal/getAllKeys.js
 * @see https://github.com/lodash/lodash/blob/master/keys.js
 * @TODO https://github.com/lodash/lodash/blob/master/.internal/arrayLikeKeys.js
 *
 * @example
 *
 * function Foo() {
 *   this.a = 1
 *   this.b = 2
 * }
 *
 * Foo.prototype.c = 3
 *
 * keys(new Foo)
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * keys('hi')
 * // => ['0', '1']
 *
 */

const zeroOneLength = obj =>
  (obj.length > 1 ? obj.length - 1 : obj.length === 1 ? 1 : 0)

module.exports = function keys(obj) {
  return isArray(obj)
    ? new Array(zeroOneLength(obj))
    : isObj(obj) ? ObjectKeys(obj) : []

  // for (var key in obj) gathered.push(key)
  // return gathered
}