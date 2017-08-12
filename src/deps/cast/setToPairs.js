const isTrue = require('../is/true')
const preAllocate = require('../array/preAllocate')
const toKey = require('./toKey')

/**
 * Converts `set` to its value-value pairs (_or index/key-value with useIndex_).
 * @since 5.0.0-beta.7
 * @memberOf cast
 *
 * @param {Set} set The set to convert.
 * @param {boolean} [useIndex=false] use [index, value] rather than [value, value]
 * @return {Array} Returns the value-value pairs.
 *
 * @name setToArray
 * @alias setToArr
 * @alias fromSetToArray
 *
 * {@link https://github.com/lodash/lodash/blob/master/.internal/setToPairs.js lodash-settopairs}
 * @see {@link lodash-settopairs}
 * @see cast/set
 * @see cast/toKey
 *
 * @example
 *
 *    setToPairs(new Set(['eh', 'oh']))
 *    //=> [['eh', 'eh'], ['oh', 'oh']]
 *
 *    setToPairs(new Set(['eh', 'oh']), true)
 *    //=> [['0', 'eh'], ['1', 'oh']]
 *
 */
function setToPairs(set, useIndex) {
  let index = -1
  const result = preAllocate(set)

  set.forEach(value => {
    result[++index] = [isTrue(useIndex) ? toKey(index) : value, value]
  })

  return result
}

module.exports = setToPairs
