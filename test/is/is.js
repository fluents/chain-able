const Instance = require('../../src/deps/symbols/instance')
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
