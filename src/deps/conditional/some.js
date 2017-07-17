/**
 * map all values in an array to see if **some** match
 * @memberOf conditional
 *
 * @since  4.0.1
 * @param  {Function} predicate match the value
 * @return {boolean} all match predicate
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
const some = test => arr => {
  for (let i in arr) {
    if (test(arr[i])) return true
  }
  return false
}

module.exports = some
