const isPureObj = require('./pureObj')
const isFunction = require('./function')

module.exports = x => isPureObj(x) || isFunction(x)
