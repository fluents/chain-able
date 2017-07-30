const mapObjOrArray = require('../map/mapObjOrArray')
const flip2 = require('../../fp/flip2')

module.exports = function mapObjOrArrayFlipped(array, iteratee) {
  return mapObjOrArray(array, flip2(iteratee))
}
