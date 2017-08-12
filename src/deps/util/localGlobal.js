/* eslint no-confusing-arrow: "OFF" */
/* globals WorkerGlobalScope */
const isBrowser = require('../is/browser')
const isNode = require('../is/nodejs')
const isWebWorker = require('../is/webWorker')

/**
 * @TODO make function to better ensure we get the right global when we use it
 * @since 5.0.0-beta.4
 *
 * @name localGlobal
 * @memberOf util
 *
 * @return {Global}
 *
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L11 underscore-root}
 * {@link https://github.com/lodash/lodash/blob/master/.internal/root.js}
 * @see {@link underscore-root}
 * @see {@link lodash-root}
 * @see is/browser
 * @see is/webWorker
 * @see is/nodejs
 *
 * @example localGlobal() //=> global
 *
 */
module.exports = () =>
  (
    isBrowser()
      ? window
      : isWebWorker()
        ? WorkerGlobalScope
        : global
  ) || this
