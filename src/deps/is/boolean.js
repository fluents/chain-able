const toS = require('./toS')
const isTrue = require('./true')

// || typeof x === 'boolean'  || (/true|false/).test(x)
module.exports = x => isTrue(x) || x === false || toS(x) === '[object Boolean]'
