const isString = require('./string')
const isNumber = require('./number')

module.exports = x => isString(x) || isNumber(x)
