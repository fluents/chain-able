const test = require('ava')
const ChainedMap = require('../dist/ChainedMap')

// child
test.todo('can use factory')
test.todo('can get each .current')

// merge
test.todo('dopemerge')

test('tap', t => {
  const tapped = new ChainedMap().set('eh', 'eh').tap('eh', val => val + '!')
  t.true(tapped.get('eh') === 'eh!')
})

test('tap replacing .concat and .append', t => {
  const {str, arr} = new ChainedMap()
    .set('str', 'emptyish')
    .tap('str', str => str + '+')
    .set('arr', [1])
    .tap('arr', arr => arr.concat([2]))
    .entries()

  t.deepEqual(str, 'emptyish+')
  t.deepEqual(arr, [1, 2])
})
