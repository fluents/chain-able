# 👂 `shorthand` [🎼 ](https://github.com/fluents/chain-able/wiki/compose)

> shorthand easy helper functions

- [api](#-api)
  - [bindMethods](#bindMethods)
  - [chainWrap](#chainWrap)
  - [concat](#concat)
  - [append](#append)
  - [return](#return)
- [related](#-related)


#### 🌐 api

### bindMethods

iterates over methods, binds them to the instance

```js
chain.bindMethods(methods: Array<string>): Chain
```

### chainWrap

iterates over methods, wraps them so their value returns <code>Chain</code>

```js
chain.chainWrap(methods: Array<string>): Chain
```

##### example

```js
class Eh extends Chain {
  constructor(parent) {
    super(parent)
    this.chainWrap(['canada'])
  }
  canada(arg) {
    console.log(arg)
  }
}

const eh = new Eh()
eh.canada('log me') // this now returns Eh
```

#### setIfEmpty

set the value if it hasn't been set already

##### syntax
```js
.setIfEmpty(key: Primative | Object, value: any)
```

##### example
<!-- php is_empty() -->

```js
new Chain()
  .set('eh', true)
  .setIfEmpty('eh', false)    // eh is already set, ignored
  .setIfEmpty('canada', true) // canada is not set, so it .sets it

// same as doing this
// if (chain.has('eh') === false) chain.set('eh', false)
// or
// chain.when(!chain.has('eh'), c => c.set('eh', false))
```


### return(val): val

simply a function to return a value, to keep a single chain when there are scoped variables

### wrap(val): Chain

same as `return` but calls val if it's a function, and returns chain

<!-- # feature-full -->

## 🔗 related
- [code][code]
- [tests][tests]
- https://github.com/sindresorhus/awesome-tap
- https://github.com/webpack/tapable

[code]: https://github.com/fluents/chain-able/tree/master/src/compose/Shorthands.js
[tests]: https://github.com/fluents/chain-able/tree/master/test/shorthands.js
