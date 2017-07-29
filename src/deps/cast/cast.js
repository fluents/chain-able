const array = require('./toArray')
const boolean = require('./boolean')
const integer = require('./integer')
const number = require('./number')
const obj = require('./object')
const string = require('./string')
const iteratorToArray = require('./iteratorToArray')
const arrayToObj = require('./arrayToObj')
const pairs = require('./pairs')
const asciiToArray = require('./asciiToArray')
const unicodeToArray = require('./unicodeToArray')
const setToArray = require('./setToArray')
const stringToArray = require('./stringToArray')
const objToMap = require('./objToMap')
const plainObj = require('./plainObj')
const set = require('./set')
const defaultTo = require('./defaultTo')
const toFunction = require('./toFunction')
// const coerce = require('./coerce')

const func = toFunction
const objToArray = pairs
const arrayToSet = set

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
  // toMap: map,
  toObj: obj,
  toString: string,
  // more casting
  asciiToArray,
  objToArray,
  iteratorToArray,
  arrayToObj,
  unicodeToArray,
  setToArray,
  stringToArray,
  objToMap,
  plainObj,
  defaultTo,
  arrayToSet,
  toFunction,
}
