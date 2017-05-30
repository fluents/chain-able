# 🌊 `types` [🎼 ](https://github.com/fluents/chain-able/wiki/compose)

- [api](#-api)
- [examples](#-examples)
  - [minimal](#-minimal)
  - [advanced](#advanced)

### 🌐 api
- typed(`?name: string`):_TypeChainFactory_
  - validators(`object`):_TypeChainFactory_. with keys that are accessed from `typed` when using a `string`
  - typed:_TypeChainFactory_
    - `string`: uses property matching the string in `validators`
    - `Function`: callback to do validation
  - onValid(`Function`):_TypeChainFactory_
  - onInvalid(`Function`):_TypeChainFactory_
  - name(`string`):_TypeChainFactory_
- prop(`string`):_TypeChainFactory_.  property name


<!-- - intro
- src
- tests
- example
- more -->

## 📘 examples

### 👾 minimal

```js
const chain = new Chain()
  .typed('short')
  .type(val => typeof val === 'function')

chain.short(val => {})   // valid function
chain.short(!!Boolean)   // boolean, not a function, throws
```

### advanced
<!-- <details>
<summary>
  <span><code>👀  <u><code>code</code>  <a href="#">🔗</a></u></code></span>
</summary> -->

```js
const chain = new Chain()
  .typed()
    .validators({string: val => typeof val === 'string'})
    .type('string')
    .name('eh')
    .onValid((val, chain) => chain.set('eh', val))
    .onInvalid((val, chain) => console.log('ignore it.'))
    .end()

chain.eh('valid string') // .onValid
chain.eh(Number)         // invalid, triggers .onInvalid
```
<!-- </details> -->
