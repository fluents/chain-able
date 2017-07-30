const mapArray = require('../map/mapArray')
const flip2 = require('../../fp/flip2')

module.exports = function mapArrayFlipped(array, iteratee) {
  return mapArray(array, flip2(iteratee))
}
