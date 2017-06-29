const log = require('fliplog')
const stress = require('./_stress')
const {MergeChain, Chain, ChainedSet} = require('../src')

test('instantiate', () => {
  expect.assertions(1)
  expect(new MergeChain() instanceof MergeChain).toBe(true)
})

function getChain(useMerge = false) {
  class Mergeable extends Chain {
    merge(obj) {
      return super.merge(obj, useMerge)
    }
  }
  const chain = new Chain()
  chain.extend(['shorthanded', 'str', 'obj', 'emptyArr', 'emptyObj'])
  chain.set('str', 'stringy')
  chain.set('obj', {eh: true, conflict: 0, arr: ['tricky'], str: ''})
  chain.set('arr', [[11], [22], 3, 4])
  chain.set('emptyArr', [])
  chain.set('emptyObj', {})
  chain.shorthanded('zoo')
  return chain
}

test('nothing merges when returning nothing in onValue', () => {
  expect.assertions(2)
  const chain = getChain()
  const merge = new MergeChain(chain)
  merge.onValue(val => {
    expect(val.conflict).toBe(false)
    return false
  })
  merge.merge({obj: {conflict: false}})
  expect(chain.get('obj').conflict === 0).toBe(true)
})

test('onExisting', () => {
  expect.assertions(1)

  const chain = getChain()
  const merge = new MergeChain(chain)
    .onExisting((a, b) => a + b)
    .merge({str: '+'})

  expect(chain.get('str') === 'stringy+').toBe(true)
})

test('using second param to return mergeChain', () => {
  expect.assertions(1)
  const chain = getChain(true)
  expect(chain instanceof MergeChain).toBe(true)
})

test('custom merger', () => {
  expect.assertions(1)
  const chain = getChain()
  const merge = new MergeChain(chain).merger((a, b) => []).merge({emptyArr: []})

  expect(chain.get('emptyArr').length === 0).toBe(true)
})

test('custom merger - cb', () => {
  expect.assertions(1)
  const chain = getChain()
  chain.set('emptyArr', [])
  chain.merge({emptyArr: []}, mergeChain => {
    return mergeChain.onExisting((a, b) => []).merger((a, b) => []).merge()
  })
  expect(chain.get('emptyArr').length === 0).toBe(true)
})

test('stress merger - map', () => {
  const chain = new Chain()
  stress(data => chain.merge(data))
})

test('stress merger - set', () => {
  const chain = new ChainedSet()
  stress(data => chain.merge(data))
})
