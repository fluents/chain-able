const test = require('ava')
const stress = require('../_stress')
const {isMap, isSet, isFunction, isObjWithKeys} = require('./')

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
