# 🗺 ChainedMap

> extension of [Map][map]

- [definition](#definition)
- [examples](#-examples)
  - [minimal](#-minimal)
  - [diving deeper](#-diving-deeper)
  - [sugar](#-sugar)
- [tap][#-tap]
- [related](#-related)

## definition

```ts
// this is to avoid circular requires
// because MergeChain & MethodChain extend this
// yet .method & .merge use those chains
class ChainedMapBase extends Chainable {
	public meta: Meta
	public store: Map<any, any> // = new Map()

	public values(): Primitive[]
	public extend(methods: string[]): ChainAble

	// MapIterator -> `{[key]: value}`
	// with all chain properties if they exist
	public entries(reduceInstanceProperties: boolean): Obj

	public from(obj: Obj): ChainAble
	public tap(name: Primitive, fn: FnTap): ChainAble

	public get(name: Primitive): Primitive
	public set(name: Primitive, value: Primitive): ChainAble
}

interface MergeFn extends FunctionWithSingleArg {
	(merger: MergeChain): any
}

class ChainedMap extends ChainedMapBase {
	public method(names: strings): MethodChain
	public methods(names: strings): MethodChain
	public merge(objToMerge: Obj, fn?: MergeFn): ChainAble
}
```

## 📘 examples

### 👾 minimal

exactly the same as using [Map][map]

```js
const ChainedMap = require('chain-able/ChainedMap')

const chain = new ChainedMap()

chain.set('canada', '🇨🇦')
chain.has('canada') === true
chain.get('canada') === '🇨🇦'

chain.delete('canada')
chain.has('canada') === false
```

### 🏊 diving deeper

```js
class Chained extends Chainable {
  constructor(parent) {
    super(parent)
    this.extend(['eh', 'canada'])
  }
}

// doing the above is the same as
class Chained extends Chainable {
  eh(arg) {
    return this.set('eh', arg)
  }
  canada(arg) {
    return this.set('canada', arg)
  }
}
```

### 🍬 sugar

```js
const {canada} = new ChainedMap()
  .extend(['eh'])
  .eh('eh!')
  .merge({canada: true})
  .tap('canada', canada => '🇨🇦')
  .setIfEmpty('ooo', 'ahh')
  .entries()
```


### 👆 tap

tap a value with a function

```js
new Chain()
  .set('eh', 'eh')
  .tap('eh', x => x + '!')
  .get('eh') === 'eh!'
```

this replaced the previous `.concat` and `.append`
in this simple example, when the existing value for `key` is an _array_ or a _string_, append `val` to it

```js
const {str, arr} = new Chain()
  .set('str', 'emptyish')
  .tap('str', str => str + '+')
  .set('arr', [1])
  .tap('arr', arr => arr.concat([2]))
  .entries()

str == 'emptyish+'
arr == [1, 2]
```

## 🔗 related

- [code][code]
- [Map][map]
- most tests & classes extend + use ChainedMap as the core

[code]: https://github.com/fluents/chain-able/tree/master/src/ChainedMap.js
[map]: https://ponyfoo.com/articles/es6-maps-in-depth
