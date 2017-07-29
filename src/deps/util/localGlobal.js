/* globals WorkerGlobalScope */
const isBrowser = require('../is/browser')
const isNode = require('../is/nodejs')
const isWebWorker = require('../is/webWorker')

/**
 * @TODO make function to better ensure we get the right global when we use it
 * @name localGlobal
 * @memberOf util
 * {@link https://github.com/lodash/lodash/blob/master/.internal/root.js}
 * @see {@link lodash-root}
 * @type {Object}
 */
module.exports = () =>
  (isBrowser() ? window : isWebWorker() ? WorkerGlobalScope : global)
