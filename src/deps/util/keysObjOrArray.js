const isObj = require('../is/obj')
const isArray = require('../is/array')
const ObjectKeys = require('./keys')
const lengthFromZero = require('./lengthFromZero')

/**
 * Creates an array of the own enumerable property names of `object`.
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @since 0.1.0
 * @category Object
 * @name keysObjOrArray
 *
 * @param {Object} obj The object to query.
 * @return {Array} Returns the array of property names.
 *
 * @see deps/util/lengthFromZero
 * @see deps/util/props
 * @see values, valuesIn
 *
 * {@link https://github.com/lodash/lodash/blob/master/keys.js lodash-keys}
 * {@link https://github.com/lodash/lodash/blob/master/.internal/getAllKeys.js lodash-get-all-keys}
 * @see {@link lodash-keys}
 * @see {@link lodash-get-all-keys}
 *
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
module.exports = function keys(obj) {
  return isArray(obj)
    ? new Array(lengthFromZero(obj))
    : isObj(obj) ? ObjectKeys(obj) : []

  // for (var key in obj) gathered.push(key)
  // return gathered
}
