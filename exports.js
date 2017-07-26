/* eslint import/max-dependencies: "OFF" */

/* @TODO add `exports.[name]` for es6 */

const index = require('./src')
// inc
const includes = require('./src/deps/conditional/includes')
const includesAll = require('./src/deps/conditional/includes/all')
const includesAny = require('./src/deps/conditional/includes/any')
// cond
const all = require('./src/deps/conditional/all')
const some = require('./src/deps/conditional/some')
const not = require('./src/deps/conditional/not')
const or = require('./src/deps/conditional/or')
const and = require('./src/deps/conditional/and')
// fp
const fp = require('./src/deps/fp')
// is
const isMatch = require('./src/deps/is/match')
const isEmpty = require('./src/deps/is/empty')
const isStringPrimitive = require('./src/deps/is/stringPrimitive')
const isBooleanPrimitive = require('./src/deps/is/booleanPrimitive')
const isNumberPrimitive = require('./src/deps/is/numberPrimitive')
const isPrimitive = require('./src/deps/is/primitive')
const expressions = require('./src/deps/expressions')
const util = require('./src/deps/util')
const to = require('./src/deps/cast')
const escapeDot = require('./src/deps/dot/escape')
const dottable = require('./src/deps/dot/dottable')
const segments = require('./src/deps/dot/segments')
const paths = require('./src/deps/dot/paths')
const array = require('./src/deps/array')
const construct = require('./src/deps/construct')
const addPooling = require('./src/deps/cache/pooler')
const string = require('./src/deps/string')

const cache = {addPooling}
const dots = {escapeDot, isDottable: dottable, segments, paths}

const is = {
  isMatch,
  isEmpty,
  isStringPrimitive,
  isBooleanPrimitive,
  isNumberPrimitive,
  isPrimitive,
}
const conditionsObj = {all, some, not, or, and}

includes.all = includesAll
includes.any = includesAny
const includesObj = {
  includes,
  includesAll,
  includesAny,
  // all: includesAll,
  // any: includesAny,
}

index.toMatcher = index.matcher.make

Object.assign(
  index,
  includesObj,
  conditionsObj,
  fp,
  is,
  expressions,
  util,
  to,
  dots,
  string,
  array,
  construct,
  cache
)

module.exports = index
