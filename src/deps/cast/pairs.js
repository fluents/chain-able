const ENV_COMPAT = require('../env/compat')
const hasOwnProperty = require('../util/hasOwnProperty')

/**
 * Converts an object into an array of key, value arrays. Only the object's
 * own properties are used.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @since 5.0.0-beta.5
 * @memberOf cast
 *
 * @param {Object|Array} obj The object to extract from
 * @return {Array<string, *>} An array of key, value arrays from the object's own properties.
 *
 * @alias objToArray
 * @alias objectToArray
 * @alias objToArr
 *
 * @func
 * @fork v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 *
 * @TODO compat env version
 *
 * {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/entries#Polyfill mozilla-object-entries}
 * {@link https://github.com/lodash/lodash/blob/master/fromPairs.js lodash-from-pairs}
 * {@link https://github.com/ramda/ramda/blob/master/src/pair.js ramda-to-pairs}
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L637 underscore-to-pairs}
 * @see {@link mozilla-object-entries}
 * @see {@link underscore-to-pairs}
 * @see {@link ramda-to-pairs}
 * @see {@link lodash-from-pairs}
 * @see fromPairs
 * @see util/hasOwnProperty
 * @see cast/mapToArray
 *
 * @example
 *
 *      toPairs({a: 1, b: 2, c: 3})
 *      //=> [['a', 1], ['b', 2], ['c', 3]]
 *
 *      toPairs([])
 *      //=> [['a', 1], ['b', 2], ['c', 3]]
 *
 */
module.exports = Object.entries

if (ENV_COMPAT) {
  // if (!module.exports),
  // if there is no Object.entries,
  // but we want to force compat so
  module.exports = (function toPairs(obj) {
    const pairs = []

    for (let prop in obj) {
      if (hasOwnProperty(prop, obj)) {
        pairs[pairs.length] = [prop, obj[prop]]
      }
    }

    return pairs
  })
}
