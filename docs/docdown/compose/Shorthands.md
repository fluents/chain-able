# Shorthands.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `ShorthandChain`
* <a href="#ShorthandChain-prototype-return"  data-meta="return value undefined"  data-call="return value undefined"  data-category="Methods"  data-description="Function returns any value passed in return a value at the end of a chain regardless"  data-name="return"  data-member="ShorthandChain"  data-all="meta return value undefined call return value undefined category Methods description Function returns any value passed in return a value at the end of a chain regardless name return member ShorthandChain see notes todos klassProps" >`ShorthandChain.return`</a>
* <a href="#ShorthandChain-prototype-setIfEmpty"  data-meta="setIfEmpty name undefined value undefined"  data-call="setIfEmpty name undefined value undefined"  data-category="Methods"  data-description="Function sets a value only when has is false aka set if the value has not been set"  data-name="setIfEmpty"  data-member="ShorthandChain"  data-all="meta setIfEmpty name undefined value undefined call setIfEmpty name undefined value undefined category Methods description Function sets a value only when has is false aka set if the value has not been set name setIfEmpty member ShorthandChain see notes todos klassProps" >`ShorthandChain.setIfEmpty`</a>
* <a href="#ShorthandChain-prototype-wrap"  data-meta="wrap fn undefined"  data-call="wrap fn undefined"  data-category="Methods"  data-description="Function wrap a value if it s a Function call it return this aka execute something and return this"  data-name="wrap"  data-member="ShorthandChain"  data-all="meta wrap fn undefined call wrap fn undefined category Methods description Function wrap a value if it s a Function call it return this aka execute something and return this name wrap member ShorthandChain see notes todos klassProps" >`ShorthandChain.wrap`</a>

<!-- /div -->

<!-- div -->

## `Shorthands`
* <a href="#Shorthands-prototype-exports"  data-meta="ChainedMap DotProp exports Target undefined"  data-call="exports Target undefined"  data-category="Chainable"  data-description="Function"  data-name="exports"  data-member="Shorthands"  data-all="meta ChainedMap DotProp n n exports Target undefined call exports Target undefined category Chainable description Function name exports member Shorthands see notes todos klassProps" >`Shorthands.exports`</a>

<!-- /div -->

<!-- div -->

## `debug`
* <a href="#debug"  data-meta="debug should true"  data-call="debug should true"  data-category="Methods"  data-description="Function sets on store not this set for easier extension"  data-name="debug"  data-notes="is inherited by any chain with a parent with meta debug"  data-all="meta debug should true call debug should true category Methods description Function sets on store not this set for easier extension name debug member see notes is inherited by any chain with a parent with meta debug n todos klassProps" >`debug`</a>

<!-- /div -->

<!-- div -->

## `isUndefined`
* <a href="#isUndefined"  data-meta="isUndefined"  data-call="isUndefined"  data-category="Properties"  data-description="unknown"  data-name="isUndefined"  data-all="meta isUndefined call isUndefined category Properties description unknown name isUndefined member see notes todos klassProps" >`isUndefined`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `ShorthandChain`

<!-- div -->

<h3 id="ShorthandChain-prototype-return" data-member="ShorthandChain" data-category="Methods" data-name="return"><code>ShorthandChain.return(value=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Shorthands.js#L176 "View in source") [&#x24C9;][1]

(Function): returns any value passed in return a value at the end of a chain regardless


#### @Since
3.0.0

#### Arguments
1. `value=undefined` *(any)*: value to return at the end of a chain

#### Returns
*(any)*: value

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

<h3 id="ShorthandChain-prototype-setIfEmpty" data-member="ShorthandChain" data-category="Methods" data-name="setIfEmpty"><code>ShorthandChain.setIfEmpty(name=undefined, value=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Shorthands.js#L150 "View in source") [&#x24C9;][1]

(Function): sets a value **only** when .has is false aka set if the value has not been set


#### @Since
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

<h3 id="ShorthandChain-prototype-wrap" data-member="ShorthandChain" data-category="Methods" data-name="wrap"><code>ShorthandChain.wrap(fn=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Shorthands.js#L209 "View in source") [&#x24C9;][1]

(Function): wrap a value, if it's a Function call it, return this aka execute something and return this


#### @Since
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

## `Shorthands`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/test/shorthands.js">🔬  Tests: shorthands</a>&nbsp;

<h3 id="Shorthands-prototype-exports" data-member="Shorthands" data-category="Chainable" data-name="exports"><code>Shorthands.exports(Target=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Shorthands.js#L30 "View in source") [&#x24C9;][1]

Function


#### @extends 

* ChainedMap
* DotProp


#### Arguments
1. `Target=undefined` *(Class|Composable)*: composable class

#### Returns
*(Shorthands)*: class

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

<h3 id="debug" data-member="" data-category="Methods" data-name="debug"><code>debug([should=true])</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Shorthands.js#L104 "View in source") [&#x24C9;][1]

(Function): sets on store not this.set for easier extension


#### @notes 

* is inherited by any chain with a parent with .meta.debug
 
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

<h3 id="isUndefined" data-member="" data-category="Properties" data-name="isUndefined"><code>isUndefined</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Shorthands.js#L4 "View in source") [&#x24C9;][1]

unknown


#### @Since
2.0.0

---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #shorthandchain "Jump back to the TOC."
