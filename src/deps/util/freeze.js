const identity = require('../fp/identity')

/**
 * @symb ❄️
 * @desc use Object.freeze or identity identity
 * @memberOf util
 * @since 5.0.0-beta.1
 * @name freeze
 * @type {Function}
 *
 * {@link https://stackoverflow.com/questions/8435080/any-performance-benefit-to-locking-down-javascript-objects perf-freeze}
 * @see {@link perf-freeze}
 *
 * @see fp/identity
 */
module.exports = Object.freeze || identity
