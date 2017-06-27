const ChainedMap = require('../src/ChainedMap')

const todo = console.log
// child
todo('can use factory')
todo('can get each .current')

// merge
todo('dopemerge')

test('tap', () => {
  const tapped = new ChainedMap().set('eh', 'eh').tap('eh', val => val + '!')
  expect(tapped.get('eh') === 'eh!').toBe(true)
})

test('tap replacing .concat and .append', () => {
  const {str, arr} = new ChainedMap()
    .set('str', 'emptyish')
    .tap('str', str => str + '+')
    .set('arr', [1])
    .tap('arr', arr => arr.concat([2]))
    .entries()

  expect(str).toEqual('emptyish+')
  expect(arr).toEqual([1, 2])
})
