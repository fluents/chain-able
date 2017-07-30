const mapObjOrArrayKeys = require('../map/mapObjOrArrayKeys')
const flip2 = require('../../fp/flip2')

module.exports = function mapObjOrArrayKeysFlipped(array, iteratee) {
  return mapObjOrArrayKeys(array, flip2(iteratee))
}
