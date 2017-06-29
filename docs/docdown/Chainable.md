# Chainable.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `[Iterator]`
* <a href="#[Iterator]">`&#91;Iterator&#93;`</a>

<!-- /div -->

<!-- div -->

## `[Primitive]`
* <a href="#[Primitive]">`&#91;Primitive&#93;`</a>

<!-- /div -->

<!-- div -->

## `clear`
* <a href="#clear">`clear`</a>

<!-- /div -->

<!-- div -->

## `compose`
* <a href="#compose">`compose`</a>

<!-- /div -->

<!-- div -->

## `delete`
* <a href="#delete">`delete`</a>

<!-- /div -->

<!-- div -->

## `end`
* <a href="#end">`end`</a>

<!-- /div -->

<!-- div -->

## `has`
* <a href="#has">`has`</a>

<!-- /div -->

<!-- div -->

## `values`
* <a href="#values">`values`</a>

<!-- /div -->

<!-- div -->

## `when`
* <a href="#when">`when`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `[Iterator]`

<!-- div -->

<h3 id="[Iterator]"><a href="#[Iterator]">#</a>&nbsp;<code>[Iterator]()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L66 "View in source") [&#x24C9;][1]



#### Since
0.5.0

#### Returns
*(Object)*: {value: undefined | any, done: true | false}

#### Example
```js
const chain = new Chain().set('eh', 1)
   for (var [key, val] of chain) console.log({[key]: val})
   //=> {eh: 1}
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `[Primitive]`

<!-- div -->

<h3 id="[Primitive]"><a href="#[Primitive]">#</a>&nbsp;<code>[Primitive](hint)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L283 "View in source") [&#x24C9;][1]



#### Since
1.0.2

#### Arguments
1. `hint` *(string)*: enum&#91;default, string, number&#93;

#### Returns
*(Primitive)*:

#### Example
```js
const chain = new Chain()
 chain.toNumber = () => 1
 +chain;
 //=> 1
 chain + 1
 //=>
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `clear`

<!-- div -->

<h3 id="clear"><a href="#clear">#</a>&nbsp;<code>clear([clearPropertiesThatAreChainLike=true])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L177 "View in source") [&#x24C9;][1]



#### Since
4.0.0 *(moved only to Chainable, added option to clear this keys)*

#### Arguments
1. `[clearPropertiesThatAreChainLike=true]` *(|boolean)*: checks properties on the object, if they are `chain-like`, clears them as well

#### Returns
*(Chainable)*: @chainable

#### Example
```js
const chain = new Chain()
 chain.set('eh', 1)
 chain.entries()
 //=> {eh: 1}
 chain.clear()
 chain.entries()
 //=> {}
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `compose`

<!-- div -->

<h3 id="compose"><a href="#compose">#</a>&nbsp;<code>compose</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L343 "View in source") [&#x24C9;][1]



#### Since
3.0.0

#### Example
```js
class Target {}
 const TargetChain = Chainable.compose(Target)
 const chain = new TargetChain()
 chain instanceof Target
 //=> true
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `delete`

<!-- div -->

<h3 id="delete"><a href="#delete">#</a>&nbsp;<code>delete(key)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L212 "View in source") [&#x24C9;][1]



#### Since
0.3.0

#### Arguments
1. `key` *(Primitive)*: on a Map: key referencing the value. on a Set: the index

#### Returns
*(Chainable)*:

#### Example
```js
const chain = new Chain()
   chain.set('eh', 1)
   chain.get('eh')
   // => 1
   chain.delete('eh', 1)
   chain.get('eh')
   // => undefined
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `end`

<!-- div -->

<h3 id="end"><a href="#end">#</a>&nbsp;<code>end()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L106 "View in source") [&#x24C9;][1]



#### Since
0.4.0

#### Returns
*(&#42;)*:

#### Example
```js
const parent = 'eh'
   const child = newChain(parent)
   child.end()
   //=> 'eh'
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `has`

<!-- div -->

<h3 id="has"><a href="#has">#</a>&nbsp;<code>has(keyOrValue)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L232 "View in source") [&#x24C9;][1]



#### Since
0.3.0

#### Arguments
1. `keyOrValue` *(any)*: key when Map, value when Set

#### Returns
*(boolean)*:

#### Example
```js
const chain = new Chain()
  chain.set('eh', 1).has('eh')
  //=> true
  chain.has('canada')
  //=> false
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `values`

<!-- div -->

<h3 id="values"><a href="#values">#</a>&nbsp;<code>values()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L254 "View in source") [&#x24C9;][1]



#### Since
0.4.0

#### Returns
*(&#42;)*:

#### Example
```js
const chain = new Chain()
 chain.set('eh', 1)
 chain.values()
 //=> [1]
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `when`

<!-- div -->

<h3 id="when"><a href="#when">#</a>&nbsp;<code>when(condition, [trueBrancher=Function], [falseBrancher=Function])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L132 "View in source") [&#x24C9;][1]



#### Since
4.0.0 <- added string-as-has(condition)

#### Arguments
1. `condition` *(boolean|string)*: when string, checks this.get
2. `[trueBrancher=Function]` *(Function)*: called when true
3. `[falseBrancher=Function]` *(Function)*: called when false

#### Returns
*(ChainedMap)*:

#### Example
```js
const prod = process.env.NODE_ENV === 'production'
 chains.when(prod, c => c.set('prod', true), c => c.set('prod', false))
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #[iterator] "Jump back to the TOC."
