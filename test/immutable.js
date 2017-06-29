const immutable = require('immutable')
const log = require('fliplog')
const {compose} = require('../src')

const todo = console.log
todo('can use any immutable type')
test.skip('simple', () => {
  const ImmutableChain = new compose({immutable: true})
  const {
    Seq,
    Map,
    Range,
    fromJS,
    List,
    OrderedSet,
    Stack,
    OrderedMap,
    Collection,
    Record,
    Iteratable,
    Repeat,
    is,
  } = immutable

  const ImmutableMap = immutable.Map
  ImmutableChain.immutablejs(immutable)

  const chain = new ImmutableChain().structure(Record).data(fromJS({eh: true}))
  const chain2 = new ImmutableChain().structure(Record).data(new ImmutableMap())
  chain.set('oo', true)
  chain.merge({eh: false, mutable: true})
  chain.setIn(['eh.canada.moose'], true)

  chain2.setIn(['eh', 'canada', 'moose'], true)
  chain2.mergeDeep(chain.immutable)
  chain2.set('gooses', true) // differentiation from chain1

  const js = chain2.toJS()
  expect(js.eh !== undefined).toBe(true)

  // immutable lib equals
  expect(is(chain2.immutable, chain2.immutable)).toBe(true)
  expect(is(chain.immutable, chain2.immutable)).toBe(false)

  // chain equals
  expect(chain2.equals(chain2)).toBe(true)
  expect(chain2.equals(chain)).toBe(false)

  // for debugging
  //
  // t.true(immutable.isImmutable(chain2.immutable)) // seems to be gone
  // log.quick(chain.immutable, chain2.immutable)
  // log.tosource().data(chain2.equals).exit()
  //
  // delete chain.parent && delete chain.immutable
  // log.quick(chain)
})
