// https://bitsrc.io/amit/json/global/json-validator/code

// const isString = require('./string')
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

// these exist in /is
// var isArray = Array.isArray
// var isString = x => typeof x === 'string'
// var isNumber = x => typeof x === 'number'
var toRegExp = str => new RegExp(str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&'))
// var isTrue = x => x === true

const isArray = require('./array')
const isNumber = require('./numberPrimitive')
const isString = require('./stringPrimitive')
const isTrue = require('./true')

// @TODO everything like this
// eslint-disable-next-line no-useless-escape
var JSONAlphaOmega = x =>
  x === 93 || x === 91 || x === 125 || x === 123 || x === 34

/* prettier-ignore */
/**
 * @desc isOdd
 * @param  {number | any} x value to check
 * @return {boolean} isOdd
 *
 * @see https://stackoverflow.com/questions/6211613/testing-whether-a-value-is-odd-or-even (smaller solution than original)
 * @extends isNumber
 * @alternate n % 2 === 0
 *
 * @example
 *
 *    isOdd(1)
 *    //=> true
 *    isOdd(2)
 *    //=> false
 */
function isOdd(x) {
  return isNumber(x) && (x & 1)
}

// @TODO auto-curry
function isAbove() {}
function isBelow() {}
function isBetween() {}

/**
 * @desc isEven
 * @param {number | any} x value to check
 * @return {boolean} isEven
 *
 * @extends isOdd
 * @variations inverse
 *
 * @example
 *
 *    isEven(1)
 *    //=> false
 *    isEven(2)
 *    //=> true
 *
 *    var rando = Math.floor(Math.random(0, 10000))
 *    isEven(rando) !== isOdd(rando)
 *    //=> true
 *
 */
function isEven(x) {
  return !isOdd(x)
}

/**
 * @alias occurrs
 * @alias getIncludesCount
 *
 * @param  {string | Array} haystack
 * @param  {string | Matchable} needle
 * @return {number} occurrs/includes times/count
 */
const getIncludesCount = (haystack, needle) => {
  if (isString(haystack)) {
    return haystack.split(needle).length - 1
  }
  else if (isArray(haystack)) {
    return haystack.filter(straw => toRegExp(needle).test(straw))
  }
}

function hasWith(x, fn, symbol) {
  if (isArray(symbol)) return symbol.map(s => hasWith(x, fn, s)).every(isTrue)
  else return fn(getIncludesCount(x.split(''), symbol))
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
  return isString(x) && x.split(',').every(subString => {
    const trimmed = subString.trim()
    const start = trimmed.charCodeAt(0)
    const end = trimmed.charCodeAt(trimmed.length - 1)
    return JSONAlphaOmega(start) && JSONAlphaOmega(end)
  })
}

function isJSONSafe(x) {
  return isJSON(x) && hasWith(x, isEven, ['[', ']', '{', '}', '"'])
}

// https://github.com/mootools/mootools-core/blob/master/Source/Utilities/JSON.js

const reValidJSON = /^[\],:{}\s]*$/
const reProps = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g
const reVals = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g
const reColons = /(?:^|:|,)(?:\s*\[)+/g

function isValidJSON(string) {
  reValidJSON.test(
    string.replace(reProps, '@').replace(reVals, ']').replace(reColons, '')
  )
}

module.exports = isJSON
