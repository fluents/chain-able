# Shorthands.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `ShorthandChain.prototype`
* <a href="#ShorthandChain-prototype-return">`ShorthandChain.prototype.return`</a>
* <a href="#ShorthandChain-prototype-setIfEmpty">`ShorthandChain.prototype.setIfEmpty`</a>
* <a href="#ShorthandChain-prototype-wrap">`ShorthandChain.prototype.wrap`</a>

<!-- /div -->

<!-- div -->

## `Shorthands.prototype`
* <a href="#Shorthands-prototype-exports">`Shorthands.prototype.exports`</a>

<!-- /div -->

<!-- div -->

## `debug`
* <a href="#debug">`debug`</a>

<!-- /div -->

<!-- div -->

## `isUndefined`
* <a href="#isUndefined">`isUndefined`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `ShorthandChain.prototype`

<!-- div -->

<h3 id="ShorthandChain-prototype-return"><a href="#ShorthandChain-prototype-return">#</a>&nbsp;<code>ShorthandChain.prototype.return(value=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Shorthands.js#L175 "View in source") [&#x24C9;][1]

returns any value passed in return a value at the end of a chain regardless

#### Since
3.0.0

#### Arguments
1. `value=undefined` *(any)*: value to return at the end of a chain

#### Returns
*(ShorthandChain)*: @chainable

#### Example
```js
const chain = new Chain()

const saveAndDebug = env =>
  chain.from({ env: env.NODE_ENV }).return(JSON.stringify(env))

console.log(saveAndDebug(process.env))
//=> value of process.env

```
---

<!-- /div -->

<!-- div -->

<h3 id="ShorthandChain-prototype-setIfEmpty"><a href="#ShorthandChain-prototype-setIfEmpty">#</a>&nbsp;<code>ShorthandChain.prototype.setIfEmpty(name=undefined, value=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Shorthands.js#L149 "View in source") [&#x24C9;][1]

sets a value **only** when .has is false aka set if the value has not been set


### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js">fluents/chain able/blob/master/src/chained map.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/compose/DotProp.js">fluents/chain able/blob/master/src/compose/dot prop.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/matcher/any-key-val.js">fluents/chain able/blob/master/src/deps/matcher/any key val.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/traversers/eq.js">fluents/chain able/blob/master/src/deps/traversers/eq.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js">fluents/chain able/blob/master/src/deps/traverse.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/compose/DotProp.js">fluents/chain able/blob/master/src/compose/dot prop.js</a>
* <a href="https://github.com/ReactiveX/rxjs/blob/master/src/Subscriber.ts">reactive x/rxjs/blob/master/src/subscriber.ts</a>
* <a href="https://github.com/sindresorhus/awesome-observables">sindresorhus/awesome observables</a>
* <a href="https://medium.com/@benlesh/learning-observable-by-building-observable-d5da57405d87">@benlesh/learning observable by building observable d5da57405d87</a>
#### Since
1.0.2

#### Arguments
1. `name=undefined` *(Primitive)*: key to set if it has not been done so already
2. `value=undefined` *(any)*: value to set when key has not been already set

#### Returns
*(ShorthandChain)*: @chainable

#### Example
```js
const chain = new Chain()

chain.set('eh', true)

// eh is already set ^, ignored
chain.setIfEmpty('eh', false)

chain.get('eh')
//=> true

```
#### Example
```js
new Chain().setIfEmpty('canada', true).entries()
//=> {canada: true}

```
#### Example
```js
// longhand way to do the same thing
if (chain.has('eh') === false) {
  chain.set('eh', false)
}

// or using .when
chain.when(!chain.has('eh'), instance => instance.set('eh', false))

```
---

<!-- /div -->

<!-- div -->

<h3 id="ShorthandChain-prototype-wrap"><a href="#ShorthandChain-prototype-wrap">#</a>&nbsp;<code>ShorthandChain.prototype.wrap(fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Shorthands.js#L208 "View in source") [&#x24C9;][1]

wrap a value, if it's a Function call it, return this aka execute something and return this

#### Since
2.0.0

#### Arguments
1. `fn=undefined` *(Function|any)*: function to call, or just any value

#### Returns
*(ShorthandChain)*: @chainable

#### Example
```js
const { eh } = chain.wrap(chain => (chain.eh = true))
//=> true

```
#### Example
```js
new Chain()
  .wrap(
    encased =>
      (encased.fn = arg => {
        throw new Error('encased yo')
      })
  )
  .method('fn')
  .encase()
  .catch(error => {
    //=> Error('encasedYo')
  })
  .build()
  .fn(true)

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `Shorthands.prototype`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/test/shorthands.js">🔬  Tests: shorthands</a>&nbsp;

<h3 id="Shorthands-prototype-exports"><a href="#Shorthands-prototype-exports">#</a>&nbsp;<code>Shorthands.prototype.exports(SuperClass=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Shorthands.js#L44 "View in source") [&#x24C9;][1]




### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js">fluents/chain able/blob/master/src/chained map.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/compose/DotProp.js">fluents/chain able/blob/master/src/compose/dot prop.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/matcher/any-key-val.js">fluents/chain able/blob/master/src/deps/matcher/any key val.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/traversers/eq.js">fluents/chain able/blob/master/src/deps/traversers/eq.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js">fluents/chain able/blob/master/src/deps/traverse.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/compose/DotProp.js">fluents/chain able/blob/master/src/compose/dot prop.js</a>
* <a href="https://github.com/ReactiveX/rxjs/blob/master/src/Subscriber.ts">reactive x/rxjs/blob/master/src/subscriber.ts</a>
* <a href="https://github.com/sindresorhus/awesome-observables">sindresorhus/awesome observables</a>
* <a href="https://medium.com/@benlesh/learning-observable-by-building-observable-d5da57405d87">@benlesh/learning observable by building observable d5da57405d87</a>

[reactivex]: https://github.com/ReactiveX/rxjs/blob/master/src/Subscriber.ts <!-- NAMED_LINK -->


[awesome-observables]: https://github.com/sindresorhus/awesome-observables <!-- NAMED_LINK -->


[building-observables]: https://medium.com/@benlesh/learning-observable-by-building-observable-d5da57405d87 <!-- NAMED_LINK -->

#### Arguments
1. `SuperClass=undefined` *(Class|Composable)*: composable class

#### Returns
*(ShorthandChain)*: @chainable

#### Example
```js
const { compose } = require('chain-able')
const { DotProp } = compose
new DotProp()
//=> DotProp

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `debug`

<!-- div -->

<h3 id="debug"><a href="#debug">#</a>&nbsp;<code>debug([should=true])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Shorthands.js#L103 "View in source") [&#x24C9;][1]

sets on store not this.set for easier extension

#### Arguments
1. `[should=true]` *(boolean)*: shouldDebug

#### Returns
*(ShorthandChain)*: @chainable

#### Example
```js
const Chain = require('chain-able')
const chain = new Chain()
chain.debug()

chain.get('debug')
//=> true

// not in entries
chain.entries()
//=> {}

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `isUndefined`

<!-- div -->

<h3 id="isUndefined"><a href="#isUndefined">#</a>&nbsp;<code>isUndefined()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Shorthands.js#L4 "View in source") [&#x24C9;][1]



#### Since
2.0.0

#### Returns
*(ShorthandChain)*: @chainable

---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #shorthandchain.prototype "Jump back to the TOC."
