const forEach = require('../each/forEach')
const flip2 = require('../../fp/flip2')

// @TODO nthArg, flip2
module.exports = function forEachKeyValue(array, iteratee) {
  return forEach(array, flip2(iteratee))
}
