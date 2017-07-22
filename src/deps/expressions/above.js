const curry = require('../fp/curry')

// @alias gt
function isAbove(aboveThis, x) {
  return x > aboveThis
}

module.exports = curry(2, isAbove)
