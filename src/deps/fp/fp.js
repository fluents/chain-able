/* istanbul ignore next: @docblocks @exports */

const always = require('./always')
const arity = require('./arity')
const curry = require('./curry')
const evolve = require('./evolve')
const equals = require('./equals')
const first = require('./first')
const last = require('./last')
const path = require('./path')
const pipe = require('./pipe')
const pipeTwo = require('./pipeTwo')
const prop = require('./prop')
const construct = require('./construct')
const firstIndex = require('./firstIndex')
const lastIndex = require('./lastIndex')
const hasInMatching = require('./hasInMatching')
const includesCount = require('./includesCount')
const remove = require('./remove')
const replace = require('./replace')
// const replaceWrap = require('./replaceWrap')
const reverse = require('./reverse')
const invoke = require('./invoke')
const flip = require('./flip')
const flip2 = require('./flip2')
const bind = require('./bind')
const times = require('./times')
const nth = require('./nth')
const invertObj = require('./invertObjKeyVal')
const preferExistingMethod = require('./preferExistingMethod')
const slice = require('./slice')
const where = require('./where')
const when = require('./when')
const constant = require('./return')
// const wrap = require('./wrap')

/**
 * @member fp
 * @symb 🐏
 * @tests fp/*
 * @types fp
 * @type {Object}
 */
module.exports = {
  always,
  arity,
  bind,
  construct,
  hasInMatching,
  equals,
  includesCount,
  invoke,
  curry,
  first,
  firstIndex,
  flip,
  flip2,
  last,
  lastIndex,
  path,
  pipe,
  pipeTwo,
  prop,
  replace,
  remove,
  reverse,
  times,
  nth,
  preferExistingMethod,
  invertObj,
  slice,
  evolve,
  where,
  when,
  constant,
  'return': constant,
}
