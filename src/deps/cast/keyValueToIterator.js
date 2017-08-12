const isUndefined = require('../is/undefined')

/**
 * @name keyValueToIterator
 * @since 5.0.0-beta.6
 *
 * @param {Array<number | string>} keys array of keys
 * @param {Array<*>} values array of values
 * @param {number} size length/size
 * @return {Iterator}
 *
 * @NOTE isSet(map) ? preAllocate(size) : map.keys() <- works, but too monomorphic
 * @TODO could do prepack-style and have returned object reused?
 *
 * {@link https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects emca-iterator-operations}
 * {@link https://github.com/facebook/immutable-js/blob/master/src/Iterator.js#L19 immutable-js-iterator}
 * @see {@link immutable-js-iterator}
 * @see {@link emca-iterator-operations}
 *
 * @example
 *
 *   keyValueToIterator([0, 1], ['one', 'two'], 2)
 *   //=> {value: [0, 'one'], done: false, i: 0}
 *   //=> {value: [1, 'two'], done: false, i: 1}
 *   //=> {value: undefined, done: true, i: 2}
 *
 */
module.exports = function keyValueToIterator(keys, values, size) {
  return {
    i: 0,
    next() {
      let i = this.i
      let key = i
      const val = values[i]
      key = keys[i]

      // done - no more values, or iteration reached size
      if ((isUndefined(key) && isUndefined(val)) || size <= i) {
        return {value: undefined, done: true}
      }

      this.i++

      // return
      return {value: [key, val], done: false}
    },
  }
}
