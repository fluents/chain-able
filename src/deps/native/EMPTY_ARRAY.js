const freeze = require('../util/freeze')

/**
 * @desc frozen empty array
 * @name EMPTY_ARRAY
 * @alias emptyArray
 * @type {Array}
 *
 * {@link https://github.com/mobxjs/mobx/blob/master/src/utils/utils.ts#L1 mobx-empty-array}
 * @see {@link mobx-empty-array}
 */
const EMPTY_ARRAY = []
freeze(EMPTY_ARRAY)
module.exports = EMPTY_ARRAY
