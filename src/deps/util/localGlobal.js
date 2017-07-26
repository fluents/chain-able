const isBrowser = require('../is/browser')
const isNode = require('../is/nodejs')
const isWebWorker = require('../is/webWorker')

/**
 * @name localGlobal
 * @memberOf util
 * @see https://github.com/lodash/lodash/blob/master/.internal/root.js
 * @type {Object}
 */
module.exports = isBrowser() ? window : global
