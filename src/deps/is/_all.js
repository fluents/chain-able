const toS = require('./toS')
const isTagEq = require('./tagEq')
const isType = require('./type')
const isArguments = require('./arguments')
const isArray = require('./array')
const isArrayOf = require('./arrayOf')
const isArrayLike = require('./arrayLike')
const isArrayTyped = require('./arrayTyped')
const isArrayBuffer = require('./arrayBuffer')
const isAsync = require('./async')
const isAsyncish = require('./asyncish')
const isBoolean = require('./boolean')
const isBooleanPrimitive = require('./booleanPrimitive')
const isBooleanLike = require('./booleanLike')
const isBrowser = require('./browser')
const isCircular = require('./circular')
const isCollection = require('./collection')
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
const isFinite = require('./finite')
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
const isNumberishWithDecimals = require('./numberishWithDecimals')
const isNaN = require('./NaN')
const isNative = require('./native')
const isNodeJS = require('./nodejs')
// const isEmptyArray = require('./emptyArray')
const isObj = require('./obj')
const isObjPure = require('./objPure')
const isObjWithKeys = require('./objWithKeys')
const isObjNotNull = require('./objNotNull')
const isObjPlain = require('./objPlain')
const isObjTag = require('./objTag')
const isObjTypeof = require('./objTypeof')
const ownPropertyIs = require('./ownPropertyIs')
const isPrimitive = require('./primitive')
const isPrototypeOf = require('./prototypeOf')
const isPromise = require('./promise')
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
const isValidArrayIndex = require('./validArrayIndex')
const isValidIndex = require('./validIndex')
const isValidPropertyKey = require('./validPropertyKey')
const isWeakMap = require('./weakMap')
const isWeakSet = require('./weakSet')
const isWebWorker = require('./webWorker')
const isWeakMapUsable = require('./weakMapUsable')
const isZeroish = require('./zeroish')
const hasDecimals = require('./hasDecimals')

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
  isArguments,
  isArrayOf,
  isArrayLike,
  isAsyncish,
  isArray,
  isArrayTyped,
  isArrayBuffer,
  isAsync,
  isBoolean,
  isBooleanPrimitive,
  isBooleanLike,
  isBrowser,
  isCircular,
  isCollection,
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
  isFinite,
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
  isNumberishWithDecimals,
  isNaN,
  isNative,
  isNodeJS,
  isObj,
  isObjTag,
  isObjTypeof,
  isObjPure,
  isObjWithKeys,
  isObjNotNull,
  isObjPlain,
  isPrimitive,
  isPromise,
  isPrototypeOf,
  isRegExp,
  isReal,
  isStringOrNumber,
  isString,
  isSet,
  isSymbol,
  isTrue,
  isType,
  isTagEq,
  isUndefined,
  isUndefinedLike,
  isUnsignedInteger,
  isURL,
  isValidArrayIndex,
  isValidIndex,
  isValidPropertyKey,
  isWeakMap,
  isWeakMapUsable,
  isWeakSet,
  isWebWorker,
  isZeroish,
  hasDecimals,
}
