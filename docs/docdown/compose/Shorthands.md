# Shorthands.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `ShorthandChain.prototype`
* <a href="#ShorthandChain-prototype-setIfEmpty">`ShorthandChain.prototype.setIfEmpty`</a>

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

<!-- div -->

## `return`
* <a href="#return">`return`</a>

<!-- /div -->

<!-- div -->

## `wrap`
* <a href="#wrap">`wrap`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `ShorthandChain.prototype`

<!-- div -->

<h3 id="ShorthandChain-prototype-setIfEmpty"><a href="#ShorthandChain-prototype-setIfEmpty">#</a>&nbsp;<code>ShorthandChain.prototype.setIfEmpty(name, value)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Shorthands.js#L129 "View in source") [&#x24C9;][1]



#### Since
1.0.2

#### Arguments
1. `name` *(Primitive)*: key to set if it has not been done so already
2. `value` *(any)*: value to set when key has not been already set

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
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `Shorthands.prototype`

<!-- div -->

<h3 id="Shorthands-prototype-exports"><a href="#Shorthands-prototype-exports">#</a>&nbsp;<code>Shorthands.prototype.exports(SuperClass)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Shorthands.js#L44 "View in source") [&#x24C9;][1]



#### Arguments
1. `SuperClass` *(Class|Composable)*: composable class

#### Returns
*(Shorthands)*: class

#### Example
```js
const {compose} = require('chain-able')
   const {DotProp} = compose
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
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Shorthands.js#L83 "View in source") [&#x24C9;][1]



#### Since
4.0.0 <- moved from Extend to Shorthands

#### Arguments
1. `[should=true]` *(boolean)*: shouldDebug

#### Returns
*(Chainable)*: @chainable

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

<h3 id="isUndefined"><a href="#isUndefined">#</a>&nbsp;<code>isUndefined</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Shorthands.js#L4 "View in source") [&#x24C9;][1]



#### Since
2.0.0

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `return`

<!-- div -->

<h3 id="return"><a href="#return">#</a>&nbsp;<code>return(value)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Shorthands.js#L156 "View in source") [&#x24C9;][1]



#### Since
3.0.0

#### Arguments
1. `value` *(any)*: value to return at the end of a chain

#### Returns
*(any)*: value

#### Example
```js
const chain = new Chain()

   const saveAndDebug = env => chain
     .from({env: env.NODE_ENV})
     .return(JSON.stringify(env))

   console.log(saveAndDebug(process.env))
   //=> value of process.env
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `wrap`

<!-- div -->

<h3 id="wrap"><a href="#wrap">#</a>&nbsp;<code>wrap(fn)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Shorthands.js#L168 "View in source") [&#x24C9;][1]



#### Since
2.0.0

#### Arguments
1. `fn` *(any)*:

#### Returns
*(This)*: @chainable

---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #shorthandchain.prototype "Jump back to the TOC."
