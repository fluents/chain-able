# 👂 `Observe` [🎼 ](https://github.com/fluents/chain-able/wiki/compose)

> subscribe to changes <!-- through core api operations -->

- [api](#-api)
- [examples](#-examples)
  - [minimal](#-minimal)
  - [customizable](#-customizable)
- [related](#-related)

## 🌐 api
first & second param
- `properties(Array<string>)`: Chain
- `callback(Function(data, chain))`: Chain



## 📘 examples

### 👾 minimal

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
```

## 🔗 related

[code]: https://github.com/fluents/chain-able/tree/master/src/compose/Observable.js
[tests]: https://github.com/fluents/chain-able/tree/master/test/observable.js

- [code][code]
- [tests][tests]
- https://github.com/ReactiveX/rxjs/blob/master/src/Subscriber.ts
- https://github.com/sindresorhus/awesome-observables
- https://medium.com/@benlesh/learning-observable-by-building-observable-d5da57405d87
