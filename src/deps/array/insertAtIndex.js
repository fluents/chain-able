/**
 * @desc put a value at any index in an array
 * @since ? was in insert-at-index dep...
 * @memberOf array
 *
 * @see http://stackoverflow.com/questions/7032550/javascript-insert-an-array-inside-another-array
 * @see http://stackoverflow.com/questions/1348178/a-better-way-to-splice-an-array-into-an-array-in-javascript/41465578#41465578
 * @see http://stackoverflow.com/questions/38060705/replace-element-at-specific-position-in-an-array-without-mutating-it
 *
 * @param  {Array} arr array to put value in at index
 * @param  {number} index index to put valu eat
 * @param  {*} val value to put at index
 * @return {Array<any>} array with new value at index
 *
 * @example
 *
 *  insertAtIndex(['zero-1', 'one-2'], 1, 1) //=> ['zero-1', 1, 'one-two']
 *
 */
module.exports = function insertAtIndex(arr, index, val) {
  if (index < arr.length) {
    return [...arr.slice(0, index), ...val, ...arr.slice(index + 1)]
  }
  else {
    return [...arr, ...Array(index - arr.length), ...val]
  }
}

// @TODO test
// const insertAt = require('../')
//
// const list = [0, 1, 2, 3, 4]
// const eh = ['canada', 'moose']
//
// const inserted = insertAt(list, 2, eh)
// const expected = [0, 1, 'canada', 'moose', 3, 4]
//
// expected.forEach((expect, i) => {
//   console.assert(expect === inserted[i], 'same at the same index')
// })
// console.log('all assertions passed :-)')


/// another way of writing it, this one does not use spread
//
// function insertArrAt(array, index, arrayToInsert) {
//   // Array.prototype.splice.apply(array, [index, 0].concat(arrayToInsert))
//   // return array.slice.apply([index, 0].concat(arrayToInsert))
//   return array.slice(index, 0).apply([index, 0].concat(arrayToInsert))
//   return array
// }
