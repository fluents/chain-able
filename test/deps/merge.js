const test = require('ava')
const merge = require('../../dist/deps/dopemerge')
// const merge = require('deepmerge')

test.skip('custom merge array', t => {
  var mergeFunctionCalled = false
  function concatMerge(target, source, options) {
    t.falsy(mergeFunctionCalled)
    mergeFunctionCalled = true

    t.deepEqual(target, [1, 2])
    t.deepEqual(source, [1, 2, 3])
    t.truthy(options.arrayMerge == concatMerge)

    return target.concat(source)
  }
  const destination = {
    someArray: [1, 2],
    someObject: {what: 'yes'},
  }
  const source = {
    someArray: [1, 2, 3],
  }

  const actual = merge(destination, source, {arrayMerge: concatMerge})
  const expected = {
    someArray: [1, 2, 1, 2, 3],
    someObject: {what: 'yes'},
  }

  t.truthy(mergeFunctionCalled)
  t.deepEqual(actual, expected)
  t.pass()
})

test.skip('custom: merge top-level arrays', t => {
  function concatMerge(a, b) {
    return a.concat(b)
  }
  var actual = merge([1, 2], [1, 2], {arrayMerge: concatMerge})
  // var expected = [1, 2, 1, 2] @NOTE
  var expected = [1, 2, 1, 2]

  t.deepEqual(actual, expected)
  t.pass()
})

// -------------------

test('add keys in target that do not exist at the root', t => {
  var src = {key1: 'value1', key2: 'value2'}
  var target = {}

  var res = merge(target, src)

  t.deepEqual(target, {}, 'merge should be immutable')
  t.deepEqual(res, src)
  t.pass()
})

test('merge existing simple keys in target at the roots', t => {
  var src = {key1: 'changed', key2: 'value2'}
  var target = {key1: 'value1', key3: 'value3'}

  var expected = {
    key1: 'changed',
    key2: 'value2',
    key3: 'value3',
  }

  t.deepEqual(target, {key1: 'value1', key3: 'value3'})
  t.deepEqual(merge(target, src), expected)
  t.pass()
})

test('merge nested objects into target', t => {
  var src = {
    key1: {
      subkey1: 'changed',
      subkey3: 'added',
    },
  }
  var target = {
    key1: {
      subkey1: 'value1',
      subkey2: 'value2',
    },
  }

  var expected = {
    key1: {
      subkey1: 'changed',
      subkey2: 'value2',
      subkey3: 'added',
    },
  }

  t.deepEqual(target, {
    key1: {
      subkey1: 'value1',
      subkey2: 'value2',
    },
  })
  t.deepEqual(merge(target, src), expected)
  t.pass()
})

test('replace simple key with nested object in target', t => {
  var src = {
    key1: {
      subkey1: 'subvalue1',
      subkey2: 'subvalue2',
    },
  }
  var target = {
    key1: 'value1',
    key2: 'value2',
  }

  var expected = {
    key1: {
      subkey1: 'subvalue1',
      subkey2: 'subvalue2',
    },
    key2: 'value2',
  }

  t.deepEqual(target, {key1: 'value1', key2: 'value2'})
  t.deepEqual(merge(target, src), expected)
  t.pass()
})

test('should add nested object in target', t => {
  var src = {
    b: {
      c: {},
    },
  }

  var target = {
    a: {},
  }

  var expected = {
    a: {},
    b: {
      c: {},
    },
  }

  t.deepEqual(merge(target, src), expected)
  t.pass()
})

test.skip('should clone source and target', t => {
  var src = {
    b: {
      c: 'foo',
    },
  }

  var target = {
    a: {
      d: 'bar',
    },
  }

  var expected = {
    a: {
      d: 'bar',
    },
    b: {
      c: 'foo',
    },
  }

  var merged = merge(target, src, {clone: true})

  t.deepEqual(merged, expected)

  t.not(merged.a, target.a)
  t.not(merged.b, src.b)

  t.pass()
})

test('should not clone source and target', t => {
  var src = {
    b: {
      c: 'foo',
    },
  }

  var target = {
    a: {
      d: 'bar',
    },
  }

  var expected = {
    a: {
      d: 'bar',
    },
    b: {
      c: 'foo',
    },
  }

  var merged = merge(target, src)
  t.truthy(merged.a == target.a)
  t.truthy(merged.b == src.b)

  t.pass()
})

test('should replace object with simple key in target', t => {
  var src = {key1: 'value1'}
  var target = {
    key1: {
      subkey1: 'subvalue1',
      subkey2: 'subvalue2',
    },
    key2: 'value2',
  }

  var expected = {key1: 'value1', key2: 'value2'}

  t.deepEqual(target, {
    key1: {
      subkey1: 'subvalue1',
      subkey2: 'subvalue2',
    },
    key2: 'value2',
  })
  t.deepEqual(merge(target, src), expected)
  t.pass()
})

test('should replace objects with arrays', t => {
  var target = [{key1: {subkey: 'one'}}]

  var src = [{key1: ['subkey']}]

  var expected = [{key1: ['subkey']}]

  t.deepEqual(merge(target, src), expected)
  t.pass()
})

test('should replace dates with arrays', t => {
  var target = [{key1: new Date()}]

  var src = [{key1: ['subkey']}]

  var expected = [{key1: ['subkey']}]

  t.deepEqual(merge(target, src), expected)
  t.pass()
})

test('should replace null with arrays', t => {
  var target = {
    key1: null,
  }

  var src = {
    key1: ['subkey'],
  }

  var expected = {
    key1: ['subkey'],
  }

  t.deepEqual(merge(target, src), expected)
  t.pass()
})

test('should work on simple array', t => {
  var src = ['one', 'three']
  var target = ['one', 'two']

  var expected = ['one', 'two', 'three']

  t.deepEqual(target, ['one', 'two'])
  t.deepEqual(merge(target, src), expected)
  t.truthy(Array.isArray(merge(target, src)))
  t.pass()
})

test('should work on another simple array', t => {
  var target = ['a1', 'a2', 'c1', 'f1', 'p1']
  var src = ['t1', 's1', 'c2', 'r1', 'p2', 'p3']

  var expected = [
    'a1',
    'a2',
    'c1',
    'f1',
    'p1',
    't1',
    's1',
    'c2',
    'r1',
    'p2',
    'p3',
  ]
  t.deepEqual(target, ['a1', 'a2', 'c1', 'f1', 'p1'])
  t.deepEqual(merge(target, src), expected)
  t.truthy(Array.isArray(merge(target, src)))
  t.pass()
})

test('should work on array properties', t => {
  var src = {
    key1: ['one', 'three'],
    key2: ['four'],
  }
  var target = {
    key1: ['one', 'two'],
  }

  var expected = {
    key1: ['one', 'two', 'three'],
    key2: ['four'],
  }

  t.deepEqual(target, {
    key1: ['one', 'two'],
  })

  t.deepEqual(merge(target, src), expected)
  t.truthy(Array.isArray(merge(target, src).key1))
  t.truthy(Array.isArray(merge(target, src).key2))
  t.pass()
})

test.skip('should work on array properties with clone option', t => {
  var src = {
    key1: ['one', 'three'],
    key2: ['four'],
  }
  var target = {
    key1: ['one', 'two'],
  }

  var expected = {
    key1: ['one', 'two', 'three'],
    key2: ['four'],
  }

  t.deepEqual(target, {
    key1: ['one', 'two'],
  })
  var merged = merge(target, src, {clone: true})
  t.not(merged.key1, src.key1)
  t.not(merged.key1, target.key1)
  t.not(merged.key2, src.key2)
  t.pass()
})

test('should work on array of objects', t => {
  var src = [{key1: ['one', 'three'], key2: ['one']}, {key3: ['five']}]
  var target = [{key1: ['one', 'two']}, {key3: ['four']}]

  var expected = [
    {key1: ['one', 'two', 'three'], key2: ['one']},
    {key3: ['four', 'five']},
  ]

  t.deepEqual(target, [{key1: ['one', 'two']}, {key3: ['four']}])
  t.deepEqual(merge(target, src), expected)
  t.truthy(Array.isArray(merge(target, src)), 'result should be an array')
  t.truthy(
    Array.isArray(merge(target, src)[0].key1),
    'subkey should be an array too'
  )

  t.pass()
})

test.skip('should work on array of objects with clone option', t => {
  var src = [{key1: ['one', 'three'], key2: ['one']}, {key3: ['five']}]
  var target = [{key1: ['one', 'two']}, {key3: ['four']}]

  var expected = [
    {key1: ['one', 'two', 'three'], key2: ['one']},
    {key3: ['four', 'five']},
  ]

  t.deepEqual(target, [{key1: ['one', 'two']}, {key3: ['four']}])
  var merged = merge(target, src, {clone: true})
  t.deepEqual(merged, expected)
  t.truthy(Array.isArray(merge(target, src)), 'result should be an array')
  t.truthy(
    Array.isArray(merge(target, src)[0].key1),
    'subkey should be an array too'
  )
  t.not(merged[0].key1, src[0].key1)
  t.not(merged[0].key1, target[0].key1)
  t.not(merged[0].key2, src[0].key2)
  t.not(merged[1].key3, src[1].key3)
  t.not(merged[1].key3, target[1].key3)
  t.pass()
})

test('should work on arrays of nested objects', t => {
  var target = [{key1: {subkey: 'one'}}]

  var src = [{key1: {subkey: 'two'}}, {key2: {subkey: 'three'}}]

  var expected = [{key1: {subkey: 'two'}}, {key2: {subkey: 'three'}}]

  t.deepEqual(merge(target, src), expected)
  t.pass()
})

test('should treat regular expressions like primitive values', t => {
  var target = {key1: /abc/}
  var src = {key1: /efg/}
  var expected = {key1: /efg/}

  t.deepEqual(merge(target, src), expected)
  t.deepEqual(merge(target, src).key1.test('efg'), true)
  t.pass()
})

test(`should treat regular expressions like primitive values and should not
  clone even with clone option`, t => {
  var target = {key1: /abc/}
  var src = {key1: /efg/}
  var expected = {key1: /efg/}

  var output = merge(target, src, {clone: true})

  t.truthy(output.key1 == src.key1)
  t.pass()
})

test('should treat dates like primitives', t => {
  var monday = new Date('2016-09-27T01:08:12.761Z')
  var tuesday = new Date('2016-09-28T01:18:12.761Z')

  var target = {
    key: monday,
  }
  var source = {
    key: tuesday,
  }

  var expected = {
    key: tuesday,
  }
  var actual = merge(target, source)

  t.deepEqual(actual, expected)
  t.truthy(actual.key.valueOf() == tuesday.valueOf())
  t.pass()
})

test(`should treat dates like primitives and should not clone even with clone option`, t => {
  var monday = new Date('2016-09-27T01:08:12.761Z')
  var tuesday = new Date('2016-09-28T01:18:12.761Z')

  var target = {
    key: monday,
  }
  var source = {
    key: tuesday,
  }

  var expected = {
    key: tuesday,
  }
  var actual = merge(target, source, {clone: true})

  t.truthy(actual.key == tuesday)
  t.pass()
})

test('should work on array with null in it', t => {
  var target = []

  var src = [null]

  var expected = [null]

  t.deepEqual(merge(target, src), expected)
  t.pass()
})

test.skip('should clone array\'s element if it is object', t => {
  var a = {key: 'yup'}
  var target = []
  var source = [a]
  var expected = [{key: 'yup'}]

  var output = merge(target, source, {clone: true})

  t.not(output[0], a)
  t.truthy(output[0].key == 'yup')
  t.pass()
})

test.skip('should clone an array property when there is no target array', t => {
  const someObject = {}
  var target = {}
  var source = {ary: [someObject]}
  var output = merge(target, source, {clone: true})

  t.deepEqual(output, {ary: [{}]})
  t.not(output.ary[0], someObject)
  t.pass()
})

test('should overwrite values when property is initialised but undefined', t => {
  var target1 = {value: []}
  var target2 = {value: null}
  var target3 = {value: 2}

  var src = {value: undefined}

  var expected = {value: undefined}

  function hasUndefinedProperty(o) {
    t.truthy(o.hasOwnProperty('value'))
    t.true(typeof o.value === 'undefined')
  }

  hasUndefinedProperty(merge(target1, src))
  hasUndefinedProperty(merge(target2, src))
  hasUndefinedProperty(merge(target3, src))

  t.pass()
})

test('null should be equal to null in an array', t => {
  var target = [null, 'dude']
  var source = [null, 'lol']

  var expected = [null, 'dude', 'lol']
  var actual = merge(target, source)

  t.deepEqual(actual, expected)
  t.pass()
})

test('dates in an array should be compared correctly', t => {
  var monday = new Date('2016-09-27T01:08:12.761Z')

  var target = [monday, 'dude']
  var source = [monday, 'lol']

  var expected = [monday, 'dude', 'lol']
  var actual = merge(target, source)

  t.deepEqual(actual, expected)
  t.pass()
})

test('dates should copy correctly in an array', t => {
  var monday = new Date('2016-09-27T01:08:12.761Z')
  var tuesday = new Date('2016-09-28T01:18:12.761Z')

  var target = [monday, 'dude']
  var source = [tuesday, 'lol']

  var expected = [monday, 'dude', tuesday, 'lol']
  var actual = merge(target, source)

  t.deepEqual(actual, expected)
  t.pass()
})
