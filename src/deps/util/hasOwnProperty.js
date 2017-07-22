const curry = require('../fp/curry')
const isNill = require('../is/nullOrUndefined')
const hasOwnProperty = require('../native/hasOwnProperty')

const hasOwnPropertyNotNill = (haystack, needle) =>
  !isNill(haystack) && hasOwnProperty.call(haystack, needle)

module.exports = curry(2, hasOwnPropertyNotNill)
// function(obj, key) {
//   return key in obj
// }
