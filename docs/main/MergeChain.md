# ▶️◀️⛓ MergeChain

> deeply merge all data values on a chain with ease

[ref-primatives]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
[ref-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[ref-fn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[ChainedSet]: https://github.com/fluents/chain-able/wiki/ChainedSet
[ChainedMap]: https://github.com/fluents/chain-able/wiki/ChainedMap
[Extend]: https://github.com/fluents/chain-able/wiki/Extend
[code]: https://github.com/fluents/chain-able/tree/master/src/MergeChain.js
[test-persist-hydrate]: https://github.com/fluents/chain-able/tree/master/test/LocalStorage.js
[deepmerge]: https://github.com/KyleAMathews/deepmerge
[lodash.merge]: https://lodash.com/docs/4.17.4#merge

- [definition](#definition)
- [.from](#from)
- [process](#process)
- [examples](#-examples)
  - [minimal](#-minimal)
  - [persist & hydrate](#-persist-and-hydrate)
- [related](#-related)

### definition:

```ts
type Mergeable = Obj | Arr

export interface DopeMergeOptions {
	arrayMerge?: Fn
	stringToArray?: boolean = true
	boolToArray?: boolean = false
	ignoreTypes?: string[] = ['null', 'undefined', 'NaN']
	debug?: boolean = undefined
}

function dopemerge(obj1: Mergeable, obj2: Mergeable, opts?: DopeMergeOptions): Mergeable

class MergeChain extends ChainedMapBase {
  onExisting(fn?: Fn): MergeChain
  onValue(fn?: Fn): MergeChain
  obj(obj: Obj): MergeChain
  merge(objToMerge: Obj): MergeChain
}
```

## `from`

- a simplified, optimized `.merge` which works similar, but **does not deeply merge objects** unless the properties are _chainable instances_
- by default, **overrides existing values** or sets them initially
- mainly used for _hydrating_ or _transferring_ (for example, to-from _localStorage_, to-from _webworker_)


# process

- in [ChainedSet][ChainedSet] `arg` is an `Iteratable` (e.g. `Array`)
- in [ChainedMap][ChainedMap] `arg` is an `Object`
- iterate over the object keys:
  - if there an instance _property_ matching the _key_
    - if it's a chainable instance (e.g. `this.list = new ChainedSet(this)`)
      - call `.merge` on the instance
    - else if it's a _method_
      - if the _method_ is in `.shorthands` (added for every [`.extend`][Extend])
      - if the _value_ is in the store, [tap](tap) the value & deeply merge the value with the existing one
      - call the _method_ with the _value_
  - default/fallback
    - if existing value, deeply _value-_ *merge*
    - `.set`


## 📘 examples

### 👾 minimal

```js
const chain = new ChainedMap()
chain.merge({ehOh: true}) // same as chain.set('ehOh', true)
chain.entries() === {ehOh: true}
```

### 🍉 persist and hydrate

```js
const Chain = require('chain-able')

class Canada extends Chain {
  static init(parent) { return new Canada(parent) }
  constructor(parent) {
    super('parent')
    this.extend(['eh'])
  }
}

const ls = {
  get(key) { return JSON.parse(window.localStorage.getItem(key)) },
  set(key, value) { window.localStorage.setItem(key, JSON.stringify(value)) }
}

const canada = Canada.init()
  .eh('eh!')
  .merge({canada: true})
  .tap('canada', value => '🇨🇦')
  .setIfEmpty('ooo', 'ahh')

ls.set('canada', canada)
const hydrated = new Canada().from(ls.get('canada'))
```

# 🔗 related

- [lodash.merge][lodash.merge]
- [deepmerge][deepmerge]
- [code][code]
- [test-persist-hydrate][test-persist-hydrate]
- [Extend][Extend]
- [ChainedSet][ChainedSet]
- [ChainedMap][ChainedMap]
