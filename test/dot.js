const log = require('fliplog')
const {Chain, toArr} = require('../src')

/* istanbul ignore next: depreciated */
// test.skip('.dotter access', t => {
//   t.plan(4)
//   class DotChain extends Chain {
//     constructor(parent) {
//       super(parent)
//       this.nested = new Chain(this)
//       this.nested.set('eh', true)
//     }
//     get(key) {
//       const dotter = this.dotter()
//         .name(key)
//         .dotted((first, accessor, full) => {
//           // console.log({first, accessor, full, val: super.get(full)})
//           if (first === 'nested') return this.nested.get(accessor.join('.'))
//           // @NOTE: this is really for when not extending `dot`
//           // if (this.has(first)) return super.get(first)
//           return super.get(full)
//         })
//         .otherwise(full => {
//           // console.log('otherwise', {full})
//           return super.get(full)
//         })
//         .value()
//
//       return dotter
//     }
//   }
//
//   const chain = new DotChain()
//
//   const nested = chain.get('nested.eh')
//   t.true(nested)
//
//   chain.set('moose.simple', 1)
//   // log.quick(chain.get('moose.simple'))
//   t.true(chain.get('moose.simple') === 1)
//
//   chain.set('canada', '🇨🇦')
//   t.true(chain.get('canada') === '🇨🇦')
//   t.true(chain.get('not-set') === undefined)
// })
const todo = console.log
todo('can use dot-prop on .current')
todo('can use dot-prop on Arrays')

test('can use dot-prop on .set', () => {
  const chain = new Chain()
  chain.set('moose.simple', 1)
})

test('can use dot-prop on .has', () => {
  expect.assertions(2)
  var chain = new Chain()
  chain.set('moose.simple', true)
  // var eh = ({
  //   chain,
  //   hasSimple: chain.has('moose.simple'),
  //   getSimple: chain.get('moose.simple'),
  //   hasNotReal: chain.has('moose.notReal'),
  //   entries: chain.entries(),
  // })

  expect(chain.has('moose.simple')).toBe(true)
  expect(!!chain.has('moose.notReal')).toBe(false)
})

test('can use dot-prop on .delete', () => {
  expect.assertions(2)
  const chain = new Chain()
  chain.set('moose.canada.eh', true)
  chain.set('moose.canada.igloo', true)

  chain.delete('moose.canada.eh')
  expect(chain.has('moose.canada.igloo')).toBe(true)
  expect(chain.entries().moose.canada.igloo).toBe(true)
})

test('can use dot-prop on .delete', () => {
  const chain = new Chain()
  chain.set('moose.canada.eh', true)
  chain.set('moose.canada.igloo', true)

  chain.delete('moose.canada.eh')
  expect(chain.has('moose.canada.igloo')).toBe(true)
  expect(chain.entries().moose.canada.igloo).toBe(true)
})

test('can use dot-prop on .get', () => {
  expect.assertions(1)
  const chain = new Chain()
  chain.set('moose.canada.eh', true)
  chain.set('moose.canada.igloo', true)

  chain.delete('moose.canada.eh')
  expect(chain.get('moose.canada.igloo')).toBe(true)
})

test('can use dot-prop with an array', () => {
  expect.assertions(1)
  const chain = new Chain()
  chain.set('moose.canada.eh', true)
  expect(chain.get(['moose', 'canada', 'eh'])).toBe(true)
})

test('can use dot-prop fallback value', () => {
  expect.assertions(1)
  const chain = new Chain()
  expect(chain.get(['moose', 'canada', 'igloo'], true)).toBe(true)
})

test('can disable dot-prop', () => {
  expect.assertions(1)
  const chain = new Chain()
  chain.dot(false)
  chain.set('moose.simple', 1)
  expect(toArr(chain.store.keys()).includes('moose.simple')).toBe(true)
})
