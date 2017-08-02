const identity = require('../fp/identity')

/**
 * {@link https://stackoverflow.com/questions/21402108/difference-between-freeze-and-seal-in-javascript stack-overflow-freeze-vs-seal}
 * {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/seal mozilla-object-seal}
 * @see {@link mozilla-object-seal}
 * @see {@link stack-overflow-freeze-vs-seal}
 * @name object.Seal
 */
module.exports = Object.seal || identity
