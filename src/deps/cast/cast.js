// primitive
const boolean = require('./toBoolean')
const string = require('./toString')
const obj = require('./toObj')
const toPlainObject = require('./toPlainObj')
const toArguments = require('./toArguments')
// number
const number = require('./toNumber')
const integer = require('./toInteger')
const toInt32 = require('./toUint32')
const toUint31 = require('./toUint31')
const toUint32 = require('./toUint32')
const toLength = require('./toLength')
const toFinite = require('./toFinite')
// array
const array = require('./toArray')
const pairs = require('./toPairs')
const arrayToObj = require('./arrayToObj')
const asciiToArray = require('./asciiToArray')
const unicodeToArray = require('./unicodeToArray')
const setToArray = require('./setToArray')
const stringToArray = require('./stringToArray')
// collection
const objToMap = require('./objToMap')
const arrayToSet = require('./arrayToSet')
const setToPairs = require('./setToPairs')
// iterator
const iteratorToArray = require('./iteratorToArray')
const arrayToIterator = require('./arrayToIterator')
const keyValueToIterator = require('./keyValueToIterator')
// other
const toDate = require('./toDate')
const defaultTo = require('./defaultTo')
const toFunction = require('./toFunction')
const toKey = require('./toKey')
const toTestable = require('./toTestable')
const toRegExp = require('./toRegExp')

// const coerce = require('./coerce')

const func = toFunction
const objToArray = pairs
const set = setToArray

/**
 * @symb 🕑 (for 2)
 * @member cast
 * @member to
 * @type {Object}
 */
module.exports = {
  array,
  boolean,
  integer,
  number,
  // map,
  obj,
  string,
  // to
  toArray: array,
  toBoolean: boolean,
  toInteger: integer,
  toNumber: number,
  toObj: obj,
  toString: string,
  // more casting
  asciiToArray,

  iteratorToArray,
  arrayToIterator,
  arrayToObj,
  unicodeToArray,
  setToArray,
  stringToArray,
  objToArray,
  objToMap,
  toPlainObject,
  toPlainObj: toPlainObject,
  defaultTo,
  arrayToSet,
  toFunction,
  // eh
  toArguments,
  toInt32,
  toUint31,
  toUint32,
  toLength,
  toFinite,
  setToPairs,
  keyValueToIterator,
  toDate,
  toKey,
  toTestable,
  toRegExp,
}
