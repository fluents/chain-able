const size = require('../../util/size')

/**
 * A specialized version of `reduceRight` for arrays.
 *
 * @since 5.0.0-beta.7.2
 *
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the last element of `array` as
 *  the initial value.
 * @return {*} Returns the accumulated value.
 */
function arrayReduceRight(array, iteratee, accumulator, initAccum) {
  let length = size(array)

  // setup
  if (initAccum && length) {
    accumulator = array[--length]
  }

  // iterate backwards
  while (length--) {
    accumulator = iteratee(accumulator, array[length], length, array)
  }

  return accumulator
}

module.exports = arrayReduceRight
