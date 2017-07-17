const hasOwnProperty = require('../util/hasOwnProperty')
const isEnumerable = require('./enumerable')
const toS = require('./toS')

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
 */

function isArguments(object) {
  return toS(object) === '[object Arguments]'
}

module.exports = isArguments
// function unsupported(object) {
//   return (
//     (object &&
//       typeof object === 'object' &&
//       typeof object.length === 'number' &&
//       hasOwnProperty(object, 'callee') &&
//       !isEnumerable.call(object, 'callee')) ||
//     false
//   )
// }
//
// const supportsArgumentsClass =
//   (function() {
//     return toS(arguments)
//   })() === '[object Arguments]'
//
// module.exports = supportsArgumentsClass ? supported : unsupported
