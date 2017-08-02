const freeze = require('../util/freeze')

/**
 * properies that are reserved and should not be enumerated
 * unless they `haveOwnProperty`
 *
 * @name NATIVE_PROPS_NON_ENUMERABLE
 * @frozen
 * @type {Array}
 */
module.exports = freeze([
  '__defineGetter__',
  '__defineSetter__',
  '__proto__',
  '__lookupGetter__',
  '__lookupSetter__',
  'hasOwnProperty',
  'propertyIsEnumerable',
  'toLocaleString',
  'isPrototypeOf',
  'toString',
  'constructor',
  'prototype',
  'valueOf',
])
