const EMPTY_ARRAY = require('../native/EMPTY_ARRAY')
const isArray = require('../is/array')
const isString = require('../is/stringPrimitive')
const esc = require('../matcher/to-regexp')
const pipe = require('../fp/pipe')
const curry = require('../fp/curry')
const invoke = require('../fp/invoke')
const lengthMinusOne = require('../util/lengthMinusOne')
const newRegExp = require('../construct/regexp')
const split = require('../string/split')
const test = require('../matcher/test')

// @TODO move
const toRegExp = pipe(esc, newRegExp, test)
// @TODO could have `method` for curring with .flip .invoke
const filter = invoke('_', 'filter')

/**
 * @desc getIncludesCount, how many times a needle occurrs in a haystack
 *
 * @since 5.0.0-beta.4
 * @alias countBy
 * @alias occurrs
 * @alias getIncludesCount
 *
 * @curried 2
 *
 * @param  {string | Array} haystack haystack to look in
 * @param  {string | Matchable} needle needle to find
 * @return {number} occurrs/includes times/count
 *
 * {@link https://github.com/ramda/ramda/blob/master/src/countBy.js ramda-count-by}
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L459 underscore-count-by}
 * {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#Finding_all_the_occurrences_of_an_element mozilla-array-occurrences}
 * {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf#Using_indexOf()_to_count_occurrences_of_a_letter_in_a_string mozilla-occurrences}
 * @see {@link mozilla-occurrences}
 * @see {@link mozilla-array-occurrences}
 * @see {@link underscore-count-by}
 * @see {@link ramda-count-by}
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
    return EMPTY_ARRAY
  }
}

// curry for 2 args, pipe result through to .length - 1
const getIncludesThenLength = pipe(getIncludesCount, lengthMinusOne)
module.exports = curry(2, getIncludesThenLength)
