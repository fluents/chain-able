const charCodeAtZero = require('../string/charCodeAtZero')
const stringToArray = require('./stringToArray')

function stringToCharCodes(x) {
  return stringToArray(x).map(charCodeAtZero)
}

module.exports = stringToCharCodes
