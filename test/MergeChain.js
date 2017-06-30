const log = require('fliplog')
const {MergeChain, Chain, ChainedSet, toArr, reduce, eq} = require('../src')
const stress = require('./_stress')

test('instantiate', () => {
  expect.assertions(1)
  expect(new MergeChain() instanceof MergeChain).toBe(true)
})

function getChain() {
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
  expect(chain.get('obj').conflict).toBe(0)
})

test('onExisting', () => {
  expect.assertions(1)

  const chain = getChain()
  const merge = new MergeChain(chain)
    .onExisting((a, b) => a + b)
    .merge({str: '+'})

  expect(chain.get('str')).toBe('stringy+')
})

test('using second param to return mergeChain', () => {
  expect.assertions(1)
  const mergeChainHandler = x => expect(x).toBeInstanceOf(MergeChain)
  const chain = getChain()
  chain.merge({}, mergeChainHandler)
})

test('custom merger', () => {
  expect.assertions(1)
  const chain = getChain()
  const merge = new MergeChain(chain).merger((a, b) => []).merge({emptyArr: []})

  expect(chain.get('emptyArr').length).toBe(0)
})

test('custom merger - cb', () => {
  expect.assertions(1)
  const chain = getChain()
  chain.set('emptyArr', [])
  chain.merge({emptyArr: []}, mergeChain => {
    return mergeChain.onExisting((a, b) => []).merger((a, b) => []).merge()
  })
  expect(chain.get('emptyArr').length).toBe(0)
})

test('custom init', () => {
  let map = new Map()
  map.set('eh', 1)
  map.set('coo', 'oo')

  MergeChain.init(map).merge({eh: 2})
  expect(eq(reduce(map), {coo: 'oo', eh: 2})).toBe(true)
})

test('stress merger - map', () => {
  const chain = new Chain()
  stress(data => chain.merge(toArr(data)))
})

test('stress merger - set', () => {
  const chain = new ChainedSet()
  stress(data => chain.merge(toArr(data)))
})
