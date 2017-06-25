const isArray = require('./array')
const isString = require('./string')

module.exports = k => isArray(k) || (isString(k) && k.includes('.'))
