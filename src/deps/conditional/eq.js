const curry = require('../fp/curry')

module.exports = curry(2, function eqeqeq(left, right) {
  return left === right
})
