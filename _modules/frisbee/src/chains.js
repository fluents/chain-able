const Chainable = require('../../../src')
const isJSON = require('../../../src/deps/is/JSON')

Chainable.isJSON = Chainable.is.isJSON = isJSON
Chainable.enhanceError = require('../../../src/deps/validators/error')

module.exports = Chainable
