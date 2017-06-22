// https://github.com/jonschlinkert/kind-of/pull/12
const toS = require('./toS')

module.exports = obj => toS(obj).toLowerCase().includes('iterator')
