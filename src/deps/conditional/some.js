const curry = require('../fp/curry')

/**
 * @desc map all values in an array to see if **some** match, curried
 * @memberOf conditional
 * @name some
 * @since  4.0.1
 * @func
 *
 * @param  {Function} predicate match the value
 * @param  {Array | any} arr values to match on the predicate
 * @return {boolean} **some** match predicate
 *
 * @example
 *
 *    const someBoolean = some(x => typeof x === 'boolean'q)
 *
 *    someBoolean([true])
 *    //=> true
 *
 *    someBoolean([1])
 *    //=> false
 *
 *    someBoolean([1, true])
 *    //=> true
 *
 */
module.exports = curry(2, (test, arr) => {
  for (let i in arr) {
    if (test(arr[i])) return true
  }
  return false
})
