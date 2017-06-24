const test = require('ava')
const Instance = require('../../dist/deps/symbols/instance')
const ObjectDefine = require('../../dist/deps/define')
const stress = require('../_stress')
const {isMap, isSet, isFunction, isObjWithKeys, isPrototypeOf} = require('./')

test('stress', t => {
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
]

const datasObjs = [
  new String('str'),
  Object.assign(anon2, {keys: true}),
  {keys: true},
  Symbol,
]

test('should work for Map', t => {
  var map = new Map()
  t.true(isMap(map))
  t.true(isFunction(map.set))
  t.true(isFunction(map.get))

  datas.map(data => t.false(isMap(data)))
  t.false(isMap(new Set()))
  t.false(isFunction(map.add))
})

test('should work for Set', t => {
  var set = new Set()
  t.true(isSet(set))
  t.true(isFunction(set.add))

  datas.map(data => t.false(isSet(data)))
  t.false(isFunction(set.set))
  t.false(isFunction(set.get))
})

test('objWithKeys', t => {
  datas.map(data => t.false(isObjWithKeys(data)))
  datasObjs.map(data => t.true(isObjWithKeys(data)))
})

// @NOTE: these tests are compiled so `isClass` is not helpful
// test.failing('isClass', t => {
//   console.log(class classy {}.toString())
//   t.true(isClass(class Classy {}))
//   t.false(isClass({}))
// })

test('isPrototypeOf', t => {
  class SuperProto {}
  class SubProto extends SuperProto {}
  var sub = new SubProto()

  // SuperProto.isPrototypeOf(sub)
  t.true(isPrototypeOf(Object.getPrototypeOf(sub), sub))
  // t.true(isPrototypeOf(Classy, Object))
  t.false(isPrototypeOf(RegExp, sub))
})
test('isPrototypeOf on instance', t => {
  class SuperProto {}
  class SubProto extends SuperProto {}

  ObjectDefine(SubProto.prototype, Instance, {
    enumerable: false,
    value: instance => isPrototypeOf(SubProto.prototype, instance),
  })
  var sub = new SubProto()

  t.false(new RegExp() instanceof SubProto)
  t.true(sub instanceof SubProto)
})
