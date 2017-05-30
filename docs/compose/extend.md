# `Extend` [🎼](https://github.com/fluents/chain-able/wiki/compose)

> easy extension, debugging, and decorating factories

- [overview](#overview)
- [extendAlias](#extendAlias)
- [extendIncrement](#extendIncrement)
- [extendWith](#extendWith)
  - [default true](#default-true)
  - [default false](#default-false)
- [related](#-related)

### overview

`.debug` is built into `Extend`, it's a unique property
  - available with `.get('debug')`,
  - settable by `.debug(boolean | string | any)`,
  - *is not in the .store* so it will not affect `.entries` or other functions

#### extendAlias

```js
chain.extendAlias(['eh'], 'canada')
chain.eh == chain.canada
```

#### extendIncrement

```js
chain.extendIncrement(['index']).index().index().index()
chain.get('index') === 3
```

#### extendWith

with an object

```js
chain.extendWith({thing1: 'dr', thing2: 'dr'})
const {thing1, thing2} = chain.thing1().thing2().entries()
thing1 === 'dr'
thing1 === thing2
```

with an array and a value

```js
chain.extendWith(['thing1', 'thing2'], 'dr')
const {thing1, thing2} = chain.thing1().thing2().entries()
thing1 === 'dr'
thing1 === thing2
```

##### default true

```js
chain.extendWith(['truth'], true).truth().get('truth') === true
```

##### default false

```js
chain.extendWith(['lies'], false).lies().get('lies') === false
```


## 🔗 related

[code]: https://github.com/fluents/chain-able/tree/master/src/compose/Extend.js
[test-advanced]: https://github.com/fluents/chain-able/tree/master/test/advanced.js
[test-simple]: https://github.com/fluents/chain-able/tree/master/test/simple.js

- [code][code]
- [test-advanced][test-advanced]
- [test-simple][test-simple]
