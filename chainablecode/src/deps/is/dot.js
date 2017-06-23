const isArray = require('./array')

module.exports = k => (typeof k === 'string' && k.includes('.')) || isArray(k)
