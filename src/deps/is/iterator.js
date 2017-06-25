// https://github.com/jonschlinkert/kind-of/pull/12
const toS = require('./toS')

// eslint-disable-next-line
module.exports = obj => ~toS(obj).indexOf("Iterator");
