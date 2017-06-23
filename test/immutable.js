const test = require('ava')
const immutable = require('immutable')
const log = require('fliplog')
const {compose} = require('../dist')

test.todo('can use any immutable type')
test.failing('simple', t => {
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
  t.true(js.eh !== undefined)

  // immutable lib equals
  t.true(is(chain2.immutable, chain2.immutable))
  t.false(is(chain.immutable, chain2.immutable))

  // chain equals
  t.true(chain2.equals(chain2))
  t.false(chain2.equals(chain))

  // for debugging
  //
  // t.true(immutable.isImmutable(chain2.immutable)) // seems to be gone
  // log.quick(chain.immutable, chain2.immutable)
  // log.tosource().data(chain2.equals).exit()
  //
  // delete chain.parent && delete chain.immutable
  // log.quick(chain)
})
