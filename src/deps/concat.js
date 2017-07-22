const toarr = require('./to-arr')

/**
 * @desc concat two values, coerce to arrays
 * @since 4.0.0
 *
 * @func
 * @name concat
 *
 * @param  {Array | *} one toArr1
 * @param  {Array | *} two toArr2
 * @return {Array} [one, two]
 *
 * @example
 *
 *   concat([1], [2])          //=> [1, 2]
 *   concat([1], 2)            //=> [1, 2]
 *   concat(1, 2)              //=> [1, 2]
 *   concat(new Set([1]), 2)   //=> [1, 2]
 *
 *   // kind of weird...
 *   concat(null, 2)           //=> [2]
 *   concat(undefined, 2)      //=> [2]
 *   concat(1, null)           //=> [1, null]
 *
 */
module.exports = (one, two) => toarr(one || []).concat(toarr(two))
