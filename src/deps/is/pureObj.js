const isObjLoose = require('./objLoose')
const isNullOrUndef = require('./nullOrUndefined')

// @TODO: !Array.isArray?
// https://github.com/sindresorhus/is-obj/blob/master/index.js
module.exports = x => !isNullOrUndef(x) && isObjLoose(x)
