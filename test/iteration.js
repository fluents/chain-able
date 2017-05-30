const test = require('ava')
const ChainedMap = require('../dist/ChainedMap')
const ChainedSet = require('../dist/ChainedSet')

test('can iterate set', t => {
  t.plan(3)
  const set = new ChainedSet()
  set.add('eh')

  for (const arr of set) {
    const [key, val] = arr
    t.true(arr.length === 2)
    t.true(key === 0)
    t.true(val === 'eh')
  }
})

test('can iterate map', t => {
  t.plan(6)
  const map = new ChainedMap().set('eh', 'eh!').set('eh2', 'eh2!')

  for (const arr of map) {
    const [key, val] = arr
    t.true(arr.length === 2)
    t.true(key.includes('eh'))
    t.true(val.includes('eh'))
  }
})
