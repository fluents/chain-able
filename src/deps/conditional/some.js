const curry = require('../fp/curry')

/**
 * @desc map all values in an array to see if **some** match, curried
 * @memberOf conditional
 * @since  4.0.1
 *
 * @param  {Function} predicate match the value
 * @param  {Array | any} list values to match on the predicate
 * @return {boolean} **some** match predicate
 *
 * @name some
 * @alias any
 * @func
 *
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L273 underscore-some}
 * @see {@link underscore-some}
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
module.exports = curry(2, function some(test, list) {
  for (let i in list) {
    if (test(list[i])) return true
  }
  return false
})
