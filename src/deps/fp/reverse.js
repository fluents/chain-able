const slice = require('../native/arraySlice')
const isString = require('../is/string')

/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 * @symb ⬅️
 * @memberOf fp
 * @since 5.0.0-beta.5
 *
 * @param {Array|String} x (list) string or array to reverse
 * @return {Array|String}
 *
 * @func
 * @ramda v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 *
 * {@link https://stackoverflow.com/a/26610963/2855712 stack-overflow-10-ways-to-reverse-string}
 * {@link https://github.com/ramda/ramda/blob/master/src/reverse.js ramda-reverse}
 * @see {@link ramda-reverse}
 * @see {@link stack-overflow-10-ways-to-reverse-string}
 *
 * @example
 *
 *      reverse([1, 2, 3]);  //=> [3, 2, 1]
 *      reverse([1, 2]);     //=> [2, 1]
 *      reverse([1]);        //=> [1]
 *      reverse([]);         //=> []
 *
 *      reverse('abc');      //=> 'cba'
 *      reverse('ab');       //=> 'ba'
 *      reverse('a');        //=> 'a'
 *      reverse('');         //=> ''
 *
 */
module.exports = function reverse(x) {
  return isString(x)
    ? x.split('').reverse().join('')
    : slice.call(x, 0).reverse()
}
