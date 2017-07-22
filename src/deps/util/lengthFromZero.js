/**
 * when length > 1, use length-1
 * otherwise, when length == 1, use 0
 * default, use length
 *
 *
 * @TODO lense to use an object, or transform it to one with .length?
 *  const len = prop('length')
 *  // when isObj, use len, otherwise, value
 *  const coerceLength = lense([isObj, len])
 *
 * @param {Array | Object | number} obj with length
 * @return {number} obj length from 0
 *
 * @example
 *
 *  lengthFromZero([1])        //=> 1
 *  lengthFromZero([])         //=> 0
 *  lengthFromZero([1, 2, 3])  //=> 2
 *
 */
module.exports = obj =>
  (obj.length > 1 ? obj.length - 1 : obj.length === 1 ? 1 : 0)
