'use strict'

var _ = require('lodash')
var doctrine = require('doctrine')

var reCode = /`.*?`/g
var reToken = /@@token@@/g
var split = String.prototype.split
var token = '@@token@@'

/*----------------------------------------------------------------------------*/

/**
 * The `Array#sort` comparator to produce a
 * [natural sort order](https://en.wikipedia.org/wiki/Natural_sort_order).
 *
 * @memberOf util
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareNatural(value, other) {
  var index = -1
  var valParts = split.call(value, '.')
  var valLength = valParts.length
  var othParts = split.call(other, '.')
  var othLength = othParts.length
  var length = Math.min(valLength, othLength)

  while (++index < length) {
    var valPart = valParts[index]
    var othPart = othParts[index]

    if (valPart > othPart && othPart != 'prototype') {
      return 1
    }
    else if (valPart < othPart && valPart != 'prototype') {
      return -1
    }
  }
  return valLength > othLength ? 1 : valLength < othLength ? -1 : 0
}

/**
 * Performs common string formatting operations.
 *
 * @memberOf util
 * @param {string} string The string to format.
 * @returns {string} Returns the formatted string.
 */
function format(string) {
  string = _.toString(string)

  // Replace all code snippets with a token.
  var snippets = []
  string = string.replace(reCode, function(match) {
    snippets.push(match)
    return token
  })

  /* prettier-ignore */
  return string
    // Add line breaks.
    .replace(/:\n(?=[\t ]*\S)/g, ':<br>\n')
    .replace(/\n( *)[-*](?=[\t ]+\S)/g, '\n<br>\n$1*')
    .replace(/^[\t ]*\n/gm, '<br>\n<br>\n')
    // Normalize whitespace.
    .replace(/\n +/g, ' ')
    // Italicize parentheses.
    .replace(/(^|\s)(\(.+\))/g, '$1*$2*')
    // Mark numbers as inline code.
    .replace(/[\t ](-?\d+(?:.\d+)?)(?!\.[^\n])/g, ' `$1`')
    // Replace all tokens with code snippets.
    .replace(reToken, function(match) {
      return snippets.shift()
    })
    .trim()
}

/**
 * Parses the JSDoc `comment` into an object.
 *
 * @memberOf util
 * @param {string} comment The comment to parse.
 * @returns {Object} Returns the parsed object.
 */
var parse = _.partial(doctrine.parse, _, {
  lineNumbers: true,
  recoverable: true,
  sloppy: true,
  unwrap: true,
})

module.exports = {
  compareNatural,
  format,
  parse,
}
