const preAllocate = require('../array/preAllocate')

/**
 * Set into Array
 * @since 5.0.0-beta.6
 * @memberOf cast
 *
 * @param {Set} set cast to Array
 * @return {Array} Array(x)
 *
 * @name setToArray
 * @alias setToArr
 * @alias fromSetToArray
 *
 * {@link https://github.com/andrewplummer/Sugar/blob/master/lib/common.js#L1227 sugar-settoarray}
 * {@link https://github.com/lodash/lodash/blob/master/.internal/setToArray.js lodash-settoarray}
 * @see {@link lodash-settoarray}
 * @see {@link sugar-settoarray}
 * @see cast/set
 *
 * @example
 *
 *    setToArray(new Set(['eh', 'oh']))
 *    //=> ['eh', 'oh']
 *
 */
module.exports = function setToArray(set) {
  // allocate an array with the size of the set
  const allocated = preAllocate(set)

  let index = 0

  // @NOTE this can mess things up when using index from `forEach`
  // and just add empty items
  // @NOTE remember not to 1 line arrow useless return here
  //
  // is `forEach` fastest? is shortest?
  set.forEach(value => {
    allocated[index++] = value
    // allocated[index] = value
  })

  return allocated
}
