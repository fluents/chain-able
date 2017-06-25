# TraverseChain

> iterate any data, with easy matching for values & keys

- [definition](#definition)
- [example](#example)
- [related](#related)

## definition

```ts
type Traversable = Obj | Map<any, any> | Set<any>

class TraverseChain extends ChainedMapBase {
  // object to traverse
  public obj(obj: Traversable): TraverseChain

  // functions to call
  public onNonMatch(fn: Fn): TraverseChain

  // defaults to this.remove()
  public onMatch(fn?: Fn): TraverseChain

  // keys & values to match
  public vals(vals: Matchable): TraverseChain
  public keys(vals: Matchable): TraverseChain

  // does the actual traversing
  // going through, checking the matchers
  // @alias .call
  public traverse(shouldReturn: boolean): TraverseChain
}
```

```ts
interface TraverseContext {
  node: any
  circular: boolean
  path: undefined | string[]
  parent: undefined | any
  key: undefined | Primitive
  notRoot: boolean
  root: boolean
  isLeaf: boolean
  notLeaf: boolean
  level: number
  update(value: Primitive, stopHere?: boolean): void
  remove(stopHere?: boolean): void
  delete(stopHere?: boolean): void
  before(fn: Fn): void
  after(fn: Fn): void
  pre(fn: Fn): void
  post(fn: Fn): void
}
interface Traverse {
  value: any
  nodes(): ArrOrObj
  map(fn: Fn): any
  forEach(x: Traverse.value, fn: (t: Traverse) => any): void
  reduce(fn, init): ArrOrObj
  paths(): ArrOrObj
  set(path: Primitive, value: any): boolean
  has(path: Primitive): boolean
  get(path: Primitive): any
  clone(): Obj
}

function TraverseCallback(x: Traverse.value) {
  this = TraverseContext
}

function eq(one: any, two: any, loose?: boolean = false) {
  traverse.forEach(function: TraverseCallback(x) {
    if (!==) return false
  })
  return true
}
```


# example

<!-- - src
- test
- example
- more (traverse-js)
 -->


traverse any data type deeply, match values <code>&||</code> keys, optional callback <code>.onMatch</code>

<!-- <details>
<summary>
  <span><code>👀  <u>traverse any data type deeply, match values <code>&||</code> keys, optional callback <code>.onMatch</code>  <a href="#">🔗</a></u></code></span>
</summary> -->

<!-- TODO: gif input -->
<!-- TODO: image output -->

```js
const eh = {
  notme: 1,
  nested: {
    really: {
      deep: {
        super: false,
        canada: true,
        modules: [{parser: 'moose'}],
      },
      matchme: 'minime',
    },
  },
}

// or by doing `import {traverse} from 'chain-able'` and using the traverse-api
// or without merging by doing `new Chain().traverse(eh)`
const cleaned = new Chain()
  .merge(eh)
  .traverse(false)
  .keys([/super/, /parser/])
  .vals([/minime/])
  .call(true)

cleaned === {
  notme: 1,
  nested: {
    really: {
      // stripped matchme: minime
      deep: {
        // stripped out super
        canada: true,
        modules: [], // stripped out parser
      },
    },
  },
}
```
<!-- </details> -->


## related
- [js-traverse][js-traverse] extends this!
- [source][traversesrc]
- [tests][traversetests]
- [dep tests][traversetestsdep]

[traversesrc]: https://github.com/fluents/chain-able/tree/master/src/TraverseChain.js
[traversetests]: https://github.com/fluents/chain-able/tree/master/test/traverse.js
[traversetestsdep]: https://github.com/fluents/chain-able/tree/master/test/traverse
[js-traverse]: https://github.com/substack/js-traverse
