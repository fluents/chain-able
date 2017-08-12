const matchBooleanIsh = require('../regexp/matchBooleanIsh')
const isBoolean = require('./boolean')

const isBooleanLike = x => isBoolean(x) || matchBooleanIsh(x)
module.exports = isBooleanLike
