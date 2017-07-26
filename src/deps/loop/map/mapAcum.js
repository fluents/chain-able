const curry = require('../../fp/curry')


/**
 * The `mapAccum` function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from left to right, and returning a final value of this
 * accumulator together with the new list.
 *
 * The iterator function receives two arguments, *acc* and *value*, and should
 * return a tuple *[acc, value]*.
 * @since 5.0.0-beta.6
 * @memberOf loop
 *
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 *
 * @func
 * @fork v0.10.0
 * @category List
 * @sig (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
 * @symb mapAccum(f, a, [b, c, d]) = [f(f(f(a, b)[0], c)[0], d)[0],
 *   [
 *     f(a, b)[1],
 *     f(f(a, b)[0], c)[1],
 *     f(f(f(a, b)[0], c)[0], d)[1]
 *   ]]
 *
 * @see addIndex, mapAccumRight
 *
 * @example
 *
 *      var digits = ['1', '2', '3', '4'];
 *      var appender = (a, b) => [a + b, a + b];
 *
 *      mapAccum(appender, 0, digits);
 *      //=> ['01234', ['01', '012', '0123', '01234']]
 *
 *
 */
module.exports = curry(3, function mapAccum(fn, acc, list) {
  var idx = 0
  var len = list.length
  var result = []
  var tuple = [acc]
  while (idx < len) {
    tuple = fn(tuple[0], list[idx])
    result[idx] = tuple[1]
    idx += 1
  }
  return [tuple[0], result]
})
