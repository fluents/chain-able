const curry = require('../../fp/curry')

// .curry for .reverse on this?
// @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_NOT
// ~haystack.indexOf(needle)
const includes = (haystack, needle) => haystack.includes(needle)

module.exports = curry(2, includes)
