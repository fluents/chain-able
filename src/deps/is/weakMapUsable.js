/**
 * @desc If possible, use a WeakMap.
 * @name isWeakMapUsable
 * @TODO isWeakCollectionUsable
 * @since 5.0.0-beta.6
 * @type {boolean}
 */
module.exports = typeof WeakMap === 'function'
