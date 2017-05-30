# 👂 `shorthand` [🎼 ](https://github.com/fluents/chain-able/wiki/compose)

### bindMethods(methods: Array<string>): Chain
simply iterates over methods and binds them to the instance

### chainWrap(methods: Array<string>): Chain

iterates over methods, wraps them so their value returns <code>Chain</code>

<!-- <details>
<summary><u>iterates over methods, wraps them so their value returns <code>Chain</code></u></summary> -->

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

</details>

#### setIfEmpty(key, val)

<!-- php is_empty() -->

<!-- <details>
<summary>
  <span><code>👀  <u><code>title says it all</code>  <a href="#">🔗</a></u></code></span>
</summary> -->

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
<!-- </details> -->

### concat(key, arr)
when the existing value for `key` is an array, `.concat` `val`

### append(key, val)
when the existing value for `key` is an array, append `val` to it

### return(val): val
simply a function to return a value, to keep a single chain when there are scoped variables

<!-- # feature-full -->
