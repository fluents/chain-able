const curry = require('../fp/curry')
const matcher = require('../matcher/matcher')
const isEmpty = require('../is/empty')

// @TODO document
// @TODO ensure it's best here & not in matcher/
//
// pipe(matcher, isEmpty, not)
const isMatch = (inputs, patterns) => !isEmpty(matcher(inputs, patterns))
module.exports = curry(2, isMatch)
