const isFunction = require('./function')

module.exports = x => isFunction(x) || x instanceof RegExp
