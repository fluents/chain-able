const toS = require('./toS')
const isObj = require('./obj')
const isSymbol = require('./symbol')

module.exports = obj =>
  toS(obj) === '[object Number]' ||
  (isObj(obj) || isSymbol(obj)
    ? false
    : (/^0x[0-9a-f]+$/i).test(obj) ||
        (/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/).test(obj))
