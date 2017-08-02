const above = require('./above')
const below = require('./below')
const aboveOrEq = require('./aboveOrEq')
const belowOrEq = require('./belowOrEq')
const between = require('./between')
const even = require('./even')
const odd = require('./odd')
const add = require('./add')
const increment = require('./increment')
const decrement = require('./decrement')
const min = require('./min')
const max = require('./max')
const range = require('./range')
const multiplySigned = require('./multiplySigned')
const modulo = require('./modulo')
const subtract = require('./subtract')
const sum = require('./sum')

const gt = above
const lt = below
const gte = aboveOrEq
const lte = belowOrEq
const isEven = even
const isOdd = odd
const sub = subtract
const inc = increment
const dec = decrement

/**
 * @icon ➗
 * @member math
 * @type {Object}
 */
module.exports = {
  // lt, gt,
  above,
  below,
  belowOrEq,
  aboveOrEq,
  between,
  // even odd etc
  isEven,
  isOdd,
  odd,
  even,
  // ops
  subtract,
  add,
  increment,
  decrement,
  modulo,
  // calculate
  max,
  min,
  // create
  range,
  sum,
  multiplySigned,
  // @TODO alias these
  sub,
  inc,
  dec,
  gt,
  lt,
  gte,
  lte,
}
