const preferExistingMethod = require('../../fp/preferExistingMethod')
const curry = require('../../fp/curry')

/**
 * Iterate over an input `list`, calling a provided function `fn` for each
 * element in the list.
 *
 * `fn` receives one argument: *(value)*.
 *
 * Note: `R.forEach` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.forEach` method. For more
 * details on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
 *
 * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns
 * the original array. In some libraries this function is named `each`.
 *
 * Dispatches to the `forEach` method of the second argument, if present.
 *
 * @memberOf fp
 * @since 5.0.0-beta.6
 * @curried 2
 *
 * @param {Function} fn The function to invoke. Receives one argument, `value`.
 * @param {Array} list The list to iterate over.
 * @return {Array} The original list.
 *
 * @func
 * @fork v0.1.1
 * @category List
 * @sig (a -> *) -> [a] -> [a]
 * @symb R.forEach(f, [a, b, c]) = [a, b, c]
 *
 * @see addIndex
 *
 * @example
 *
 *      var printXPlusFive = x => console.log(x + 5);
 *      forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
 *      // logs 6
 *      // logs 7
 *      // logs 8
 *
 *
 */
function _forEach(fn, list) {
  const len = list.length
  let index = 0
  while (index < len) {
    fn(list[index++])
    // fn(list[index])
    // index += 1
  }
  return list
}

module.exports = curry(2, preferExistingMethod('forEach', _forEach))
