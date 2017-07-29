const pipeTwo = require('../fp/pipeTwo')
const numberFromZero = require('./numberFromZero')
const length = require('./length')

/**
 * @desc when length > 1, use length-1
 *       otherwise, when length == 1, use 0
 *       default, use length
 *
 * @memberOf util
 * @since 5.0.0-beta.2
 * @name lengthFromZero
 *
 * @param {Array | Object | number} obj with length
 * @return {number} obj length from 0
 *
 * @see util/length
 * @see util/lengthMinusOne
 * @see util/numberFromZero
 *
 * @example
 *
 *    lengthFromZero([1])        //=> 1
 *    lengthFromZero([])         //=> 0
 *    lengthFromZero([1, 2, 3])  //=> 2
 *    lengthFromZero({length: -1})   //=> 0
 *
 */
module.exports = pipeTwo(length, numberFromZero)

// * @TODO lense to use an object, or transform it to one with .length?
// *  const len = prop('length')
// *  // when isObj, use len, otherwise, value
// *  const coerceLength = lense([isObj, len])
