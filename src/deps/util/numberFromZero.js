/* eslint no-confusing-arrow: "OFF" */

/**
 * @desc when number > 1, use number -1
 *       otherwise, when number == 1, use 0
 *       default, use number
 *
 * @memberOf util
 * @since 5.0.0-beta.6
 * @name numberFromZero
 *
 * @param {number} x number to start from 0 if over 1
 * @return {number} number from 0
 *
 * @see util/length
 * @see util/lengthMinusOne
 * @see util/lengthFromZero
 *
 * @example
 *
 *    lengthFromZero([1])        //=> 1
 *    lengthFromZero([])         //=> 0
 *    lengthFromZero([1, 2, 3])  //=> 2
 *    lengthFromZero({length: -1})   //=> 0
 *
 */
module.exports = x =>
  // over 1, subtract 1
  x > 1
    ? x - 1
    // is 1, use 1, else 0
    : x === 1
      ? 1
      : 0
