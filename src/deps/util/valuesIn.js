const preAllocated = require('../array/preAllocate')
const size = require('../util/size')

/**
 * Returns a list of all the properties, including prototype properties, of the
 * supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 * @since 5.0.0-beta.1
 *
 * @memberOf util
 *
 * @param {Object} obj The object to extract values from
 * @param {boolean} [guard=false] only include own properties @TODO
 * @return {Array} An array of the values of the object's own and prototype properties.
 *
 * @tests keys
 *
 * @func
 * @fork v0.2.0
 * @category Object
 * @sig {k: v} -> [v]
 *
 * @TODO use loop/
 * @TODO add `guard`
 *
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L1010 underscore-values}
 * {@link https://github.com/ramda/ramda/blob/master/src/valuesIn.js ramda-vals-in}
 * {@link https://github.com/lodash/lodash/blob/master/values.js lodash-values}
 * @see {@link underscore-values}
 * @see {@link lodash-values}
 * @see {@link ramda-vals-in}
 * @see values, keysIn
 *
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      valuesIn(f); //=> ['X', 'Y']
 *
 */
module.exports = function valuesIn(obj, guard) {
  // @TODO requires an index...
  // const result = preAllocated(obj)
  const result = []

  // eslint-disable-next-line
  for (const prop in obj) {
    // [result.length]
    result[result.length] = obj[prop]
  }

  return result
}
