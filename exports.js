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
// const native = require('./src/deps/native')
// const regexp = require('./src/deps/regexp')
// is
const math = require('./src/deps/math')
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
const encase = require('./src/deps/encase')
const cast = require('./src/deps/cast')
const loop = require('./src/deps/loop')
const is = require('./src/deps/is/_all')

const cache = {addPooling}
const dots = {escapeDot, isDottable: dottable, segments, paths}

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
  math,
  to,
  dots,
  string,
  array,
  util,
  construct,
  cache,
  encase,
  cast,
  loop
)

module.exports = index
