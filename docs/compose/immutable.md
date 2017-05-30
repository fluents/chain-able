# ❄️ `immutable` [🎼 ](https://github.com/fluents/chain-able/wiki/compose)

this is not included by .default composed export

[immutablejs]: https://facebook.github.io/immutable-js/

compose a chain to use the [immutablejs] library and use a second (immutable) store so immutable values don't have to be dealt with directly unless wanted, only used for reference and equality checks

<!--
# agnostic
immutable
- src
- test
- example
- more
-->

```js
const ImmutableChain = require('../ImmutableChain')
const immutable = require('immutable')

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
js.eh !== undefined

// immutable lib equals
is(chain2.immutable, chain2.immutable) === true
is(chain.immutable, chain2.immutable) === false

// chain equals
chain2.equals(chain2) === true
chain2.equals(chain) === false
```
