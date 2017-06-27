module.exports = (haystack, needle) =>
  Object.prototype.hasOwnProperty.call(haystack, needle)
