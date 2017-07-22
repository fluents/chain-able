const toNumber = require('./number')

// http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tointeger
function toInteger(argument) {
  const number = toNumber(argument)
  if (Number.isNaN(number)) {
    return +0
  }

  if (number === 0 || number === -Infinity || number === +Infinity) {
    return number
  }

  return Math.sign(number) * Math.floor(Math.abs(number))
}

module.exports = toInteger
