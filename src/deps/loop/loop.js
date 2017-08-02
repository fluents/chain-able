/* eslint import/max-dependencies: "OFF" */

// each
const arrayEach = require('./each/arrayEach')
const baseEach = require('./each/baseEach')
const baseFor = require('./each/baseFor')
const forEach = require('./each/forEach')
const forOwn = require('./each/forOwn')
// filter
const filterWhere = require('./filter/filterWhere')
// map
const mapArray = require('./map/mapArray')
const mapAcum = require('./map/mapAcum')
const mapArrayIndex = require('./map/mapArrayKeys')
const mapObjKeys = require('./map/mapObjKeys')
const mapObjVals = require('./map/mapObjVals')
const mapObjOrArray = require('./map/mapObjOrArray')
const mapObjOrArrayKeys = require('./map/mapObjOrArrayKeys')
const mapObjOrArrayVals = require('./map/mapObjOrArrayVals')
// sort
const sort = require('./sort/sort')
const sortBy = require('./sort/sortBy')
const sortByR = require('./sort/sortByR')
const sortWith = require('./sort/sortWith')
const comparator = require('./sort/comparator')
// flipped
const filterWhereFlipped = require('./flipped/filterWhereFlipped')
const forOwnFlipped = require('./flipped/forOwnFlipped')
const forEachFlipped = require('./flipped/forEachFlipped')
const mapObjOrArrayKeysFlipped = require('./flipped/mapObjOrArrayKeysFlipped')
const mapObjValsFlipped = require('./flipped/mapObjOrArrayValsFlipped')
const mapObjOrArrayFlipped = require('./flipped/mapObjOrArrayFlipped')
const mapArrayFlipped = require('./flipped/mapArrayFlipped')
const mapObjFlipped = require('./flipped/mapArrayFlipped')
// fantasy
const mapFantasy = require('./fantasy/_map')
const reduceFantasy = require('./fantasy/_reduce')
const converge = require('./fantasy/converge')
const pluck = require('./fantasy/pluck')

const keyVal = {
  filterWhere: filterWhereFlipped,
  mapKey: mapObjOrArrayKeysFlipped,
  forOwn: forOwnFlipped,
  forEach: forEachFlipped,
  mapObj: mapObjFlipped,
  mapObjOrArray: mapObjOrArrayFlipped,
  mapArray: mapArrayFlipped,
}

/**
 * @member loop
 * @symb 🔁
 * @since 5.0.0-beta.6
 */
module.exports = {
  // each
  arrayEach,
  baseEach,
  baseFor,
  forEach,
  forOwn,
  // filter
  filterWhere,
  // arr
  mapArray,
  mapArrayIndex,
  mapObjKeys,
  mapAcum,
  // obj
  mapObjVals,
  mapObjOrArray,
  mapObjOrArrayKeys,
  mapObjOrArrayVals,
  mapObjValsFlipped,
  // sort
  sort,
  sortBy,
  sortByR,
  sortWith,
  comparator,
  // fantasy
  mapFantasy,
  reduceFantasy,
  converge,
  pluck,

  // flipped
  map: mapObjOrArray,
  // named
  // keyVal,
  flipped: keyVal,

  filterWhereFlipped,
  mapObjOrArrayKeysFlipped,
  forOwnFlipped,
  forEachFlipped,
  mapObjFlipped,
  mapObjOrArrayFlipped,
  mapArrayFlipped,
}
