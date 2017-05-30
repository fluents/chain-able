# `Define` [🎼](https://github.com/fluents/chain-able/wiki/compose)

> effortlessly create a completely transparent & customizable api

[objdefine]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
[define-code]: https://github.com/fluents/chain-able/tree/master/src/compose/Define.js
[define-tests]: https://github.com/fluents/chain-able/tree/master/test/define.js
[getter]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/get
[setter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set

- [api](#-api)
  - [extendGetSet](#extendGetSet)
    - [syntax](#extendGetSet)
    - [overview](#extendGetSet)
    - [example](#extendGetSet)
  - [defineGetSet](#defineGetSet)
    - [syntax](#defineGetSet)
    - [overview](#defineGetSet)
    - [example](#defineGetSet)
- [related](#-related)

#### 🌐 api

### `extendGetSet`

##### syntax
`.extendGetSet(Array<string>): Chainable`

##### overview
- ☮️ extends `.extend`
- adds `set` & `get` + name in camelCase
- then uses [Object.defineProprety][objdefine]: [getter][getter] & [setter][setter], with some added helpers

##### example

```js
const Chain = require('chain-able')
```

```js
const chain = new Chain().extendGetSet(['ehOh'])

// can be used as normal object with getter/setters
chain.ehOh = false
const ehOh = chain.ehOh
ehOh == chain.ehOh == false

// when a value is passed in, it's a setter, same as using merge
chain.ehOh(true) === chain.setEhOh(true) === chain.merge({ehOh: true})

// when no value is passed in & it has no default,
// the result is the same as the getter
chain.ehOh() === chain.getEhOh() === true
```

### `defineGetSet`

##### syntax

`.extendGetSet(Array<string>): Chainable`

##### overview

🍭 similar to [`extendGetSet`](#extendGetSet), but instead of creating methods, it decorates existing methods & scopes a reference to them

##### example

```js
class Coolio extends Chain {
  constructor(parent) {
    super(parent)

    // decorates `ref` method with getter/setter,
    // with scoped reference to the method
    this.defineGetSet(['ref'])
  }
  ref(arg) {
    console.log(arg)
    return this.set('ref', ref)
  }
}

const coolio = new Coolio()
coolio.ref = 'eh' // logs eh
coolio.ref()      // === 'eh'
coolio.ref        // === 'eh'
coolio.ref('eh')  // logs eh
```

## 🔗 related
- [code][define-code]
- [tests][define-tests]
- [define getter][getter]
- [define setter][setter]
