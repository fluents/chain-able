/* istanbul ignore: for docblocks @member */

const always = require('./always')
const arity = require('./arity')
const curry = require('./curry')
const first = require('./first')
const last = require('./last')
const mapWhere = require('./mapWhere')
const path = require('./path')
const pipe = require('./pipe')
const prop = require('./prop')
const construct = require('./construct')
const firstIndex = require('./firstIndex')
const lastIndex = require('./lastIndex')
const hasInMatching = require('./hasInMatching')
const includesCount = require('./includesCount')
const remove = require('./remove')
const replace = require('./replace')
const reverse = require('./reverse')
const invoke = require('./invoke')

/**
 * @member fp
 * @type {Object}
 */
module.exports = {
  always,
  arity,
  construct,
  hasInMatching,
  includesCount,
  invoke,
  curry,
  first,
  last,
  firstIndex,
  lastIndex,
  mapWhere,
  path,
  pipe,
  prop,
  replace,
  remove,
  reverse,
}
