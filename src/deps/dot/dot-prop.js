const dotHas = require('./has')
const dotGet = require('./get')
const dotDelete = require('./delete')
const dotSet = require('./set')

module.exports = {
  has: dotHas,
  get: dotGet,
  set: dotSet,
  delete: dotDelete,
}
