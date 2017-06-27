const ChainedMap = require('../src/ChainedMap')
const clean = require('../src/deps/clean')

test('is Chainable', () => {
  const parent = {parent: true}
  const map = new ChainedMap(parent)

  expect(map.end()).toBe(parent)
})

test('creates a backing Map', () => {
  const map = new ChainedMap()

  expect(map.store instanceof Map).toBe(true)
})

test('set', () => {
  const map = new ChainedMap()

  expect(map.set('a', 'alpha')).toBe(map)
  expect(map.store.get('a')).toBe('alpha')
})

test('get', () => {
  const map = new ChainedMap()

  expect(map.set('a', 'alpha')).toBe(map)
  expect(map.get('a')).toBe('alpha')
})

function getMapToClear() {
  const map = new ChainedMap()
    .set('a', 'alpha')
    .set('b', 'beta')
    .set('c', 'gamma')

  map.map = new ChainedMap(map).set('clearme', 1)

  return map
}

test('.clear(false)', () => {
  const map = getMapToClear()

  expect(map.store.size).toBe(3)
  expect(map.clear(false)).toBe(map)
  expect(map.store.size).toBe(0)
  expect(map.map.length).toBe(1)
})

test('clear', () => {
  const map = getMapToClear()

  expect(map.length).toBe(3)
  expect(map.store.size).toBe(3)
  expect(map.clear()).toBe(map)
  expect(map.store.size).toBe(0)
})

test('clean', () => {
  const map = new ChainedMap()

  map.set('emptyArr', [])
  map.set('arr', [1])
  map.set('nill', null)
  map.set('emptyObj', {})
  map.set('obj', {keys: true})
  expect(clean(map.entries())).toEqual({arr: [1], obj: {keys: true}})
})

test('clear - with sub-chainable', () => {
  const map = new ChainedMap()
  map.map = new ChainedMap(map)
  map.map.set('clearme', 1)
  map.set('a', 'alpha')
  map.set('b', 'beta')
  map.set('c', 'gamma')

  expect(map.store.size).toBe(3)
  expect(map.clear()).toBe(map)
  expect(map.store.size).toBe(0)
  expect(map.map.store.size).toBe(0)
})

test('delete', () => {
  const map = new ChainedMap()

  map.set('a', 'alpha')
  map.set('b', 'beta')
  map.set('c', 'gamma')

  expect(map.delete('b')).toBe(map)
  expect(map.store.size).toBe(2)
  expect(map.store.has('b')).toBe(false)
})

test('has', () => {
  const map = new ChainedMap()

  map.set('a', 'alpha')
  map.set('b', 'beta')
  map.set('c', 'gamma')

  expect(map.has('b')).toBe(true)
  expect(map.has('d')).toBe(false)
  expect(map.has('b')).toBe(map.store.has('b'))
})

test('values', () => {
  const map = new ChainedMap()

  map.set('a', 'alpha')
  map.set('b', 'beta')
  map.set('c', 'gamma')

  expect(map.values()).toEqual(['alpha', 'beta', 'gamma'])
})

test('entries with values', () => {
  const map = new ChainedMap()

  map.set('a', 'alpha')
  map.set('b', 'beta')
  map.set('c', 'gamma')

  expect(map.entries()).toEqual({a: 'alpha', b: 'beta', c: 'gamma'})
})

test('entries with no values', () => {
  const map = new ChainedMap()

  expect(map.entries()).toEqual({})
})

test('merge with no values', () => {
  const map = new ChainedMap()
  const obj = {a: 'alpha', b: 'beta', c: 'gamma'}

  expect(map.merge(obj)).toBe(map)
  expect(map.entries()).toEqual(obj)
})

test('merge with existing values', () => {
  const map = new ChainedMap()
  const obj = {a: 'alpha', b: 'beta', c: 'gamma'}

  map.set('d', 'delta')

  expect(map.merge(obj)).toBe(map)
  expect(map.entries()).toEqual({a: 'alpha', b: 'beta', c: 'gamma', d: 'delta'})
})

test('merge with overriding values', () => {
  const map = new ChainedMap()
  const obj = {a: 'alpha', b: 'beta', c: 'gamma'}

  map.set('b', 'delta')

  expect(map.merge(obj)).toBe(map)
  expect(map.entries()).toEqual({a: 'alpha', b: 'beta', c: 'gamma'})
})

test('when(has)', () => {
  expect.assertions(6)
  const map = new ChainedMap()
  map.set('truth', true).set('lies', false)
  const right = instance => {
    expect(instance).toBe(map)
    instance.set('alpha', 'a')
  }
  const left = instance => {
    instance.set('beta', 'b')
  }

  expect(map.when('truth', right, left)).toBe(map)
  expect(map.has('alpha')).toBe(true)
  expect(map.has('beta')).toBe(false)

  expect(map.when('lies', right, left)).toBe(map)
  expect(map.has('beta')).toBe(false)
})

test('when true', () => {
  const map = new ChainedMap()
  const right = instance => {
    expect(instance).toBe(map)
    instance.set('alpha', 'a')
  }
  const left = instance => {
    instance.set('beta', 'b')
  }

  expect(map.when(true, right, left)).toBe(map)
  expect(map.has('alpha')).toBe(true)
  expect(map.has('beta')).toBe(false)
})

test('when false', () => {
  const map = new ChainedMap()
  const right = instance => {
    instance.set('alpha', 'a')
  }
  const left = instance => {
    expect(instance).toBe(map)
    instance.set('beta', 'b')
  }

  expect(map.when(false, right, left)).toBe(map)
  expect(map.has('alpha')).toBe(false)
  expect(map.has('beta')).toBe(true)
})
