const log = require('fliplog')
const merge = require('../../src/deps/dopemerge')
// const merge = require('deepmerge')

test('custom merge array', () => {
  var mergeFunctionCalled = false
  function concatMerge(target, source, options) {
    expect(mergeFunctionCalled).toBeFalsy()
    mergeFunctionCalled = true

    expect(target).toEqual([1, 2])
    expect(source).toEqual([1, 2, 3])
    expect(options.arrayMerge == concatMerge).toBeTruthy()

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

  expect(mergeFunctionCalled).toBeTruthy()
  expect(actual).toEqual(expected)
})

test('custom: merge top-level arrays', () => {
  function concatMerge(a, b) {
    return a.concat(b)
  }
  var actual = merge([1, 2], [1, 2], {arrayMerge: concatMerge})
  // var expected = [1, 2, 1, 2] @NOTE
  var expected = [1, 2, 1, 2]

  expect(actual).toEqual(expected)
})

// -------------------

test('add keys in target that do not exist at the root', () => {
  var src = {key1: 'value1', key2: 'value2'}
  var target = {}

  var res = merge(target, src)

  expect(target).toEqual({})
  expect(res).toEqual(src)
})

test('merge existing simple keys in target at the roots', () => {
  var src = {key1: 'changed', key2: 'value2'}
  var target = {key1: 'value1', key3: 'value3'}

  var expected = {
    key1: 'changed',
    key2: 'value2',
    key3: 'value3',
  }

  expect(target).toEqual({key1: 'value1', key3: 'value3'})
  expect(merge(target, src)).toEqual(expected)
})

test('merge nested objects into target', () => {
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

  expect(target).toEqual({
    key1: {
      subkey1: 'value1',
      subkey2: 'value2',
    },
  })
  expect(merge(target, src)).toEqual(expected)
})

test('replace simple key with nested object in target', () => {
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

  expect(target).toEqual({key1: 'value1', key2: 'value2'})
  expect(merge(target, src)).toEqual(expected)
})

test('should add nested object in target', () => {
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

  expect(merge(target, src)).toEqual(expected)
})

test('should clone source and target', () => {
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

  expect(merged).toEqual(expected)

  expect(merged.a === target.a).toBe(false)
  expect(merged.b === src.b).toBe(false)
})

test('should not clone source and target', () => {
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
  expect(merged.a == target.a).toBeTruthy()
  expect(merged.b == src.b).toBeTruthy()
})

test('should replace object with simple key in target', () => {
  var src = {key1: 'value1'}
  var target = {
    key1: {
      subkey1: 'subvalue1',
      subkey2: 'subvalue2',
    },
    key2: 'value2',
  }

  var expected = {key1: 'value1', key2: 'value2'}

  expect(target).toEqual({
    key1: {
      subkey1: 'subvalue1',
      subkey2: 'subvalue2',
    },
    key2: 'value2',
  })
  expect(merge(target, src)).toEqual(expected)
})

test('should replace objects with arrays', () => {
  var target = [{key1: {subkey: 'one'}}]

  var src = [{key1: ['subkey']}]

  var expected = [{key1: ['subkey']}]

  expect(merge(target, src)).toEqual(expected)
})

test('should replace dates with arrays', () => {
  var target = [{key1: new Date()}]

  var src = [{key1: ['subkey']}]

  var expected = [{key1: ['subkey']}]

  expect(merge(target, src)).toEqual(expected)
})

test('should replace null with arrays', () => {
  var target = {
    key1: null,
  }

  var src = {
    key1: ['subkey'],
  }

  var expected = {
    key1: ['subkey'],
  }

  expect(merge(target, src)).toEqual(expected)
})

test('should work on simple array', () => {
  var src = ['one', 'three']
  var target = ['one', 'two']

  var expected = ['one', 'two', 'three']

  expect(target).toEqual(['one', 'two'])
  expect(merge(target, src)).toEqual(expected)
  expect(Array.isArray(merge(target, src))).toBeTruthy()
})

test('should work on another simple array', () => {
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
  expect(target).toEqual(['a1', 'a2', 'c1', 'f1', 'p1'])
  expect(merge(target, src)).toEqual(expected)
  expect(Array.isArray(merge(target, src))).toBeTruthy()
})

test('should work on array properties', () => {
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

  expect(target).toEqual({
    key1: ['one', 'two'],
  })

  expect(merge(target, src)).toEqual(expected)
  expect(Array.isArray(merge(target, src).key1)).toBeTruthy()
  expect(Array.isArray(merge(target, src).key2)).toBeTruthy()
})

test('should work on array properties with clone option', () => {
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

  expect(target).toEqual({
    key1: ['one', 'two'],
  })
  var merged = merge(target, src, {clone: true})
  expect(merged.key1).not.toBe(src.key1)
  expect(merged.key1).not.toBe(target.key1)
  expect(merged.key2).not.toBe(src.key2)
})

test('should work on array of objects', () => {
  var src = [{key1: ['one', 'three'], key2: ['one']}, {key3: ['five']}]
  var target = [{key1: ['one', 'two']}, {key3: ['four']}]

  var expected = [
    {key1: ['one', 'two', 'three'], key2: ['one']},
    {key3: ['four', 'five']},
  ]

  expect(target).toEqual([{key1: ['one', 'two']}, {key3: ['four']}])
  expect(merge(target, src)).toEqual(expected)
  expect(Array.isArray(merge(target, src))).toBeTruthy()
  expect(Array.isArray(merge(target, src)[0].key1)).toBeTruthy()
})

test('should work on array of objects with clone option', () => {
  var src = [{key1: ['one', 'three'], key2: ['one']}, {key3: ['five']}]
  var target = [{key1: ['one', 'two']}, {key3: ['four']}]

  var expected = [
    {key1: ['one', 'two', 'three'], key2: ['one']},
    {key3: ['four', 'five']},
  ]

  expect(target).toEqual([{key1: ['one', 'two']}, {key3: ['four']}])
  var merged = merge(target, src, {clone: true})
  expect(merged).toEqual(expected)
  expect(Array.isArray(merge(target, src))).toBeTruthy()
  expect(Array.isArray(merge(target, src)[0].key1)).toBeTruthy()
  expect(merged[0].key1).not.toBe(src[0].key1)
  expect(merged[0].key1).not.toBe(target[0].key1)
  expect(merged[0].key2).not.toBe(src[0].key2)
  expect(merged[1].key3).not.toBe(src[1].key3)
  expect(merged[1].key3).not.toBe(target[1].key3)
})

test('should work on arrays of nested objects', () => {
  var target = [{key1: {subkey: 'one'}}]

  var src = [{key1: {subkey: 'two'}}, {key2: {subkey: 'three'}}]

  var expected = [{key1: {subkey: 'two'}}, {key2: {subkey: 'three'}}]

  expect(merge(target, src)).toEqual(expected)
})

test('should treat regular expressions like primitive values', () => {
  var target = {key1: /abc/}
  var src = {key1: /efg/}
  var expected = {key1: /efg/}

  expect(merge(target, src)).toEqual(expected)
  expect(merge(target, src).key1.test('efg')).toEqual(true)
})

test(`should treat regular expressions like primitive values and should not
  clone even with clone option`, () => {
  var target = {key1: /abc/}
  var src = {key1: /efg/}
  var expected = {key1: /efg/}

  var output = merge(target, src, {clone: true})

  expect(output.key1 == src.key1).toBeTruthy()
})

test('should treat dates like primitives', () => {
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

  expect(actual).toEqual(expected)
  expect(actual.key.valueOf() == tuesday.valueOf()).toBeTruthy()
})

test(`should treat dates like primitives and should not clone even with clone option`, () => {
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

  expect(actual.key == tuesday).toBeTruthy()
})

test('should work on array with null in it', () => {
  var target = []

  var src = [null]

  var expected = [null]

  expect(merge(target, src)).toEqual(expected)
})

test('should clone array\'s element if it is object', () => {
  var a = {key: 'yup'}
  var target = []
  var source = [a]
  var expected = [{key: 'yup'}]

  var output = merge(target, source, {clone: true})

  expect(output[0]).not.toBe(a)
  expect(output[0].key == 'yup').toBeTruthy()
})

test('should clone an array property when there is no target array', () => {
  const someObject = {}
  var target = {}
  var source = {ary: [someObject]}
  var output = merge(target, source, {clone: true})

  expect(output).toEqual({ary: [{}]})
  expect(output.ary[0]).not.toBe(someObject)
})

test('should overwrite values when property is initialised but undefined', () => {
  var target1 = {value: []}
  var target2 = {value: null}
  var target3 = {value: 2}

  var src = {value: undefined}

  var expected = {value: undefined}

  function hasUndefinedProperty(o) {
    expect(o.hasOwnProperty('value')).toBeTruthy()
    expect(typeof o.value === 'undefined').toBe(true)
  }

  hasUndefinedProperty(merge(target1, src))
  hasUndefinedProperty(merge(target2, src))
  hasUndefinedProperty(merge(target3, src))
})

test('null should be equal to null in an array', () => {
  var target = [null, 'dude']
  var source = [null, 'lol']

  var expected = [null, 'dude', 'lol']
  var actual = merge(target, source)

  expect(actual).toEqual(expected)
})

test('dates in an array should be compared correctly', () => {
  var monday = new Date('2016-09-27T01:08:12.761Z')

  var target = [monday, 'dude']
  var source = [monday, 'lol']

  var expected = [monday, 'dude', 'lol']
  var actual = merge(target, source)

  expect(actual).toEqual(expected)
})

test('dates should copy correctly in an array', () => {
  var monday = new Date('2016-09-27T01:08:12.761Z')
  var tuesday = new Date('2016-09-28T01:18:12.761Z')

  var target = [monday, 'dude']
  var source = [tuesday, 'lol']

  var expected = [monday, 'dude', tuesday, 'lol']
  var actual = merge(target, source)

  expect(actual).toEqual(expected)
})

test('=== values are returned', () => {
  var eqeqeq = []
  var actual = merge(eqeqeq, eqeqeq)

  expect(actual).toEqual(eqeqeq)
})

test('[array, string]', () => {
  var actual = merge([], 'string')
  var expected = ['string']
  expect(actual).toEqual(expected)

  var actual2 = merge([], 'string', {clone: true})
  var expected2 = ['string']
  expect(actual2).toEqual(expected2)
})

test('[string, array]', () => {
  var actual = merge('string', [])
  var expected = ['string']

  expect(actual).toEqual(expected)
})

test('[string, string]', () => {
  var actual = merge('one', 'two', {stringToArray: false})
  expect(actual).toEqual('onetwo')

  var actualArr = merge('one', 'two', {stringToArray: true})
  expect(actualArr).toEqual(['one', 'two'])
})

test('[boolean, boolean]', () => {
  var actual = merge(true, false, {boolToArray: false})
  expect(actual).toEqual(false)

  var actualArr = merge(true, false, {boolToArray: true})
  expect(actualArr).toEqual([true, false])
})

test('[undefined, true], [null, true], [true, null], [true, undefined]', () => {
  expect(merge(undefined, true)).toEqual(true)

  expect(merge(null, true)).toEqual(true)

  expect(merge(true, undefined)).toEqual(true)

  expect(merge(true, null)).toEqual(true)
})
