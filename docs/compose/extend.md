# `Extend` [🎼](https://github.com/fluents/chain-able/wiki/compose)
- `.debug` is built into `Extend`, it's a unique property
  - available with `.get('debug')`,
  - settable by `.debug(boolean | string | any)`,
  - *is not in the .store* so it will not affect `.entries` or other functions

<!--
- extendPrefixed
- extendWith
- extendDefault
-->

#### extendAlias

```js
chain.extendAlias(['eh'], 'canada')
chain.eh == chain.canada
```

#### extendFalse

```js
chain.extendTrue(['lies']).lies().get('lies') === false
```

#### extendTrue

```js
chain.extendTrue(['truth']).truth().get('truth') === true
```

#### extendIncrement

```js
chain.extendIncrement(['index']).index().index().index()
chain.get('index') === 3
```


## 🔗 related

[code]: https://github.com/fluents/chain-able/tree/master/src/compose/Extend.js
[test-advanced]: https://github.com/fluents/chain-able/tree/master/test/advanced.js
[test-simple]: https://github.com/fluents/chain-able/tree/master/test/simple.js

- [code][code]
- [test-advanced][test-advanced]
- [test-simple][test-simple]
