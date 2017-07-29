const assign = require('./assign')
const from = require('./from')
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
const define = require('./define')
const defineFinal = require('./defineFinal')
const freeze = require('./freeze')
const values = require('./values')
const concat = require('./concat')
const simpleKindOf = require('./simpleKindOf')
const _typeof = require('./typeof')

/**
 * @member util
 * @type {Object}
 */
module.exports = {
  assign,
  from,
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
  // updated
  define,
  defineFinal,
  freeze,
  values,
  concat,
}
