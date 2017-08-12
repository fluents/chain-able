const filterWhere = require('../filter/filterWhere')
const flip2 = require('../../fp/flip2')

module.exports = function filterWhereKeyValue(array, iteratee) {
  return filterWhere(array, flip2(iteratee))
}
