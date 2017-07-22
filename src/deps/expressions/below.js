const curry = require('../fp/curry')

// @alias lt
function isBelow(aboveThis, x) {
  return x < aboveThis
}

module.exports = curry(2, isBelow)
