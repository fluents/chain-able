const getIncludesCount = require('../fp/includesCount')
const isEven = require('../expressions/even')
const isArray = require('./array')
const isNumber = require('./numberPrimitive')
const isString = require('./stringPrimitive')
const isTrue = require('./true')

// http://documentcloud.github.io/underscore-contrib/#isjson
// https://github.com/chriso/validator.js/blob/master/src/lib/isJSON.js
// https://bitsrc.io/amit/json/global/json-validator/code
//
// const onlyLettersAndSpaces = /^([\sa-z]+)*$/gim
// const regexp = /[\"|\{|\[|\}|]+/
// const chars = ['[', '"', '{', ']', '}']
// const nums = [91, 34]
// const map = {
//   '"': 34,
//   '{': 123,
//   '}': 125,
//   ']': 93,
//   '[': 91,
// }


// @TODO everything like this (with numbers)
// eslint-disable-next-line no-useless-escape
const JSONAlphaOmega = x =>
  x === 93 || x === 91 || x === 125 || x === 123 || x === 34


function hasWith(x, fn, symbol) {
  if (isArray(symbol)) return symbol.map(s => hasWith(x, fn, s)).every(isTrue)
  else return fn(getIncludesCount(x.split(''), symbol))
}

const isValidJSONLine = subString => {
  const trimmed = subString.trim()
  const start = trimmed.charCodeAt(0)
  const end = trimmed.charCodeAt(trimmed.length - 1)
  return JSONAlphaOmega(start) && JSONAlphaOmega(end)
}

/* prettier-ignore */
/**
 * @desc isJSON, without tryCatch
 * @param  {*} x value to check
 * @return {boolean} x isJSON
 *
 * @example
 *    isJSON('{}')
 *    // => true
 *
 *    isJSON('')
 *    // => false
 *
 *    isJSON('[]')
 *    // => true
 */
function isJSON(x) {
  return isString(x) && x.split(',').every(isValidJSONLine)
}

function isJSONSafe(x) {
  return isJSON(x) && hasWith(x, isEven, ['[', ']', '{', '}', '"'])
}

// https://github.com/mootools/mootools-core/blob/master/Source/Utilities/JSON.js

const reValidJSON = /^[\],:{}\s]*$/
const reProps = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g
const reVals = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g
const reColons = /(?:^|:|,)(?:\s*\[)+/g

// const replacements = [
//   replace(reProps, '@'),
//   replace(reVals, ']'),
//   replace(reColons, ':'),
// ]
// const replaceAll = pipe(replacements)

function isValidJSON(string) {
  reValidJSON.test(
    string.replace(reProps, '@').replace(reVals, ']').replace(reColons, '')
  )
}

module.exports = isJSON
