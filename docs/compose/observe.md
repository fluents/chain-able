# 👂 `Observe` [🎼 ](https://github.com/fluents/chain-able/wiki/compose)

> subscribe to changes

❗ called only on **change**
observers are only called when data they subscribe to changes


- [api](#-api)
- [examples](#-examples)
  - [minimal](#-minimal)
  - [customizable](#-customizable)
- [related](#-related)

## 🌐 api

```ts
type Matchable = string | 'globstring*' | 'dot.prop*' | RegExp | Function

class ObserveChain extends Composable, Chain {
  public observe(properties: Matchable, onChange: Function): ChainAble
}
```



## 📘 examples

### 👾 minimal

```js
const log = arg => console.log(arg)

chain = Chain.init()
  .observe('eh', data => log(data.eh === true))
  .set('eh', true)
```

## matcher

```js
chain
  .extend(['canada', 'timbuck'])
  .observe(['canad*'], data => log(data.canada))
  .canada(true)
  .canada(true)
  .timbuck(false)
```

## store

```js
const {Chain, eq} = require('chain-able')

const last = arr => arr.slice(0).pop()

class TodoStore extends Chain {
  constructor(parent) {
    super(parent)

    this
      .set('todos', [])
      .methods(['completed', 'pending', 'total']).autoIncrement().build()
      .observe('todos', ({todos}) => {
        this.total(+1)
        if (last(todos).completed) this.completed(+1)
        else this.pending(+1)
      })
  }

  // is verbose for clarification, could just
  // return this.merge('todos', [{task, completed}])
  add(task, completed = false) {
    const todo = {task, completed}
    const todos = this.get('todos').concat([todo])
    return this.set('todos', todos)
  }
}

const chain = new TodoStore()
chain
  .add({eh: true})
  .add({moose: 'eh!'}, true)

const entries = chain.entries()
const expected = {
  todos: [
    {task: {eh: true}, completed: false},
    {task: {moose: 'eh!'}, completed: true},
  ],
  completed: 1,
  pending: 2,
  total: 3,
}

eq(entries, expected)
```


## 🔗 related
<!-- [extends Transform](https://github.com/fluents/chain-able/wiki/transform) -->
<!-- [extends Compose](https://github.com/fluents/chain-able/wiki/compose) -->
[code]: https://github.com/fluents/chain-able/tree/master/src/compose/Observable.js
[tests]: https://github.com/fluents/chain-able/tree/master/test/observable.js

- [code][code]
- [tests][tests]
- [extends ChainedMap](https://github.com/fluents/chain-able/wiki/ChainedMap)
- [extends DotProp](https://github.com/fluents/chain-able/wiki/dot)
- https://github.com/mobxjs/mobx/blob/master/src/core/observable.ts
- https://github.com/ReactiveX/rxjs/blob/master/src/Subscriber.ts
- https://github.com/sindresorhus/awesome-observables
- https://medium.com/@benlesh/learning-observable-by-building-observable-d5da57405d87
