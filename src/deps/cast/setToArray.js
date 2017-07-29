const preAllocate = require('../array/preAllocate')

/**
 * Set into Array
 * @since 5.0.0-beta.6
 * @memberOf cast
 *
 * @name setToArray
 * @alias setToArr
 *
 * @see cast/set
 * @param {Set} set cast to Array
 * @return {Array} Array(x)
 *
 */
module.exports = function setToArray(set) {
  // allocate an array with the size of the set
  const allocated = preAllocate(set.size)

  // let index = 0

  // @NOTE remember not to 1 line arrow useless return here
  // is `forEach` fastest? is shortest?
  set.forEach((value, index) => {
    // allocated[index++] = value
    allocated[index] = value
  })

  return allocated
}
