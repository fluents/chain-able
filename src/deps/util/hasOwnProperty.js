module.exports = (haystack, needle) =>
  Object.prototype.hasOwnProperty.call(haystack, needle)

// function(obj, key) {
//   return key in obj
// }
