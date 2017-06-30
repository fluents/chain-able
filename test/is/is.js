const Instance = require('../../src/deps/symbols/instance')
const isGenerator = require('../../src/deps/is/generator')
const isPromise = require('../../src/deps/is/promise')
const isAsync = require('../../src/deps/is/async')
const isAsyncish = require('../../src/deps/is/asyncish')
const ObjectDefine = require('../../src/deps/define')
const stress = require('../_stress')
const {isMap, isSet, isFunction, isObjWithKeys, isPrototypeOf} = require('./')

test('stress', () => {
  stress()
})

/* istanbul ignore next: anon function for stress test */
function anon() {}
/* istanbul ignore next: anon function for stress test */
const anon2 = function() {}

const datas = [
  null,
  false,
  true,
  new Boolean(1),
  new Boolean(0),
  new Number(1),
  new Date(),
  new RegExp(),
  '',
  undefined,
  void 0,
  1,
  0,
  -1,
  NaN,
  Infinity,
  class {},
  [],
  {},
  anon,
  new Function(),
  Symbol('symbols'),
  Symbol.toPrimitive,
  new Object(),
  Object.create(null),
  new Error(),
  new Array(),
  new Promise(res => res(true)),
  // Promise.resolve(),
  Math,
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Promise,
  Reflect,
  Proxy,
  JSON,
  Function,
  eval,
  Object,
  Date,
  RegExp,
  Array,
  Set,
  Map,
  Symbol,
]
var generatorFunction = function* named() {
  return true
}
async function asyncFunction() {}
const emptyPromise = new Promise(r => r)
const datasObjs = [
  new String('str'),
  Object.assign(anon2, {keys: true}),
  {keys: true},
]

test('should work for Map', () => {
  var map = new Map()
  expect(isMap(map)).toBe(true)
  expect(isFunction(map.set)).toBe(true)
  expect(isFunction(map.get)).toBe(true)

  datas.map(data => expect(isMap(data)).toBe(false))
  expect(isMap(new Set())).toBe(false)
  expect(isFunction(map.add)).toBe(false)
})

test('should work for Set', () => {
  var set = new Set()
  expect(isSet(set)).toBe(true)
  expect(isFunction(set.add)).toBe(true)

  datas.map(data => expect(isSet(data)).toBe(false))
  expect(isFunction(set.set)).toBe(false)
  expect(isFunction(set.get)).toBe(false)
})

test('objWithKeys', () => {
  datas.map(data => expect(isObjWithKeys(data)).toBe(false))
  datasObjs.map(data => expect(isObjWithKeys(data)).toBe(true))
})

// @NOTE: these tests are compiled so `isClass` is not helpful
// test.skip('isClass', t => {
//   console.log(class classy {}.toString())
//   t.true(isClass(class Classy {}))
//   t.false(isClass({}))
// })

test('isPrototypeOf', () => {
  class SuperProto {}
  class SubProto extends SuperProto {}
  var sub = new SubProto()

  // SuperProto.isPrototypeOf(sub)
  expect(isPrototypeOf(Object.getPrototypeOf(sub), sub)).toBe(true)
  // t.true(isPrototypeOf(Classy, Object))
  expect(isPrototypeOf(RegExp, sub)).toBe(false)
})
test('isPrototypeOf on instance', () => {
  class SuperProto {}
  class SubProto extends SuperProto {}

  ObjectDefine(SubProto.prototype, Instance, {
    enumerable: false,
    value: instance => isPrototypeOf(SubProto.prototype, instance),
  })
  var sub = new SubProto()

  expect(new RegExp() instanceof SubProto).toBe(false)
  expect(sub instanceof SubProto).toBe(true)
})

test('isPromise', () => {
  expect(isPromise(emptyPromise)).toBe(true)
  expect(isPromise(asyncFunction)).toBe(false)

  expect(isPromise({})).toBe(false)
  expect(isPromise(Object.create(null))).toBe(false)
  expect(isPromise(null)).toBe(false)
  expect(isPromise(new Set())).toBe(false)
  expect(isPromise(function() {})).toBe(false)
  expect(isPromise('')).toBe(false)
  expect(isPromise(1)).toBe(false)
  stress(isPromise)
})

test('isGenerator', () => {
  expect(isGenerator(generatorFunction)).toBe(true)

  expect(isGenerator(emptyPromise)).toBe(false)
  expect(isGenerator(asyncFunction)).toBe(false)
  expect(isGenerator({})).toBe(false)
  expect(isGenerator(Object.create(null))).toBe(false)
  expect(isGenerator(null)).toBe(false)
  expect(isGenerator(new Set())).toBe(false)
  expect(isGenerator(function() {})).toBe(false)
  expect(isGenerator('')).toBe(false)
  expect(isGenerator(1)).toBe(false)
  stress(isGenerator)
})

test('isAsync & isAsyncish', () => {
  expect(isAsync(asyncFunction)).toBe(true)
  expect(isAsync(emptyPromise)).toBe(false)

  expect(isAsync(generatorFunction)).toBe(false)
  expect(isAsync({})).toBe(false)
  expect(isAsync(Object.create(null))).toBe(false)
  expect(isAsync(null)).toBe(false)
  expect(isAsync(new Set())).toBe(false)
  expect(isAsync(function() {})).toBe(false)
  expect(isAsync('')).toBe(false)
  expect(isAsync(1)).toBe(false)

  expect(isAsyncish(asyncFunction)).toBe(true)
  expect(isAsyncish(emptyPromise)).toBe(true)

  expect(isAsyncish(generatorFunction)).toBe(false)
  expect(isAsyncish({})).toBe(false)
  expect(isAsyncish(Object.create(null))).toBe(false)
  expect(isAsyncish(null)).toBe(false)
  expect(isAsyncish(new Set())).toBe(false)
  expect(isAsyncish(function() {})).toBe(false)
  expect(isAsyncish('')).toBe(false)
  expect(isAsyncish(1)).toBe(false)
  stress(isAsync)
  stress(isAsyncish)
})
