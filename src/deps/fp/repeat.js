const curry = require('./curry')
const always = require('./always')
const times = require('./times')

/**
 * Returns a fixed list of size `n` containing a specified identical value.
 * @since 5.0.0-beta.7
 * @memberOf fp
 *
 * @param {*} value The value to repeat.
 * @param {Number} n The desired size of the output list.
 * @return {Array} A new array containing `n` `value`s.
 *
 * @TODO what about string.repeat?!
 *
 * @func
 * @fork v0.1.1
 * @category List
 * @sig a -> n -> [a]
 *
 * @see fp/times
 *
 * @symb repeat(a, 0) = []
 * @symb repeat(a, 1) = [a]
 * @symb repeat(a, 2) = [a, a]
 *
 * @example
 *
 *      repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
 *
 *      var obj = {};
 *      var repeatedObjs = repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
 *      repeatedObjs[0] === repeatedObjs[1]; //=> true
 *
 */
module.exports = curry(2, function repeat(value, n) {
  return times(n, always(value))
})
