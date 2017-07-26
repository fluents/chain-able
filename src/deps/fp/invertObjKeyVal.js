const keys = require('../util/keysObjOrArray')
const length = require('../util/length')
const curry = require('./curry')

/**
 * - Returns a new object with the keys of the given object as values, and the
 *   values of the given object, which are coerced to strings, as keys. Note
 *   that the last key found is preferred when handling the same value.
 * - Creates an object composed of the inverted keys and values of `object`.
 *   If `object` contains duplicate values, subsequent values overwrite
 *   property assignments of previous values.
 *
 * @memberOf fp
 * @since 5.0.0
 * @fork v0.9.0
 *
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object
 *
 * @func
 * @category Object
 * @sig {s: x} -> {x: s}
 *
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L1048 underscore-invert}
 * {@link https://github.com/kesla/node-invert-object invert-obj-npm}
 * {@link https://github.com/lodash/lodash/blob/master/invert.js lodash-invert}
 * {@link https://github.com/ramda/ramda/blob/master/src/invert.js ramda-invert}
 * {@link https://github.com/ramda/ramda/blob/master/test/invertObj.js ramda-invertobj}
 * @see {@link ramda-invertobj}
 * @see {@link ramda-invert}
 * @see {@link lodash-invert}
 * @see {@link invert-obj-npm}
 * @see {@link underscore-invert}
 *
 * @example
 *
 *     const obj = { 'a': 1, 'b': 2, 'c': 1 }
 *
 *     invert(obj)
 *     // => { '1': 'c', '2': 'b' }
 *
 * @example
 *
 *      var raceResults = {
 *        first: 'alice',
 *        second: 'jake'
 *      }
 *      invertObj(raceResults)
 *      //=> { 'alice': 'first', 'jake':'second' }
 *
 *      // Alternatively:
 *      var raceResults = ['alice', 'jake']
 *      invertObj(raceResults)
 *      //=> { 'alice': '0', 'jake':'1' }
 *
 */
module.exports = curry(1, function invertObj(obj) {
  const props = keys(obj)
  const out = {}
  let index = 0

  while (index < length(props)) {
    const key = props[index]

    // value = key
    out[obj[key]] = key

    index++
  }

  return out
})
