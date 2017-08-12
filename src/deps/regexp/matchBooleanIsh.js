const toTestable = require('../cast/toTestable')
const isTrue = require('../is/true')
const isFalse = require('../is/false')
const or = require('../conditional/or')

const quote = `("|')?`
const begin = '^'
const end = '$'
const matchTrue = toTestable(begin + quote + '(true)' + quote + end)
const matchFalse = toTestable(begin + quote + '(false)' + quote + end)
const matchTrueOrFalse = or(matchTrue, matchFalse)
const isTruish = or(isTrue, matchTrue)
const isFalsish = or(isFalse, matchFalse)

module.exports = {matchTrue, matchTrueOrFalse, isTruish, isFalsish}
