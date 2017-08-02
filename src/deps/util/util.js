const assign = require('./assign')
const from = require('./from')
const getDescriptor = require('./getDescriptor')
const getPrototypeOf = require('./getPrototypeOf')
const hasOwnProperty = require('./hasOwnProperty')
const keys = require('./keys')
const keysIn = require('./keysIn')
const props = require('./props')
const keysObjOrArray = require('./keysObjOrArray')
const length = require('./length')
const lengthFromZero = require('./lengthFromZero')
const lengthMinusOne = require('./lengthMinusOne')
const localGlobal = require('./localGlobal')
const noop = require('./noop')
const define = require('./define')
const defineFinal = require('./defineFinal')
const freeze = require('./freeze')
const seal = require('./seal')
const values = require('./values')
const valuesIn = require('./valuesIn')
const concat = require('./concat')
const size = require('./size')
const type = require('./kindOf')
const simpleKindOf = require('./simpleKindOf')
const _typeof = require('./typeof')

const kindOf = type

/**
 * @member util
 * @type {Object}
 */
module.exports = {
  // size
  len: length,
  lengthFromZero,
  lengthMinusOne,
  // preset
  localGlobal,
  noop,
  // types
  simpleKindOf,
  typeof: _typeof,
  type,
  kindOf,
  // obj
  assign,
  define,
  defineFinal,
  freeze,
  seal,
  // getters
  getDescriptor,
  getPrototypeOf,
  hasOwnProperty,
  keysObjOrArray,
  props,
  // keyval
  values,
  valuesIn,
  keys,
  keysIn,
  // arr
  concat,
  from,
}
