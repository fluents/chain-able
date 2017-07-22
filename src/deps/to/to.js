const array = require('./array')
const boolean = require('./boolean')
const integer = require('./integer')
const map = require('./map')
const number = require('./number')
const obj = require('./object')
const string = require('./string')

/**
 * @member to
 * @type {Object}
 */
module.exports = {
  array,
  boolean,
  integer,
  number,
  map,
  obj,
  string,
  // to
  toArray: array,
  toBoolean: boolean,
  toInteger: integer,
  toNumber: number,
  toMap: map,
  toObj: obj,
  toString: string,
}
