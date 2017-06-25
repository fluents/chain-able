const toS = require('./toS')
const isPureObj = require('./pureObj')
const isRegExp = require('./regexp')
const isError = require('./error')
const isBoolean = require('./boolean')
const isNumber = require('./number')
const isString = require('./string')
const isDate = require('./date')
const isObjWithKeys = require('./objWithKeys')
const isReal = require('./real')
const isMap = require('./map')
const isSet = require('./set')
const isSymbol = require('./symbol')
const isFunction = require('./function')
const isObj = require('./obj')
const isPrototypeOf = require('./prototypeOf')
const isArray = require('./array')
const isIterator = require('./iterator')
const isUndefined = require('./undefined')
const isNull = require('./null')
const isMatcher = require('./matcher')
// dont need these yet
// const isNullOrUndefined = require('./nullOrUndefined')
// const isClass = require('./class')
// const isEnumerable = require('./enumerable')
// const isMapish = require('./mapish')
// isTrue

module.exports = {
  isObjWithKeys,
  isObj,
  isObject: isObj,
  isFunction,
  isReal,
  isPureObj,
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
  isMatcher,
}
