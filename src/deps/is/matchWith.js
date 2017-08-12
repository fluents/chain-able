const curry = require('../fp/curry')
const matcher = require('../matcher/matcher')
const isEmpty = require('../is/empty')

/**
 * @since 5.0.0-beta.6
 * @TODO
 * @name isMatchWith
 * @func
 * @memberOf is
 */
const isMatchWith = (inputs, patterns) => !isEmpty(matcher(inputs, patterns))

module.exports = curry(2, isMatchWith)
