# 🗺 ChainedMap

> extension of [Map][map]

- [syntax](#syntax)
- [examples](#-examples)
  - [minimal](#-minimal)
  - [diving deeper](#-diving-deeper)
  - [sugar](#-sugar)
- [related](#-related)

## syntax

- set(`key`, `val`): `Chain`
- get(`key`): `any` _chain.set('eh', true).get('eh') === true_
- clean(): `Array` (_undefined and null values are removed_)
- entries(allChainProperties = false): `{key: value}`
  - _spreads the entries from ChainedMap.store (Map)_
  - `allChainProperties = true`: _return store.entries, with all chain properties if they exist_
- extend(`Array<string>`): `Chain` _shorthand methods, from strings to functions that default call .set_

## 📘 examples

### 👾 minimal

```js
const ChainedMap = require('../ChainedMap')

const chain = new ChainedMap()

// set it
chain.set('canada', '🇨🇦')
// get it
chain.get('canada') === '🇨🇦'
chain.has('canada') === true
// remove it
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

## 🔗 related

- [code][code]
- [Map][map]
- mosts tests use ChainedMap as the core

[code]: https://github.com/fluents/chain-able/tree/master/src/ChainedMap.js
[map]: https://ponyfoo.com/articles/es6-maps-in-depth
