# 🤖 `transform` [🎼 ](https://github.com/fluents/chain-able/wiki/compose)

- [tap](#-tap)
- [remap](#-remap)
- [traverse](#-traverse)
- [related](#-related)

### 👆 tap

tap a value with a function

```js
new Chain()
  .set('eh', 'eh')
  .tap('eh', x => x + '!')
  .get('eh') === 'eh!'
```

this replaced the previous `.concat` and `.append`
in this simple example, when the existing value for `key` is an _array_ or a _string_, append `val` to it

```js
const {str, arr} = new Chain()
  .set('str', 'emptyish')
  .tap('str', str => str + '+')
  .set('arr', [1])
  .tap('arr', arr => arr.concat([2]))
  .entries()

str == 'emptyish+'
arr == [1, 2]
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

- modified [js-traverse][js-traverse]

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


## 🔗 related

- [map-factory][map-factory]
- [js-traverse][js-traverse]
- [tappable-webpack][tappable-webpack]
- [awesome-tap][awesome-tap]

[code]: https://github.com/fluents/chain-able/tree/master/src/MergeChain.js
[tests]: https://github.com/fluents/chain-able/tree/master/test/merge.js
[map-factory]: https://github.com/midknight41/map-factory
[js-traverse]: https://github.com/substack/js-traverse
[awesome-tap]: https://github.com/sindresorhus/awesome-tap
[tappable-webpack]: https://github.com/webpack/tapable
