const _ = require('lodash')
const fp = require('lodash/fp')
const doctrine = require('doctrine')
const humanizeStr = require('humanize-string')
const humanizeURL = require('humanize-url')
const {
  Chain,
  ChainedSet,
  MethodChain,
  merge,
  isUndefined,
  isFunction,
  isString,
  isArray,
} = require('./chain-able')
const log = require('fliplog')

const reCode = /`.*?`/g
const reToken = /@@token@@/g
const split = String.prototype.split
const token = '@@token@@'

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
  let formatted = _.toString(string)

  // Replace all code snippets with a token.
  const snippets = []
  formatted = formatted.replace(reCode, function(match) {
    snippets.push(match)
    return token
  })

  formatted = '' + formatted + ''

  /* prettier-ignore */
  return formatted
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
    // de-indent
    // .replace(/ {2}/g, ' ')
    // Replace all tokens with code snippets.
    .replace(reToken, match => snippets.shift())
    .trim()
}

/**
 * Converts CR+LF line endings to LF.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {string} Returns the converted string.
 */
function normalizeEOL(string) {
  return string.replace(/\r\n/g, '\n')
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

// -----------------------

// https://github.com/lodash/lodash/issues/667
const removeDotCom = x => {
  const dotCom = x.split('.com/')
  if (dotCom.length >= 2) dotCom.shift()
  return dotCom.join('')
}
const humanizeLinkLabel = x =>
  fp.pipe(humanizeURL, humanizeStr, removeDotCom)(x)
const stringify = x => JSON.stringify(x, null, 2)
const deref = x => fp.compose(JSON.parse, JSON.stringify)

// var urlRegExp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i
// http://mathiasbynens.be/demo/url-regex
const urlRegExp = new RegExp(/https?/)
const isUrl = x =>
  x &&
  ((urlRegExp.test(x) && !x.includes('/')) ||
    x.includes('.com') ||
    x.includes('.org'))

const isNotReal = x =>
  x === '' || x === '\n' || x === undefined || x === null || x === '@see'
const isReallyReal = x => !isNotReal(x)

// occurrs
const getIncludesCount = (haystack, needle) => {
  if (isString(haystack)) {
    return haystack.split(needle).length - 1
  }
  else if (isArray(haystack)) {
    return haystack.filter(straw => new RegExp(needle).test(straw))
  }
  else {
    log.red('haystack was not string or array').data(haystack).echo()
  }
}
const replace = (str, pos, replacement) => {
  return str.substring(0, pos) + replacement + str.substring(pos + 1)
}
const isNotFile = x =>
  !isUrl(x) &&
  x.includes('.') &&
  !x.includes('.js') &&
  !x.includes('.ts') &&
  getIncludesCount(x, '.') >= 2

/**
 * Extracts the documentation entries from source code.
 *
 * @static
 * @memberOf Entry
 * @param {string} source The source code.
 * @returns {Array} Returns the array of entries.
 */
function getDocBlocksFrom(source) {
  // log.quick({
  //   source,
  //   str: _.toString(source),
  //   matches: source.match(/\/\*\*(?![-!])[\s\S]*?\*\/\s*.+/g),
  //   matchesStrs: _.toString(source).match(/\/\*\*(?![-!])[\s\S]*?\*\/\s*.+/g),
  // })
  return _.toString(source).match(/\/\*\*(?![-!])[\s\S]*?\*\/\s*.+/g) || []
}

const isNativePropFilter = key =>
  ![
    '__defineGetter__',
    '__defineSetter__',
    'hasOwnProperty',
    'propertyIsEnumerable',
    'toLocaleString',
    'isPrototypeOf',
    'toString',
    'constructor',
    'prototype',
    '__lookupGetter__',
    '__lookupSetter__',
    'valueOf',
  ].includes(key)

const isIgnoredProto = x => ['get', 'set', 'has', 'clear']

function flattenAndMemoizeProtoMethods(obj) {
  let allProps = []

  let _this = obj
  while (_this) {
    _this = Object.getPrototypeOf(_this)
    if (!_this || _this === Object) break

    const descs = Object.getOwnPropertyNames(_this)
      .filter(isNativePropFilter)
      .map(prop => ({
        [prop]: Object.getOwnPropertyDescriptor(_this, prop),
      }))

    allProps = allProps.concat(descs)
  }

  allProps.forEach(data => {
    const prop = Object.keys(data).pop()
    const desc = data[prop]

    const method = desc ? desc.value : null
    if (!isFunction(method)) return
    obj[prop] = _.memoize(obj[prop])
  })
}

const stripPeriodsAndDashes = x => x.replace(/\./g, '-').replace(/^_-/, '')
const isLowerCaseType = x => (/^(?:array|function|object|regexp)$/).test(x)
const matchesFunction = x => (/\*\/\s*(?:function\s+)?[^\s(]+\s*\(/).test(x)
const formatWithParens = x => '(' + _.trim(x.replace(/\|/g, ', '), '()') + '): '
const getFallbackFunction = x => _.trim(_.get(/\*\/\s*(.*?)[:=,]/.exec(x), 1))

const toHash = x =>
  x.replace(/[\\.=|'"(){}\[\]\t ]/g, '').replace(/[#,]+/g, '-').toLowerCase()

const getParentParam = paramValue =>
  _.get(/\w+(?=\.[\w.]+)/.exec(paramValue), 0)

const getFunction = x =>
  _.trim(_.get(/\*\/\s*(?:function\s+)?([^\s(]+)\s*\(/.exec(x), 1))

const extractCall = x =>
  ((/['"]$/).test(x)
    ? _.trim(x, '"\'')
    : x.split('.').pop().split(/^(?:const|let|var) /).pop())

const getAsStr = (obj, prop) => _.toString(_.get(obj, prop))

// @TODO implement
// const repoPath = 'https://github.com/fluents/chain-able/blob/master'
// const repoDocPath =
//   'https://github.com/fluents/chain-able/blob/master/docs/docdown'
// const toDocPath = filepathBasename =>
//   (res('../docs/docdown/') + '/' + filepathBasename).replace('.js', '.md')
// const toRepoPath = filepathBasename => repoPath + filepathBasename
// const toRepoDocPath = filepathBasename => repoDocPath + filepathBasename
// const toBasename = filePath => basename(filePath)

// `/* ` //=> '*'
const slashStarToSlash = x => x.replace(/(\*)\/\s*.+$/, '*')

/**
 * Modify a string by replacing named tokens with matching associated object values.
 *
 * @private
 * @param {string} string The string to modify.
 * @param {Object} data The template data object.
 * @returns {string} Returns the modified string.
 */
function interpolate(string, data) {
  return format(_.template(string)(data))
}

module.exports = {
  interpolate,
  slashStarToSlash,
  normalizeEOL,
  compareNatural,
  format,
  parse,
  // new
  isUrl,
  humanizeLinkLabel,
  removeDotCom,
  deref,
  isNotReal,
  isReallyReal,
  isNotFile,
  replace,
  getIncludesCount,
  log,
  stringify,
  getDocBlocksFrom,
  getEntries: getDocBlocksFrom,
  flattenAndMemoizeProtoMethods,
  // added funcs
  stripPeriodsAndDashes,
  isLowerCaseType,
  matchesFunction,
  formatWithParens,
  toHash,
  getParentParam,
  getFunction,
  getFallbackFunction,
  extractCall,
  getAsStr,
}
