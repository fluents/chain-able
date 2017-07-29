const preAllocate = require('../array/preAllocate')

/**
 * @desc start from 0, fill with numbers until index
 * @name arrayOfIndexes
 * @since 5.0.0-beta.6
 * @memberOf array
 *
 * @param {number} x number to fill an array of
 * @return {Array<number>}
 *
 * @example
 *
 *    arrayOfIndexes(3)
 *    //=> [0, 1, 2]
 *
 */
module.exports = x => {
  const array = preAllocate(x)
  let index = 0

  while (index <= x) {
    array[index] = index++
  }

  return array
}
