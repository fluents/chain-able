const remove = require('../../src/deps/fp/remove')
const stress = require('../_stress')

test('can remove obj and arr', function() {
  expect(typeof remove).toBe('function')

  const arr = [0, 1, 2]
  remove(arr, 0)
  expect(arr.length).toBe(2)
  expect(arr).toEqual([1, 2])

  const obj = {0: 0, 1: 1, 2: 2}
  remove(obj, 0)
  expect(Object.keys(obj).length).toBe(2)
  expect(Object.values(obj)).toEqual([1, 2])


  //  and handles stress
  // cannot handle this yet, because of `Array`
  // stress(obj =>
  //   stress(key =>
  //     remove(obj, key)
  //   )
  // )
})
