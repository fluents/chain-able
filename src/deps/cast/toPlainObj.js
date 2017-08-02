const toObj = require('./toObj')

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 * @since 5.0.0-beta.5
 * @memberOf cast
 *
 * @name toPlainObj
 * @alias toPlainObj
 * @alias castPlainObj
 *
 *
 * @param {*} value The value to convert.
 * @return {Object} Returns the converted plain object.
 *
 * @fork 3.0.0
 * @category Lang
 *
 * @example
 *
 *   function Foo() {
 *     this.b = 2
 *   }
 *
 *   Foo.prototype.c = 3
 *
 *   assign({ 'a': 1 }, new Foo)
 *   //=> { 'a': 1, 'b': 2 }
 *
 *   assign({ 'a': 1 }, toPlainObject(new Foo))
 *   //=> { 'a': 1, 'b': 2, 'c': 3 }
 *
 */
function toPlainObject(value) {
  value = toObj(value)

  const result = {}

  // eslint-disable-next-line
  for (const key in value) {
    result[key] = value[value]
  }

  return result
}

module.exports = toPlainObject
