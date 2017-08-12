const mapObjOrArrayVals = require('../map/mapObjOrArrayVals')
const flip2 = require('../../fp/flip2')

module.exports = function mapObjOrArrayValsFlipped(array, iteratee) {
  return mapObjOrArrayVals(array, flip2(iteratee))
}
