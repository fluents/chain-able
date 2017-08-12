const curry = require('../fp/curry')
const isNill = require('../is/nullOrUndefined')
const hasOwnProperty = require('../native/objectHasOwnProperty')

/**
 * @desc hasOwnProperty, first checking !nill
 * @since 3.0.0
 * @memberOf util
 * @alias has
 *
 * @param  {Object | *} haystack object
 * @param  {string | *} needle property
 * @return {boolean} haystack != null & haystack[needle]
 *
 * {@link https://github.com/ramda/ramda/blob/v0.24.1/src/internal/_has.js ramda-has}
 * @see {@link ramda-has}
 *
 * @example
 *
 *  hasOwnPropertyNotNill({eh: true}, 'eh')   //=> true
 *  hasOwnPropertyNotNill({eh: true}, 'nope') //=> false
 *
 */
const hasOwnPropertyNotNill = (haystack, needle) =>
  !isNill(haystack) && hasOwnProperty.call(haystack, needle)

module.exports = curry(2, hasOwnPropertyNotNill)
// function(obj, key) {
//   return key in obj
// }
