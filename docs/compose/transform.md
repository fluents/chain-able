# 🤖 `transform` [🎼 ](https://github.com/fluents/chain-able/wiki/compose)

- [tap](#-tap)
- [remap](#-remap)
- [traverse](#-traverse)

### 👆 tap

```js
new Chain()
  .set('eh', 'eh')
  .tap('eh', x => x + '!')
  .get('eh') === 'eh!'
```

### 🗺 remap

```js
const chain = new Chain()
  .remapKeys()
  .remapKey('dis', 'dat')      // dis -> dat
  .from({dis: 1, other: true})
  .get('dat') === 1
```

### 👣 traverse

<!-- - src
- test
- example
- more (traverse-js)
 -->


traverse any data type deeply, match values <code>&||</code> keys, optional callback <code>.onMatch</code>

<!-- <details>
<summary>
  <span><code>👀  <u>traverse any data type deeply, match values <code>&||</code> keys, optional callback <code>.onMatch</code>  <a href="#">🔗</a></u></code></span>
</summary> -->

<!-- TODO: gif input -->
<!-- TODO: image output -->

```js
const eh = {
  notme: 1,
  nested: {
    really: {
      deep: {
        super: false,
        canada: true,
        modules: [{parser: 'moose'}],
      },
      matchme: 'minime',
    },
  },
}

const cleaned = new Chain()
  .merge(eh)
  .traverse(false)
  .keys([/super/, /parser/])
  .vals([/minime/])
  .call(true)

cleaned === {
  notme: 1,
  nested: {
    really: {
      // stripped matchme: minime
      deep: {
        // stripped out super
        canada: true,
        modules: [], // stripped out parser
      },
    },
  },
}
```
<!-- </details> -->
