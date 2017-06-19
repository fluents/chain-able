const toS = require('./toS')

// || typeof x === 'boolean'  || (/true|false/).test(x)
module.exports = x =>
  x === true || x === false || toS(x) === '[object Boolean]'
