# 🔢 ChainedSet

> extension of [Set][set]

- [syntax](#syntax)
- [examples](#-examples)
  - [minimal](#-minimal)
  - [diving deeper](#-diving-deeper)
  - [sugar](#-sugar)
- [related](#-related)

## api
- add(val): `Chain`
- prepend(val): `Chain`
- values(): `Array`
- concat(`Iteratable`): `Chain`
- append(val): `Chain`
- merge(`Iteratable`): `Chain` _unlike [ChainedMap][ChainedMap], this does not use MergeChain since only simple iteratables are involved_

## definition
```ts
// extends Set
class ChainedSet extends Chainable {
	public add(value: any): ChainedSet
	public prepend(value: any): ChainedSet
	public merge(arr: MergeableArray): ChainedSet
	public has(value: any): boolean
	public values(): any[]
}
```

## 📘 examples

### 👾 minimal

```js
const people = new ChainedSet()

people
  .add('sam')
  .add('sue')
  .prepend('first')
  .merge(['merged'])

for (let name of people) // first, sam, sue, merged
```

<!-- ### 🔁 iterating  -->


### 🏊 diving deeper

```js
class Lists extends Chainable {
  constructor(parent) {
    super(parent)
    this.people = new ChainedSet(this)
    this.places = new ChainedSet(this)
  }
  add(type, value) {
    this[type].add(value)
    return this
  }

  toArray() {
    return new ChainedSet()
      .merge(this.people)
      .merge(this.places)
      .values()
  }
  toObject() {
    return {
      people: this.people.values()
      places: this.places.values()
    }
  }
}

const lists = new Lists()

// with a simple factory like method
lists
  .add('people', 'sam')
  .add('people', 'sue')
  .add('places', 'moon')

// or with property
lists.places.add('sun')
lists.people.add('joe')

// the shorthand methods
lists.people.concat(['frank', 'john'])
lists.people.prepend('first')
lists.people.add('last')

const obj = lists.toObject()
// .people == ['first', 'sam', 'sue', 'frank', 'john', 'last']
// .places == ['moon', 'sun']

const arr = lists.toArray()
// == ['first', 'sam', 'sue', 'frank', 'john', 'last', 'moon', 'sun']
```


## 🔗 related
- [Set][set]

[compose]: https://github.com/fluents/chain-able/wiki/Compose
[set]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set
[ChainedMap]: https://github.com/fluents/chain-able/wiki/chainedmap
