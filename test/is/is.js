const test = require('ava')
const {isMap, isSet, isFunction} = require('./')

test('should work for Map', t => {
  var map = new Map()
  t.true(isMap(map))
  t.true(isFunction(map.set))
  t.true(isFunction(map.get))

  t.false(isMap({}))
  t.false(isFunction(map.add))
})

test('should work for Set', t => {
  var set = new Set()
  t.true(isSet(set))
  t.true(isFunction(set.add))

  t.false(isSet({}))
  t.false(isFunction(set.set))
  t.false(isFunction(set.get))
})
