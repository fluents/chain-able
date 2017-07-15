const toS = require('./toS')
const isRegExp = require('./regexp')
const isError = require('./error')
const isBoolean = require('./boolean')
const isNumber = require('./number')
const isString = require('./string')
const isDate = require('./date')
const isObj = require('./obj')
const isObjPure = require('./objPure')
const isObjWithKeys = require('./objWithKeys')
const isObjNotNull = require('./objNotNull')
const isReal = require('./real')
const isMap = require('./map')
const isSet = require('./set')
const isSymbol = require('./symbol')
const isFunction = require('./function')
const isPrototypeOf = require('./prototypeOf')
const isArray = require('./array')
const isIterator = require('./iterator')
const isUndefined = require('./undefined')
const isNull = require('./null')
const isMatcher = require('./matcher')
// dont need these yet
const isNill = require('./nullOrUndefined')
const isTrue = require('./true')
// const isClass = require('./class')
// const isEnumerable = require('./enumerable')
// const isMapish = require('./mapish')

/**
 * @member is
 * @types is
 * @tests is/*
 *
 * @see https://github.com/lodash/lodash/issues/3237
 * @type {Object}
 */
module.exports = {
  isObjWithKeys,
  isObj,
  // isObject: isObj,
  isObjPure,
  isObjNotNull,
  isFunction,
  isReal,
  toS,
  isDate,
  isRegExp,
  isError,
  isBoolean,
  isNumber,
  isString,
  isMap,
  isSet,
  isSymbol,
  isPrototypeOf,
  isArray,
  // new
  isIterator,
  isUndefined,
  isNull,
  isNill,
  isTrue,
  isMatcher,
}
