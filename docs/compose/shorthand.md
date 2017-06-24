# 👂 `shorthand` [🎼 ](https://github.com/fluents/chain-able/wiki/compose)

> shorthand easy helper functions

- [api](#-api)
- [return](#return)
- [setIfEmpty](#setIfEmpty)
- [debug](#debug)
- [related](#-related)


```ts
export declare class ShorthandChain extends Composable, Chain {
  // sets a value only when .has is false
  public setIfEmpty(name: Primitive, value: any): ChainAble

  // returns any value passed in
  public return(value: any): any

  // wrap a value, if it's a Function call it, return this
  public wrap(fn: Fn): ChainAble

  // special property in .meta
  // @NOTE is inherited by any chain with a parent with .meta.debug
  public debug(should?: boolean): ChainAble
}
```

#### 🌐 api

#### `.debug()`

a unique property
  - available with `.get('debug')`,
  - settable by `.debug(boolean | string | any)`,
  - *is not in the .store* so it will not affect `.entries` or other functions
  - it is on .meta (which contains chain metadata for decorations, shorthands, debug, schema)


#### .setIfEmpty

set the value if it hasn't been set already

#### example
<!-- php is_empty() -->
<!-- could also use .initial -->

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

#### more

```js
chain.set('a', 1)
chain.setIfEmpty('a', 2)
chain.setIfEmpty('b', 3)

isTrue(chain.get('a') === 1)
isTrue(chain.get('b') === 3)
```

```js
const {foo} = chain.wrap(chain => chain.foo = true)
isTrue(foo)
```


### .return(arg): arg

**returns any value passed into it**, for things such as 1 line arrow functions

```js
const oneAndTrue = () => chain.set('one', 1).return(true)
isTrue(oneAndTrue())
```

<!-- # feature-full -->

## 🔗 related
- [code][code]
- [tests][tests]
- https://github.com/sindresorhus/awesome-tap
- https://github.com/webpack/tapable

[code]: https://github.com/fluents/chain-able/tree/master/src/compose/Shorthands.js
[tests]: https://github.com/fluents/chain-able/tree/master/test/shorthands.js
