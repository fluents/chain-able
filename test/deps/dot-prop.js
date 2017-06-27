const m = require('../../src/deps/dot')
const paths = require('../../src/deps/dot/paths')

test('get', () => {
  const f1 = {foo: {bar: 1}}
  expect(m.get(f1)).toBe(f1)
  f1[''] = 'foo'
  expect(m.get(f1, '')).toBe('foo')
  expect(m.get(f1, 'foo')).toBe(f1.foo)
  expect(m.get({foo: 1}, 'foo')).toBe(1)
  expect(m.get({foo: null}, 'foo')).toBe(null)
  expect(m.get({foo: undefined}, 'foo')).toBe(undefined)
  expect(m.get({foo: {bar: true}}, 'foo.bar')).toBe(true)
  expect(m.get({foo: {bar: {baz: true}}}, 'foo.bar.baz')).toBe(true)
  expect(m.get({foo: {bar: {baz: null}}}, 'foo.bar.baz')).toBe(null)
  expect(m.get({foo: {bar: 'a'}}, 'foo.fake')).toBe(undefined)
  expect(m.get({foo: {bar: 'a'}}, 'foo.fake.fake2')).toBe(undefined)
  expect(m.get({foo: {bar: 'a'}}, 'foo.fake.fake2', 'some value')).toBe(
    'some value'
  )
  expect(m.get({'\\': true}, '\\')).toBe(true)
  expect(m.get({'\\foo': true}, '\\foo')).toBe(true)
  expect(m.get({'bar\\': true}, 'bar\\')).toBe(true)
  expect(m.get({'foo\\bar': true}, 'foo\\bar')).toBe(true)
  expect(m.get({'\\.foo': true}, '\\\\.foo')).toBe(true)
  expect(m.get({'bar\\.': true}, 'bar\\\\.')).toBe(true)
  expect(m.get({'foo\\.bar': true}, 'foo\\\\.bar')).toBe(true)
  expect(m.get({foo: 1}, 'foo.bar')).toBe(undefined)

  const f2 = {}
  Object.defineProperty(f2, 'foo', {
    value: 'bar',
    enumerable: false,
  })
  expect(m.get(f2, 'foo')).toBe(undefined)
  expect(m.get({}, 'hasOwnProperty')).toBe(undefined)

  function fn() {}
  fn.foo = {bar: 1}
  expect(m.get(fn)).toBe(fn)
  expect(m.get(fn, 'foo')).toBe(fn.foo)
  expect(m.get(fn, 'foo.bar')).toBe(1)
  fn() // empty note

  const f3 = {foo: null}
  expect(m.get(f3, 'foo.bar')).toBe(undefined)
  expect(m.get(f3, 'foo.bar', 'some value')).toBe('some value')

  expect(m.get({'foo.baz': {bar: true}}, 'foo\\.baz.bar')).toBe(true)
  expect(m.get({'fo.ob.az': {bar: true}}, 'fo\\.ob\\.az.bar')).toBe(true)

  expect(m.get(null, 'foo.bar', false)).toBe(false)
  expect(m.get('foo', 'foo.bar', false)).toBe(false)
  expect(m.get([], 'foo.bar', false)).toBe(false)
  expect(m.get(undefined, 'foo.bar', false)).toBe(false)
})

test('set', () => {
  const func = () => 'test'
  let f1 = {}
  func() // empty note

  m.set(f1, 'foo', 2)
  expect(f1.foo).toBe(2)

  f1 = {foo: {bar: 1}}
  m.set(f1, 'foo.bar', 2)
  expect(f1.foo.bar).toBe(2)

  m.set(f1, 'foo.bar.baz', 3)
  expect(f1.foo.bar.baz).toBe(3)

  m.set(f1, 'foo.bar', 'test')
  expect(f1.foo.bar).toBe('test')

  m.set(f1, 'foo.bar', null)
  expect(f1.foo.bar).toBe(null)

  m.set(f1, 'foo.bar', false)
  expect(f1.foo.bar).toBe(false)

  m.set(f1, 'foo.bar', undefined)
  expect(f1.foo.bar).toBe(undefined)

  m.set(f1, 'foo.fake.fake2', 'fake')
  expect(f1.foo.fake.fake2).toBe('fake')

  m.set(f1, 'foo.function', func)
  expect(f1.foo.function).toBe(func)

  function fn() {}
  m.set(fn, 'foo.bar', 1)
  expect(fn.foo.bar).toBe(1)
  fn() // empty note

  f1.fn = fn
  m.set(f1, 'fn.bar.baz', 2)
  expect(f1.fn.bar.baz).toBe(2)

  const f2 = {foo: null}
  m.set(f2, 'foo.bar', 2)
  expect(f2.foo.bar).toBe(2)

  const f3 = {}
  m.set(f3, '', 3)
  expect(f3['']).toBe(3)

  m.set(f1, 'foo\\.bar.baz', true)
  expect(f1['foo.bar'].baz).toBe(true)

  m.set(f1, 'fo\\.ob\\.ar.baz', true)
  expect(f1['fo.ob.ar'].baz).toBe(true)
})

test('delete', () => {
  const func = () => 'test'
  func.foo = 'bar'

  const inner = {
    a: 'a',
    b: 'b',
    c: 'c',
    func,
  }
  const f1 = {
    foo: {
      bar: {
        baz: inner,
      },
    },
    top: {
      dog: 'sindre',
    },
  }

  expect(f1.foo.bar.baz.c).toBe('c')
  m.delete(f1, 'foo.bar.baz.c')
  expect(f1.foo.bar.baz.c).toBe(undefined)

  expect(f1.top.dog).toBe('sindre')
  m.delete(f1, 'top')
  expect(f1.top).toBe(undefined)

  expect(f1.foo.bar.baz.func.foo).toBe('bar')
  m.delete(f1, 'foo.bar.baz.func.foo')
  expect(f1.foo.bar.baz.func.foo).toBe(undefined)

  expect(f1.foo.bar.baz.func).toBe(func)
  m.delete(f1, 'foo.bar.baz.func')
  expect(f1.foo.bar.baz.func).toBe(undefined)

  m.set(f1, 'foo\\.bar.baz', true)
  expect(f1['foo.bar'].baz).toBe(true)
  m.delete(f1, 'foo\\.bar.baz')
  expect(f1['foo.bar'].baz).toBe(undefined)

  const f2 = {}
  m.set(f2, 'foo.bar\\.baz', true)
  expect(f2.foo['bar.baz']).toBe(true)
  m.delete(f2, 'foo.bar\\.baz')
  expect(f2.foo['bar.baz']).toBe(undefined)

  f2.dotted = {
    sub: {
      'dotted.prop': 'foo',
      'other': 'prop',
    },
  }
  m.delete(f2, 'dotted.sub.dotted\\.prop')
  expect(f2.dotted.sub['dotted.prop']).toBe(undefined)
  expect(f2.dotted.sub.other).toBe('prop')

  const f3 = {foo: null}
  m.delete(f3, 'foo.bar')
  expect(f3).toEqual({foo: null})
})

test('has', () => {
  const f1 = {foo: {bar: 1}}
  expect(m.has(f1)).toBe(false)
  expect(m.has(f1, 'foo')).toBe(true)
  expect(m.has({foo: 1}, 'foo')).toBe(true)
  expect(m.has({foo: null}, 'foo')).toBe(true)
  expect(m.has({foo: undefined}, 'foo')).toBe(true)
  expect(m.has({foo: {bar: true}}, 'foo.bar')).toBe(true)
  expect(m.has({foo: {bar: {baz: true}}}, 'foo.bar.baz')).toBe(true)
  expect(m.has({foo: {bar: {baz: null}}}, 'foo.bar.baz')).toBe(true)
  expect(m.has({foo: {bar: 'a'}}, 'foo.fake.fake2')).toBe(false)
  expect(m.has({foo: null}, 'foo.bar')).toBe(false)
  expect(m.has({foo: ''}, 'foo.bar')).toBe(false)

  function fn() {}
  fn.foo = {bar: 1}
  expect(m.has(fn)).toBe(false)
  expect(m.has(fn, 'foo')).toBe(true)
  expect(m.has(fn, 'foo.bar')).toBe(true)
  fn() // empty note

  expect(m.has({'foo.baz': {bar: true}}, 'foo\\.baz.bar')).toBe(true)
  expect(m.has({'fo.ob.az': {bar: true}}, 'fo\\.ob\\.az.bar')).toBe(true)
})

test('paths', () => {
  const arr = paths({level: {one: true}})

  // triggers cache
  const cached = paths({level: {one: true}})

  expect(arr).toEqual(cached)

  // triggers unique paths
  const includes = paths({level: {one: true}, canada: {arr: [0, 1, 2]}})
  expect(Array.isArray(includes)).toBe(true)
})
