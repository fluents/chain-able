const slice = require('../native/arraySlice')
const curry = require('../fp/curry')

/**
 * Returns a copy of the list, sorted according to the comparator function,
 * which should accept two values at a time and return a negative number if the
 * first value is smaller, a positive number if it's larger, and zero if they
 * are equal. Please note that this is a **copy** of the list. It does not
 * modify the original.
 * @since 5.0.0-beta.5
 * @memberOf loop
 *
 * @param {Function} comparator A sorting function :: a -> b -> Int
 * @param {Array} list The list to sort
 * @return {Array} a new array with its elements sorted by the comparator function.
 *
 * @func
 * @fork v0.1.0
 * @category List
 * @sig (a,a -> Number) -> [a] -> [a]
 *
 * @example
 *
 *      var diff = function(a, b) { return a - b; }
 *      sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
 *
 */
module.exports = curry(2, function sort(comparator, list) {
  return slice.call(list, 0).sort(comparator)
})
