const prop = require('../fp/prop')

/**
 * @desc reduces size by 100s of gzip bytes
 * @NOTE `length` is a global property of `this` which is `global` or `window`
 * @name length
 * @alias getLength
 * @type {Functon}
 * @see fp/prop
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/length window.length}
 * @see {@link window.length}
 */
module.exports = prop('length')
