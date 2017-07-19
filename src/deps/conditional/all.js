const curry = require('../fp/curry')

/**
 * map all values in an array to see if all match
 * @memberOf conditional
 *
 * @since  4.0.1
 * @param  {Function} predicate match the value
 * @param  {Array} array to match against predicate
 * @return {boolean} all match predicate
 *
 * @see fp/curry
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
const all = curry(2, (predicate, arr) => {
  for (let i in arr) {
    if (!predicate(arr[i])) return false
  }
  return true
})

module.exports = all
