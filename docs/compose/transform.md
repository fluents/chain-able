# 🤖 `transform` [🎼 ](https://github.com/fluents/chain-able/wiki/compose)

- [definitions](#definitions)
- [remap](#-remap)
- [transform](#-transform)
- [traverse](#-traverse)
- [related](#-related)

## definitions

```ts
class TransformChain extends Composable, Chain {
  // stored in .meta
  public transform(key: Primitive, value: any): ChainAble

  // remaps a key from 1 to another
  public remap(from: string, to: string): ChainAble

  // returns traverser using this.entries()
  public traverse(useThis?: boolean): TraverseChain
  // returns traverser using obj
  public traverse(obj: Traversable): TraverseChain
}
```

### 🗺 remap

```js
const chain = new Chain()
  .remap('dis', 'dat')
  .from({dis: 1, other: true})
  .get('dat') === 1
```

### 🤖 transform
- [source][transformsrc]
- [tests][transformtests]

[transformsrc]: https://github.com/fluents/chain-able/tree/master/src/compose/Transform.js
[transformtests]: https://github.com/fluents/chain-able/tree/master/test/MobX.js
[MethodChain]: https://github.com/fluents/chain-able/wiki/MethodChain

_works for all other [MethodChain][] extensions as well_

<!-- // or observe the value and remap the key and transform as computed... -->


```js
import {format} from 'date-fns/esm'
import {Chain} from 'chain-able'

const chain = new Chain()

chain.transform('created_at', date => format(date))
chain.set('created_at', new Date())

// is formatted human-readable pretty!
const {created_at} = chain.entries()
```

### 👣 traverse
- [TraverseChain](https://github.com/fluents/chain-able/wiki/TraverseChain)


## 🔗 related
- [map-factory][map-factory]
- [tappable-webpack][tappable-webpack]
- [awesome-tap][awesome-tap]

[map-factory]: https://github.com/midknight41/map-factory
[awesome-tap]: https://github.com/sindresorhus/awesome-tap
[tappable-webpack]: https://github.com/webpack/tapable
