const isNill = require('../is/nullOrUndefined')

// http://people.mozilla.org/~jorendorff/es6-draft.html#sec-toobject
module.exports = function toObj(x) {
  // @TODO better to return false
  // if (x === null || x === undefined) {
  //   throw new TypeError('Null or undefined passed to ToObject')
  // }
  if (isNill(x)) return false

  // check for null & undefined
  return Object(x)
}
