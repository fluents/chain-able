const isUndefinedLike = require('./undefinedLike')

/* istanbul ignore next: jest mess up */
/**
 * @desc check typeof window
 * @since 5.0.0-beta.1
 * @memberOf is
 * @return {boolean} is in browser, or has global window
 * @name isBrowser
 * @func
 * @extends isUndefinedLike
 * @see utils/localGlobal
 * @example isBrowser() //=> true | false
 */
module.exports = () =>
  !isUndefinedLike(typeof window) && !isUndefinedLike(window.window)
