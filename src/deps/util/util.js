const assign = require('./assign')
const flatten = require('./flatten')
const from = require('./from')
const charCodeAtZero = require('./charCodeAtZero')
const getDescriptor = require('./getDescriptor')
const getPrototypeOf = require('./getPrototypeOf')
const hasOwnProperty = require('./hasOwnProperty')
const keys = require('./keys')
const props = require('./props')
const keysObjOrArray = require('./keysObjOrArray')
const keywords = require('./keywords')
const length = require('./length')
const lengthFromZero = require('./lengthFromZero')
const lengthMinusOne = require('./lengthMinusOne')
const localGlobal = require('./localGlobal')
const nonEnumerableTypes = require('./nonEnumerableTypes')
const noop = require('./noop')
const simpleKindOf = require('./simpleKindOf')
const _typeof = require('./typeof')

module.exports = {
  assign,
  flatten,
  from,
  charCodeAtZero,
  getDescriptor,
  getPrototypeOf,
  hasOwnProperty,
  keys,
  props,
  keysObjOrArray,
  keywords,
  'len': length,
  lengthFromZero,
  lengthMinusOne,
  localGlobal,
  nonEnumerableTypes,
  noop,
  simpleKindOf,
  'typeof': _typeof,
}
