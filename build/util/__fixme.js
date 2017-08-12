const {
  curry,
  not,
  includes,
  includesCount,
  camelCase,
  replace,
  first,
  isMatch,
  isString,
  isTrue,
  isFunction,
  isArray,
  isEmpty,
  remove,
  reverse,
  pipe,
  toMatcher,
  construct,
  invoke,
  hasOwnProperty,
  keysObjOrArray,
} = require('../../exports')

const isNegative = x => x < 0

// NEED TO HAVE .LAST_INDEX_OF CAN USE COUNT, SAME WAY, AND CPY FROM LODASH | RAMDA

// whether to return the key along with value...
// first, last, nth
const _findAt = curry(3, (haystack, predicate, position) => {
  let findings = []

  // @TODO NOT SOLID
  const hay = isArray(haystack) ? haystack : haystack.split(predicate)

  // loop obj ugh
  hay.forEach((needle, key) => {
    if (isMatch(needle, predicate)) findings.push(needle)
    // if (predicate(needle, key)) findings.push(needle)
  })

  if (isEmpty(findings)) return null
  else if (isNegative(position)) return findings[findings.length - position]
  else return findings[position]
})

// findIndexAt
const findIndexAt = curry(3, (haystack, predicate, position) => {
  const finding = _findAt(haystack, predicate, position)
  return haystack.indexOf(finding)
})

// const replaceLast = findAt('_', '_', -1)
// const replaceLast = (pattern, replacement, str) =>
//   pipe(reverse, replace(pattern, replacement), reverse)(str)

const replaceLast = (pattern, replacement, str) => {
  // const index = findIndexAt(str, pattern, -1)

  // 1
  // const pieces = str.split(pattern)
  // const replaced = pieces.join(pattern)

  // 2
  const index = str.lastIndexOf(pattern)
  const pre = str.substring(0, index)
  const second = str.substring(index)
  const replaced = pre + second.replace(pattern, replacement)
  // console.log({index, pre, second, pattern, replaced})

  // 3
  // const strs = str.split(pattern)
  // let replaced = ''
  // strs.forEach((s, index) => {
  //   if (index === strs.length) replaced += s.replace(pattern)
  //   else replaced += s
  // })

  // const replaced = str.replace(toMatcher(pattern), replacement)

  return replaced
}

// @TODO could also use for in
const forOwn = curry(2, (array, iteratee) => {
  const nodeIsArray = isArray(array)
  let keys = keysObjOrArray(array)
  let index = 0
  while (index++ < keys.length - 1) {
    const key = nodeIsArray ? keys[index] : keys[keys[index]]
    iteratee(keys[index], key, index, array)
  }
  return array
})

// forEachChain
const forEach = curry(2, (array, iteratee) => {
  array.forEach(iteratee)
  return array
})
const wrapForEach = (array) => {
  return {forEach: forEach(array)}
}


// @TODO pure-function side-effect-free to return say an array
//       with them knowing the original index
//
// @TODO need to remap Map too... ugh
const _remapKeys = (transform, obj, removeOld = true) => {
  Object.keys(obj).forEach(oldKey => {
    const newKey = transform(obj[oldKey])
    obj[newKey] = obj[oldKey]
    if (isTrue(removeOld)) remove(obj[oldKey])
  })
}
const _remapValues = (transform, obj) => {
  Object.keys(obj).forEach(key => obj[key] = transform(obj[key], key))
}

// value & values, key & keys, as obj or array... goodness
//
// match key, if match, use that transform (first one, condition/all as og name)
const _findKey = (predicate, obj) => Object.keys(obj).filter(predicate).shift()
const findKey = curry(2, _findKey)

// @TODO NEED FINDVALUES TO PIPE ALL RESULTS
const _findValue = (predicate, obj) => {
  const keys = Object.keys(obj)
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index]
    const value = obj[key]
    if (predicate(value, key)) return value
  }
  return false
}
const _findValues = (predicate, obj) => {
  const keys = Object.keys(obj)
  const valuesFound = []
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index]
    const value = obj[key]
    if (predicate(value, key)) valuesFound.push(value)
  }
  return valuesFound
}

const findValue = curry(2, _findValue)
const findValues = curry(2, _findValues)

const remapKeys = curry(2, _remapKeys)
const remapValues = curry(2, _remapValues)

const remapToMatch = remapKeys(toMatcher)
const findFirstMatch = pipe(isMatch, findValue)


// @TODO now I have a use knowing it exists...
// find(map, prop, isMatch)
// findKey(map, isMatch)
// Object.keys(map).filter(isMatch)
// remapToMatch(map)

const findMatching = (obj, query) => {
  let lastKeyFound
  let keys = []

  const keyToMatcher = (val, key) => {
    lastKeyFound = key
    // console.log('does it match?', {query, val, key, isMatch: isMatch(query, key)})
    if (isMatch(query, key)) {
      keys.push(key)
      return true
    }
    return false
  }

  const value = findValues(keyToMatcher, obj)

  // console.log({value, keys}, 'finding matching...')
  if (value.length) return [lastKeyFound, value, keys]
  else return false
}

module.exports = {
  forEach,
  wrapForEach,
  replaceLast,
  isNegative,
  // find
  findIndexAt,
  findMatching,
  findKey,
  findValue,
  findValues,
  findFirstMatch,
  // remap
  remapKeys,
  remapValues,
  remapToMatch,
  forOwn,
}
