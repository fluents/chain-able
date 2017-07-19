const log = require('fliplog')
const isFunction = require('../../src/deps/is/function')
const findLast = require('../../src/deps/fp/last')
const findLastIndex = require('../../src/deps/fp/lastIndex')
const findFirst = require('../../src/deps/fp/first')

test('can find last & last index in array', () => {
  expect(isFunction(findLast)).toBe(true)
  expect(isFunction(findLastIndex)).toBe(true)

  const array = [0, 1, 2, 3]
  const index = findLastIndex(array)
  const last = findLast(array)

  expect(array[index]).toEqual(last)
  expect(index).toBe(3)
})

test('can find last & last index in object', () => {
  const obj = {0: 0, 1: 1, 2: 2, 3: 3}
  const index = findLastIndex(obj)
  const last = findLast(obj)

  expect(obj[index]).toEqual(last)
  expect(index).toBe('3')
})

test('can find first', () => {
  const array = [0, 1, 2, 3]
  const first = findFirst(array)
  expect(first).toEqual(0)
})
