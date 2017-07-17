/**
 * map all values in an array to see if all match
 * @memberOf conditional
 * @since  4.0.1
 * @param  {Function} predicate match the value
 * @return {boolean} all match predicate
 *
 * @example
 *
 *    const allBoolean = all(x => typeof x === 'boolean'q)
 *
 *    allBoolean([true])
 *    //=> true
 *
 *    allBoolean([1])
 *    //=> false
 *
 */
const all = predicate => arr => {
  for (let i in arr) {
    if (!predicate(arr[i])) return false
  }
  return true
}

module.exports = all
