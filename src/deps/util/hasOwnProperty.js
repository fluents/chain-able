const curry = require('../fp/curry')
const isNill = require('../is/nullOrUndefined')
const hasOwnProperty = require('../native/hasOwnProperty')

/**
 * @desc hasOwnProperty, first checking !nill
 * @since 3.0.0
 * @memberOf util
 *
 * @param  {Object | *} haystack object
 * @param  {string | *} needle property
 * @return {boolean} haystack != null & haystack[needle]
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
