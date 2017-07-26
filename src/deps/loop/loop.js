// each
const arrayEach = require('./each/arrayEach')
const baseEach = require('./each/baseEach')
const baseFor = require('./each/baseFor')
const forEach = require('./each/forEach')
const forOwn = require('./each/forOwn')
// filter
const filterWhere = require('./filter/filterWhere')
// map
const map = require('./map/map')
const mapAcum = require('./map/mapAcum')
const mapKey = require('./map/mapKey')
const mapObj = require('./map/mapObj')
// sort
const sort = require('./sort/sort')
const comperator = require('./sort/comperator')
const sortBy = require('./sort/sortBy')
const sortByR = require('./sort/sortByR')
const sortWith = require('./sort/sortWith')

/**
 * @member loop
 * @symb 🔁
 * @since 5.0.0-beta.6
 */
module.exports = {
  arrayEach,
  baseEach,
  baseFor,
  forEach,
  forOwn,
  filterWhere,
  map,
  mapAcum,
  mapKey,
  mapObj,
  sort,
  comperator,
  sortBy,
  sortByR,
  sortWith,
}
