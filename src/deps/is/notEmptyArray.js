const isArray = require('./array')

module.exports = x => isArray(x) && x.length !== 0
