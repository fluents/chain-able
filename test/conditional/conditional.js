const isTrue = require('../../src/deps/is/true')
const isFalse = require('../../src/deps/is/false')
const isString = require('../../src/deps/is/string')
const isObj = require('../../src/deps/is/obj')
const isFunction = require('../../src/deps/is/function')
const all = require('../../src/deps/conditional/all')
const or = require('../../src/deps/conditional/or')
const and = require('../../src/deps/conditional/and')
const not = require('../../src/deps/conditional/not')
const some = require('../../src/deps/conditional/some')
const eq = require('../../src/deps/conditional/eq')
const includes = require('../../src/deps/conditional/includes/haystackNeedle')
const includesAll = require('../../src/deps/conditional/includes/all')
const includesAny = require('../../src/deps/conditional/includes/any')
const stress = require('../_stress')

test('all', () => {
  expect(all(isTrue)([true, true])).toBe(true)
  expect(all(isTrue)([true, false])).toBe(false)
  expect(all(isTrue)([false, false])).toBe(false)
  expect(all(isString)(['string', false])).toBe(false)
  stress(all)
})

test('some', () => {
  expect(some(isTrue)([true, true])).toBe(true)
  expect(some(isTrue)([true, false])).toBe(true)
  expect(some(isTrue)([false, false])).toBe(false)
  expect(some(isString)(['string', false])).toBe(true)
  expect(some(isString)(['string', 'string'])).toBe(true)
  stress(some)
})

test('or', () => {
  expect(or(isTrue, isFalse)(true)).toBe(true)
  expect(or(isTrue, isFalse)(false)).toBe(true)
  expect(or(isTrue, isString)('string')).toBe(true)
  expect(or(isTrue, isString)(false)).toBe(false)
  stress(or)
})

test('and', () => {
  expect(and(isObj, isFunction)(function() {})).toBe(true)
  expect(and(isObj, isFunction)({})).toBe(false)
  expect(and(isObj, isFunction)(false)).toBe(false)
  stress(and)
})

test('and', () => {
  expect(and(isObj, not(isFunction))({})).toBe(true)
  expect(and(isTrue, not(isString))(true)).toBe(true)
  expect(not(isString)(true)).toBe(true)
  expect(not(isTrue)(false)).toBe(true)

  expect(and(isObj, not(isFunction))(function() {})).toBe(false)
  expect(not(isTrue)(true)).toBe(false)
  stress(not)
})

test('eq', () => {
  expect(eq('number')('number')).toBe(true)
  expect(eq('true')('true')).toBe(true)
  expect(eq(true)(true)).toBe(true)
  expect(eq(null)(null)).toBe(true)
  expect(eq(false)(null)).toBe(false)
  expect(eq('true')(null)).toBe(false)
  stress(eq)
})

test('includes', () => {
  expect(includes('haystack', 'needle')).toBe(false)
  expect(includes('haystack', 'haystack')).toBe(true)
  expect(includes('haystack', 'hay')).toBe(true)
  expect(includes(['haystack'], 'haystack')).toBe(true)
  expect(includes(['haystack'], 'hay')).toBe(false)
  // stress(includes)
})
test('includesAll', () => {
  expect(includesAll('hay', 'hay')).toBe(true)
  expect(includesAll(['any'], 'any')).toBe(true)
  expect(includesAll(['none'], 'any')).toBe(false)
  // stress(includesAll)
})
test('includesAny', () => {
  expect(includesAny('hay', 'hay')).toBe(true)
  expect(includesAny(['any'], 'any')).toBe(true)
  expect(includesAny(['none'], 'any')).toBe(false)
  expect(includesAny('none', 'any')).toBe(false)
  // was marked rom anyOrAll but removed
  expect(includesAny('hay'.split(''), 'hay')).toBe(true)
  expect(includesAny('any'.split(''), 'any')).toBe(true)

  // has `n`
  expect(includesAny(['n', '0', 'n', 'e'], 'any')).toBe(true)
  // stress(includesAnyOrAll)
  // stress(includesAny)
})
