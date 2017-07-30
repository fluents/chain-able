const forOwn = require('../each/forOwn')
const flip2 = require('../../fp/flip2')

// @TODO nthArg, flip2
module.exports = function forOwnKeyValue(array, iteratee) {
  return forOwn(array, flip2(iteratee))
}
