const preAllocated = require('../array/preAllocate')

/**
 * Returns a list of all the properties, including prototype properties, of the
 * supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 * @since 5.0.0-beta.1
 *
 * @func
 * @memberOf util
 * @fork v0.2.0
 * @category Object
 * @sig {k: v} -> [v]
 *
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own and prototype properties.
 *
 * @see R.values, R.keysIn
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.valuesIn(f); //=> ['X', 'Y']
 */
module.exports = function valuesIn(obj) {
  let prop
  const result = preAllocated(obj)

  // eslint-disable-next-line
  for (prop in obj) {
    result[result.length] = obj[prop]
  }
  return result
}
