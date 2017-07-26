const noop = require('./noop')

/**
 * @symb ❄️
 * @memberOf util
 * @since 5.0.0-beta.1
 * @name freeze
 * @type {Function}
 */
const ObjectFreeze = Object.freeze
module.exports = ObjectFreeze ? ObjectFreeze : noop
