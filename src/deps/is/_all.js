const toS = require('./toS')
const isArray = require('./array')
const isArrayTyped = require('./arrayTyped')
const isArrayBuffer = require('./arrayBuffer')
const isAsync = require('./async')
const isBoolean = require('./boolean')
const isBooleanPrimitive = require('./booleanPrimitive')
const isBrowser = require('./browser')
const isCircular = require('./circular')
const isClass = require('./class')
const isDate = require('./date')
const isDataView = require('./dataView')
const isDot = require('./dot')
const isError = require('./error')
const isExtensible = require('./extensible')
const isEnumerable = require('./enumerable')
const isElement = require('./element')
const isEmpty = require('./empty')
const isFunction = require('./function')
const isFalse = require('./false')
const isFalsy = require('./falsy')
const isFlattenable = require('./flattenable')
const isGenerator = require('./generator')
const hasIn = require('./hasIn')
const isIterator = require('./iterator')
const isIn = require('./in')
const isInfinity = require('./infinity')
const isNegativeInfinity = require('./negativeInfinity')
const isIndexable = require('./indexable')
const isInstanceOf = require('./instanceOf')
const isInteger = require('./integer')
const isJSON = require('./JSON')
const isMatcher = require('./matcher')
const isMap = require('./map')
const isMapish = require('./mapish')
const isMatch = require('./match')
const isMatchWith = require('./matchWith')
const isNill = require('./nullOrUndefined')
const isNull = require('./null')
const isNumber = require('./number')
const isNumberPrimitive = require('./numberPrimitive')
const isNumberish = require('./numberish')
const isNaN = require('./NaN')
const isNative = require('./native')
const isNodeJS = require('./nodejs')
// const isEmptyArray = require('./emptyArray')
const isObj = require('./obj')
const isObjPure = require('./objPure')
const isObjWithKeys = require('./objWithKeys')
const isObjNotNull = require('./objNotNull')
const isObjPlain = require('./objPlain')
const ownPropertyIs = require('./ownPropertyIs')
const isPrimitive = require('./primitive')
const isPrototypeOf = require('./prototypeOf')
const isRegExp = require('./regexp')
const isReal = require('./real')
const isStringOrNumber = require('./stringOrNumber')
const isString = require('./string')
const isSet = require('./set')
const isSymbol = require('./symbol')
const isTrue = require('./true')
const isUndefined = require('./undefined')
const isUndefinedLike = require('./undefinedLike')
const isUnsignedInteger = require('./unsignedInteger')
const isURL = require('./url')
const isWeakMap = require('./weakMap')
const isWeakSet = require('./weakSet')
const isWebWorker = require('./webWorker')
const isWeakMapUsable = require('./weakMapUsable')
const isZeroish = require('./zeroish')

const getTag = toS

/**
 * @alias allIzzez
 * @memberOf is
 * @since 5.0.0-beta.6
 * @see is/_core
 * @type {Object}
 */
module.exports = {
  getTag,
  toS,
  // actual isses
  isArray,
  isArrayTyped,
  isArrayBuffer,
  isAsync,
  isBoolean,
  isBooleanPrimitive,
  isBrowser,
  isCircular,
  isClass,
  isDate,
  isDataView,
  isDot,
  isError,
  isEnumerable,
  isElement,
  isEmpty,
  isExtensible,
  isFunction,
  isFalse,
  isFalsy,
  isFlattenable,
  isGenerator,
  // not named is
  hasIn,
  ownPropertyIs,
  // back to it
  isIterator,
  isIn,
  isInfinity,
  isNegativeInfinity,
  isIndexable,
  isInstanceOf,
  isInteger,
  isJSON,
  isMatcher,
  isMap,
  isMapish,
  isMatch,
  isMatchWith,
  isNill,
  isNull,
  isNumber,
  isNumberPrimitive,
  isNumberish,
  isNaN,
  isNative,
  isNodeJS,
  isObj,
  isObjPure,
  isObjWithKeys,
  isObjNotNull,
  isObjPlain,
  isPrimitive,
  isPrototypeOf,
  isRegExp,
  isReal,
  isStringOrNumber,
  isString,
  isSet,
  isSymbol,
  isTrue,
  isUndefined,
  isUndefinedLike,
  isUnsignedInteger,
  isURL,
  isWeakMap,
  isWeakMapUsable,
  isWeakSet,
  isWebWorker,
  isZeroish,
}
