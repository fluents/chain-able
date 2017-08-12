const slice = require('../fp/slice')
const flip2 = require('../fp/flip2')
const flip = require('../fp/flip')

// list, fromIndex, toIndex
// fromIndex, toIndex, list
module.exports = flip2(flip(slice))
