const above = require('./above')
const below = require('./below')
const between = require('./between')
const even = require('./even')
const odd = require('./odd')

// gte lte
const gt = above
const lt = below
const isEven = even
const isOdd = odd

module.exports = {gt, lt, above, below, between, isEven, isOdd, odd, even}
