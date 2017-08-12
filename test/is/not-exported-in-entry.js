const isUndefinedLike = require('../../src/deps/is/undefinedLike')
const isBrowser = require('../../src/deps/is/browser')
const isCircular = require('../../src/deps/is/circular')
const isTrue = require('../../src/deps/is/true')
const isNumber = require('../../src/deps/is/number')
const isArrayOf = require('../../src/deps/is/arrayOf')
const isWeakMap = require('../../src/deps/is/weakMap')
const isWeakSet = require('../../src/deps/is/weakSet')
const isInstanceOf = require('../../src/deps/is/instanceOf')
const always = require('../../src/deps/fp/always')
const localGlobal = require('../../src/deps/util/localGlobal')
const hasInMatching = require('../../src/deps/fp/hasInMatching')
// const isFormData = require('../../src/deps/is/formData')
const stress = require('../_stress')

test('localGlobal', () => {
  expect(localGlobal()).toBe(global)
})

test('isUndefinedLike', () => {
  const stringy = isUndefinedLike('undefined')
  const native = isUndefinedLike(undefined)
  const void0 = isUndefinedLike(void 0)
  const falsey = isUndefinedLike('eh')

  expect(stringy).toBe(true)
  expect(native).toBe(true)
  expect(void0).toBe(true)
  expect(falsey).toBe(false)
  stress(isUndefinedLike)
})

test('isBrowser', () => {
  // @NOTE jest seems to polyfil it
  const window = global.window
  delete global.window

  expect(isBrowser()).toBe(false)

  global.window = window
})

// mocked window by default by jest o.o dangerous magic
test('isBrowser - mock window', () => {
  // global.window = {}
  // global.window.window = global.window
  // console.log('undefinedLike window', typeof window, !isUndefinedLike(typeof window))
  // console.log('is!undefinedLike window.window', !isUndefinedLike(window.window))
  // console.log('isbrowser:', !isUndefinedLike(typeof window) && !isUndefinedLike(window.window))
  expect(isBrowser()).toBe(true)
})

test('isCircular', () => {
  const a = {}
  a.b = a

  expect(isCircular(a)).toBe(true)

  const eh = {}
  eh.b = {
    c: eh,
  }
  expect(isCircular(eh)).toBe(true)


  const four = {}
  four.b = {
    c: 4,
  }
  expect(isCircular(four)).toBe(false)

  const array = []
  array.push(array)

  expect(isCircular(array)).toBe(true)

  expect(isCircular([])).toBe(false)
  expect(isCircular({})).toBe(false)
  expect(isCircular(undefined)).toBe(false)
  expect(isCircular(null)).toBe(false)
  expect(isCircular('eh')).toBe(false)
})

test('isInstanceOf', () => {
  const isObjInstance = isInstanceOf(Object)
  expect(isObjInstance({})).toBe(true)
  expect(isObjInstance(undefined)).toBe(false)

  const isArrInstance = isInstanceOf(Array)
  expect(isArrInstance({})).toBe(false)

  expect(isArrInstance(new Array())).toBe(true)
})

test('hasInMatching', () => {
  const obj = {prop: true}
  const hasTrueProp = hasInMatching(isTrue, '_', 'prop')
  expect(hasTrueProp(obj)).toBe(true)
  expect(hasInMatching(isTrue, obj, 'prop')).toBe(true)

  const array = [100]
  const firstIsNumber = hasInMatching(isNumber, '_', 0)
  expect(firstIsNumber(array)).toBe(true)
  expect(hasInMatching(isNumber, array, 0)).toBe(true)

  expect(hasInMatching(isNumber, array, 1)).toBe(false)
  expect(hasInMatching(isNumber, obj, 'prop')).toBe(false)
  expect(hasInMatching(isNumber, obj, 'nope')).toBe(false)
  expect(hasInMatching(always(false), obj, 'prop')).toBe(false)
})

test('isArrayOf', () => {
  const nums = [0, 1, 2, 3]
  const truths = [true, true, true]
  const mixed = [true, true, true, 0, true, 100, false]
  const allNums = isArrayOf(isNumber)
  const allTrue = isArrayOf(isTrue)

  expect(allNums(nums)).toBe(true)
  expect(allTrue(truths)).toBe(true)

  expect(allTrue(mixed)).toBe(false)
  expect(allNums(mixed)).toBe(false)
})

test('isWeak', () => {
  expect(isWeakMap(new WeakMap())).toBe(true)
  expect(isWeakMap(new Map())).toBe(false)
  expect(isWeakMap({})).toBe(false)

  expect(isWeakSet(new WeakSet())).toBe(true)
  expect(isWeakSet(new Set())).toBe(false)
  expect(isWeakSet({})).toBe(false)
})
