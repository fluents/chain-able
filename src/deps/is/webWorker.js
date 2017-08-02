/* globals WorkerGlobalScope */
const isUndefinedLike = require('./undefinedLike')

/**
 * @desc Determines if the code is running with a [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers).
 * @name isWebWorker
 * @since 5.0.0-beta.5
 * @signature `isWebWorker()`
 *
 * @return {boolean} True if running in a Web Worker.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope mozilla-webworkerglobalscope}
 * {@link https://github.com/canjs/can-util/blob/master/js/is-web-worker/is-web-worker.js can-js-is-web-worker}
 * @see {@link can-js-is-web-worker}
 * @see {@link mozilla-webworkerglobalscope}
 *
 * @example
 *
 *   var isWebWorker = require("can-util/js/is-web-worker/is-web-worker");
 *   var GLOBAL = require("can-util/js/global/global");
 *
 *   if (isWebWorker()) {
 *     GLOBAL() === self) //=> true
 *   }
 *
 */
module.exports = function() {
  return !isUndefinedLike(typeof WorkerGlobalScope) &&
  (this instanceof WorkerGlobalScope)
}
