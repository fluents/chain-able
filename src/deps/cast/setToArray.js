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
  const allocated = new Array(set.size)

  let index = 0

  // is `forEach` fastest? is shortest?
  set.forEach(value => (allocated[index++] = value))

  return allocated
}
