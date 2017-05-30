<!-- aka exports -->
[map]: https://ponyfoo.com/articles/es6-maps-in-depth
[set]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set
[compose]: https://github.com/fluents/chain-able/wiki/Compose

# `chain-able` exports

- [Chainable](#-chainable)
  - core interface
  - common symbol methods

- [🔢 ChainedSet](#-ChainedSet)
- [🗺 ChainedMap](#-ChainedMap)
  <!--
    - [FactoryChain](#)
    - [MergeChain](#)
  -->
- `default`:
  - also available named with `Chain`
  - is a [ChainedMap](#-chainedmap) that contains all functionality created by using [compose][compose] with default arguments
- [compose][compose]

all exports are available as modular imports as well

```js
import ChainedMap from 'chain-able/ChainedMap'
```


------
<!-- link to properties in docs of mozilla and such for each map or copy their definitions -->

# common interface

these core functions call `chain.store`, when updating the `store`, `this` is returned, otherwise the value is returned

👍👎 the general rule of thumb is:
- is it a list? use `Set`
- otherwise... use `Map`


# ⛓ Chainable

- [.parent](./parent)
- clear(): `Chain` _clears the store, resets to empty_
- delete(): `Chain`
- has(`key`): `bool`
- set(`key`, `val`): `Chain`
- get(`key`): `any`
- clean(): `Array` (_undefined and null values are removed_)
- values(): `[index: value]`

- compose([`Classes`, `Objects`]): `Chain` [example](#-compose)
- end(): [`Chain.parent`](parent)
- <details>
  <summary><u><code>when(`condition`, `onTrue`, `onFalse`): <code>Chain</code></code></u></summary>
  - when(`condition`, `onTrue`, `onFalse`): `Chain`
  <!-- - whenHas(`key`, `onTrue`, `onFalse`): `Chain` -->

  _when the condition is true,_
  _trueBrancher is called,_
  _else, falseBrancher is called_

  ```js
  const prod = process.env.NODE_ENV === 'production'
  chains.when(prod, c => c.set('prod', true), c => c.set('prod', false))
  ```
  </details>
- <details>
  <summary><code><u>from(arg): <code>Chain</code></u></code></summary>

  - a simplified, optimized `.merge` which works similar, but does not deeply merge objects except when there are properties are chainable instances

  - defaults to _existing_ any existing values or set them initially, for _hydrating_ or _transferring_ (_for example, to-from localstorage, to-from webworker_)

  </details>
- <details>
  <summary><code><u>merge(arg): <code>Chain</code></u></code></summary>

  <!-- uses [MergeChain](./src/MergeChain) -->

  ```js
  const chain = new ChainedMap()
  chain.merge({ehOh: true}) // same as chain.set('ehOh', true)
  chain.entries() === {ehOh: true}
  ```

  - in ChainedSet `arg` is an `Iteratable` (e.g. Array)
  - in ChainedMap `arg` is an `Object`
  - <details><summary>iterate over the object properties:</
    - if there a property matching the key
      - if it's a chainable instance (e.g. `this.list = new ChainedSet(this)`)
        - call `.merge` on the instance
      - if it's a method
        - if the value is in the store, [tap](tap) the value & deeply merge the value with the existing one
        - call the method with the value
    - default to `.set` on the store, merge when existing value
  </details>
</details>

# 🔢 ChainedSet

> extension of [Set][set]

- add(val): `Chain`
- prepend(val): `Chain`
- merge(`Iteratable`): `Chain`
- values(): `Array`
- concat(`Iteratable`): `Chain`
- append(val): `Chain`

# 🗺 ChainedMap

> extension of [Map][map]

- entries(): `{key: value}`

- extend(`Array<string>`): `Chain`

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


<!-- - ❄️ immutable preset -->
<!-- # [parent](./parent) -->
