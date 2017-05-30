# 👂 `Observe` [🎼 ](https://github.com/fluents/chain-able/wiki/compose)

subscribe to changes <!-- through core api operations -->

<!--
format this, get a schema
[observe-src]: https://github.com/fluents/chain-able/tree/master/src/compose/Observe.js
[observe-test]: https://github.com/fluents/chain-able/tree/master/tests/test/observe.js
- [src][observe-src]
- [tests][observe-tests]
-->

### 🌐 api
first & second param
- `properties(Array<string>)`: Chain
- `callback(Function(data, chain))`: Chain



## 📘 examples

### simple

```js
chain = Chain.init()
  .observe('eh', data => data.eh === true)
  .set('eh', true)
```


### customizable

```js
let called = 0
chain = Chain.init()
  .extend(['eh', 'timbuck'])
  .observe(['eh', 'timbuck'], data => {
    if (called++ === 0) console.log(data.eh) // true
    console.log(data.eh, data.timbuck) // true, false, true
  })
  .eh(true)
  .timbuck(false)
``````
