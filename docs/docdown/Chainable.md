# Chainable.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `Chainable`
* <a href="#">``</a>

<!-- /div -->

<!-- div -->

## `Chainable.constructor`
* <a href="#Chainable-constructor">`Chainable.constructor`</a>

<!-- /div -->

<!-- div -->

## `Chainable.prototype`
* <a href="#Chainable-prototype-">`Chainable.prototype.`</a>
* <a href="#Chainable-prototype-[Iterator]">`Chainable.prototype.&#91;Iterator&#93;`</a>
* <a href="#Chainable-prototype-[Primitive]">`Chainable.prototype.&#91;Primitive&#93;`</a>
* <a href="#Chainable-prototype-clear">`Chainable.prototype.clear`</a>
* <a href="#Chainable-prototype-delete">`Chainable.prototype.delete`</a>
* <a href="#Chainable-prototype-end">`Chainable.prototype.end`</a>
* <a href="#Chainable-prototype-has">`Chainable.prototype.has`</a>
* <a href="#Chainable-prototype-length">`Chainable.prototype.length`</a>
* <a href="#Chainable-prototype-values">`Chainable.prototype.values`</a>
* <a href="#Chainable-prototype-when">`Chainable.prototype.when`</a>

<!-- /div -->

<!-- div -->

## `if`
* <a href="#if">`if`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `Chainable`

<!-- div -->

<h3 id=""><a href="#">#</a>&nbsp;<code>compose</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L445 "View in source") [&#x24C9;][1]

unknown

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

## `Chainable.constructor`

<!-- div -->

<h3 id="Chainable-constructor"><a href="#Chainable-constructor">#</a>&nbsp;<code>Chainable.constructor(parent=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L65 "View in source") [&#x24C9;][1]

Function

#### Since
0.0.1

#### Arguments
1. `parent=undefined` *(Chainable|ParentType|any)*: ParentType

#### Example
```js
class ChainedMap extends Chainable {}
const map = new ChainedMap()
map.className
//=> ChainedMap

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `Chainable.prototype`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/typings/Chainable.d.ts">🌊  Types: Chainable.d</a>&nbsp;

<a href="https://github.com/fluents/chain-able/blob/master/test/Chainable.js">🔬  Tests: Chainable</a>&nbsp;

<h3 id="Chainable-prototype-"><a href="#Chainable-prototype-">#</a>&nbsp;<code>Chainable.prototype.</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L49 "View in source") [&#x24C9;][1]

(Chainable): Trait class that can inherit any class passed into compose, extended by ChainedMap & ChainedSet


### @classProps 

* {parent}  
* {className} {@link https://github.com/iluwatar/java-design-patterns/tree/master/chain chain-pattern} 
 
---

<!-- /div -->

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/test/iteration.js">🔬  Tests: iteration</a>&nbsp;

<h3 id="Chainable-prototype-[Iterator]"><a href="#Chainable-prototype-[Iterator]">#</a>&nbsp;<code>Chainable.prototype.[Iterator]()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L117 "View in source") [&#x24C9;][1]

(generator): Iterator for looping values in the store


### @notes 

* assigned to a variable so buble ignores it
 
#### Since
0.5.0

#### Returns
*(Object)*: {value: undefined | any, done: true | false}

#### Example
```js
const chain = new Chain().set('eh', 1)
for (var [key, val] of chain) console.log({ [key]: val })
//=> {eh: 1}

```
#### Example
```js
*[Symbol.iterator](): void { for (const item of this.store) yield item }
```
#### Example
```js
const { ChainedSet } = require('chain-able')
const set = new ChainedSet()
set.add('eh')

for (const arr of set) {
  const [key, val] = arr

  key
  //=> 0

  val
  //=> 'eh'

  arr.length
  //=> 2
}

```
---

<!-- /div -->

<!-- div -->

<h3 id="Chainable-prototype-[Primitive]"><a href="#Chainable-prototype-[Primitive]">#</a>&nbsp;<code>Chainable.prototype.[Primitive](hint=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L382 "View in source") [&#x24C9;][1]

Function

#### Since
1.0.2

#### Arguments
1. `hint=undefined` *(string)*: enum&#91;default, string, number&#93;

#### Returns
*(Primitive)*:

#### Example
```js
const chain = new Chain()
chain.toNumber = () => 1 + chain
//=> 1
chain + 1
//=>

```
#### Example
```js
const chain = new Chain()
chain.toString = () => 'eh'
chain + ''
//=> 'eh'

```
---

<!-- /div -->

<!-- div -->

<h3 id="Chainable-prototype-clear"><a href="#Chainable-prototype-clear">#</a>&nbsp;<code>Chainable.prototype.clear([clearPropertiesThatAreChainLike=true])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L236 "View in source") [&#x24C9;][1]

(Function): clears the map, goes through this properties, calls .clear if they are instanceof Chainable or Map

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

<!-- div -->

<h3 id="Chainable-prototype-delete"><a href="#Chainable-prototype-delete">#</a>&nbsp;<code>Chainable.prototype.delete(key=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L275 "View in source") [&#x24C9;][1]

(Function): calls .delete on this.store.map

#### Since
0.3.0

#### Arguments
1. `key=undefined` *(Primitive)*: on a Map: key referencing the value. on a Set: the index

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

<!-- div -->

<h3 id="Chainable-prototype-end"><a href="#Chainable-prototype-end">#</a>&nbsp;<code>Chainable.prototype.end()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L162 "View in source") [&#x24C9;][1]

(Function): for ending nested chains

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

<!-- div -->

<h3 id="Chainable-prototype-has"><a href="#Chainable-prototype-has">#</a>&nbsp;<code>Chainable.prototype.has(keyOrValue=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L298 "View in source") [&#x24C9;][1]

Function

#### Since
0.3.0

#### Arguments
1. `keyOrValue=undefined` *(any)*: key when Map, value when Set

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

<!-- div -->

<h3 id="Chainable-prototype-length"><a href="#Chainable-prototype-length">#</a>&nbsp;<code>Chainable.prototype.length()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L416 "View in source") [&#x24C9;][1]

Function

#### Since
0.5.0

#### Returns
*(number)*:

#### Example
```js
for (var i = 0; i < chain.length; i++)
```
---

<!-- /div -->

<!-- div -->

<h3 id="Chainable-prototype-values"><a href="#Chainable-prototype-values">#</a>&nbsp;<code>Chainable.prototype.values()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L334 "View in source") [&#x24C9;][1]

(Function): spreads the entries from ChainedMap.store.values allocates a new array, adds the values from the iterator


### @notes 

* look at Chainable.constructor to ensure not to use `new Array...`
* moved from ChainedMap and ChainedSet to Chainable @2.0.2
* this was [...] & Array.from(this.store.values())

{@link https://kangax.github.io/compat-table/es6/#test-Array_static_methods compat-array-static-methods}
{@link https://stackoverflow.com/questions/20069828/how-to-convert-set-to-array set-to-array}
{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values mozilla-map-values}
{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/values mozilla-set-values}
 
#### Since
0.4.0

#### Returns
*(&#42;): toArr(this.store.values())*

#### Example
```js
const chain = new Chain()
chain.set('eh', 1)
chain.values()
//=> [1]

```
---

<!-- /div -->

<!-- div -->

<h3 id="Chainable-prototype-when"><a href="#Chainable-prototype-when">#</a>&nbsp;<code>Chainable.prototype.when(condition=undefined, [trueBrancher=Function], [falseBrancher=Function])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L188 "View in source") [&#x24C9;][1]

(Function): when the condition is true, trueBrancher is called, else, falseBrancher is called

#### Arguments
1. `condition=undefined` *(boolean|string)*: when string, checks this.get
2. `[trueBrancher=Function]` *(Function)*: called when true
3. `[falseBrancher=Function]` *(Function)*: called when false

#### Returns
*(Chainable)*: @chainable

#### Example
```js
const prod = process.env.NODE_ENV === 'production'
chains.when(prod, c => c.set('prod', true), c => c.set('prod', false))

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `if`

<!-- div -->

<h3 id="if"><a href="#if">#</a>&nbsp;<code>if()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L394 "View in source") [&#x24C9;][1]

(Function): hint === 'number'
`s`tring is `115`
`n`umber is `110`
110 & `4` = `1`
115 & `4` = `0`
<br>
<br>
if *(hint === 'string' && this.toJSON) return this.toJSON()*
else if *(hint === 'number' && this.toNumber) return this.toNumber()*

---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #chainable "Jump back to the TOC."
