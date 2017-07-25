const above = require('./above')
const below = require('./below')
const between = require('./between')
const even = require('./even')
const odd = require('./odd')
const subtract = require('./subtract')
const add = require('./add')
const increment = require('./increment')
const decrement = require('./decrement')

// gte lte
const gt = above
const lt = below
const isEven = even
const isOdd = odd
const sub = subtract
const inc = increment
const dec = decrement

/**
 * @member expressions
 * @type {Object}
 */
module.exports = {
  above,
  below,
  between,
  isEven,
  isOdd,
  odd,
  even,
  subtract,
  add,
  increment,
  decrement,

  // @alias
  sub,
  inc,
  dec,
  gt,
  lt,
}
