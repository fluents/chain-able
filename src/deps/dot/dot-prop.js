// const escape = require('./escape')
// const dottable = require('./dottable')
// const segments = require('./segments')
// const paths = require('. paths')
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
