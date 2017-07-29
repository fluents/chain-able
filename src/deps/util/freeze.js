const noop = require('./noop')

/**
 * @symb ❄️
 * @memberOf util
 * @since 5.0.0-beta.1
 * @name freeze
 * @type {Function}
 * {@link https://stackoverflow.com/questions/8435080/any-performance-benefit-to-locking-down-javascript-objects perf-freeze}
 * @see {@link perf-freeze}
 */
module.exports = Object.freeze || noop
