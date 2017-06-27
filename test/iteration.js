const ChainedMap = require('../src/ChainedMap')
const ChainedSet = require('../src/ChainedSet')

test('can iterate set', () => {
  expect.assertions(3)
  const set = new ChainedSet()
  set.add('eh')

  for (const arr of set) {
    const [key, val] = arr
    expect(arr.length === 2).toBe(true)
    expect(key === 0).toBe(true)
    expect(val === 'eh').toBe(true)
  }
})

test('can iterate map', () => {
  expect.assertions(6)
  const map = new ChainedMap().set('eh', 'eh!').set('eh2', 'eh2!')

  for (const arr of map) {
    const [key, val] = arr
    expect(arr.length === 2).toBe(true)
    expect(key.includes('eh')).toBe(true)
    expect(val.includes('eh')).toBe(true)
  }
})
