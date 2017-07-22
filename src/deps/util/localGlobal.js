const isBrowser = require('../is/browser')
const isNode = require('../is/nodejs')

module.exports = isBrowser() ? window : global
