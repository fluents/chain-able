const isObjLoose = require('./objLoose')
const isNull = require('./null')

// @TODO: !Array.isArray?
// https://github.com/sindresorhus/is-obj/blob/master/index.js
module.exports = x => !isNull(x) && isObjLoose(x)
