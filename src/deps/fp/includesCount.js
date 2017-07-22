const isArray = require('../is/array')
const isString = require('../is/stringPrimitive')
const esc = require('../matcher/to-regexp')
const pipe = require('../fp/pipe')
const curry = require('../fp/curry')
const invoke = require('../fp/invoke')
const lengthMinusOne = require('../util/lengthMinusOne')
const newRegExp = require('../construct/regexp')
const prop = require('../fp/prop')

// @NOTE similar https://github.com/ramda/ramda/blob/master/src/countBy.js

// @TODO move this
// @TODO invoke('_', prop('test'))
// const toTest = invoke('_', prop('test'))
const toTest = x => y => x.test(y)
// function toTest(x) {
//   return function(y) {
//     return x.test(y)
//   }
// }

// const newRegExp = (source) => new RegExp(source)
const toRegExp = pipe(esc, newRegExp, toTest)

const split = invoke('_', 'split')
const filter = invoke('_', 'filter')

const emptyArr = []

/**
 * @desc getIncludesCount, how many times a needle occurrs in a haystack
 *
 * @since 5.0.0-beta.4
 * @alias occurrs
 * @alias getIncludesCount
 *
 * @param  {string | Array} haystack haystack to look in
 * @param  {string | Matchable} needle needle to find
 * @return {number} occurrs/includes times/count
 *
 * {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#Finding_all_the_occurrences_of_an_element mozilla-array-occurrences}
 * {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf#Using_indexOf()_to_count_occurrences_of_a_letter_in_a_string mozilla-occurrences}
 * @see {@link mozilla-occurrences}
 * @see {@link mozilla-array-occurrences}
 *
 * @example
 *
 *  getIncludesCount('1 00 1', '1') //=> 2
 *  getIncludesCount([1, 1, 0, 0], 1) //=> 2
 *  getIncludesCount([0], 1) //=> 0
 *  getIncludesCount('', 1) //=> 0
 *  getIncludesCount(null, 1) //=> 0
 *
 */
function getIncludesCount(haystack, needle) {
  if (isString(haystack)) {
    // return haystack.split(needle)
    return split(haystack, needle)
  }
  else if (isArray(haystack)) {
    // @TODO this disables ternary ability
    // const matcher = toRegExp(needle).test
    // return haystack.filter(toRegExp(needle))
    return filter(haystack, toRegExp(needle))
  }
  // may not be needed...
  else {
    return emptyArr
  }
}

const getIncludesThenLength = pipe(getIncludesCount, lengthMinusOne)
module.exports = curry(2, getIncludesThenLength)
