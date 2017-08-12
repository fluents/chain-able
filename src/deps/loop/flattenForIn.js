const forInUnguarded = require('./each/forInUnguarded')

/**
 * @desc copies forInUnguarded
 * @since 5.0.0-beta.6
 * @name flattenForIn
 * @alias flattenProto
 * @alias flattenPrototype
 * @param {Object} x copy proto to self
 * @return {number}
 */
module.exports = x => forInUnguarded(x, (value, key) => {
  x[key] = value
})
