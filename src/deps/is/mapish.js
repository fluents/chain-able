const Chainable = require('../../Chainable')
const isMap = require('./map')

module.exports = x => isMap(x) || x instanceof Chainable
