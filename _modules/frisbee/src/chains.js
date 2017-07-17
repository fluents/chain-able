const Chainable = require('../../../src')
const isJSON = require('../../../src/deps/is/JSON')

Chainable.isJSON = Chainable.is.isJSON = isJSON

module.exports = Chainable
