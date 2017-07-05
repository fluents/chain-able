# Chainable.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `Chainable.prototype`
* <a href="#Chainable-prototype-">`Chainable.prototype.`</a>

<!-- /div -->

<!-- div -->

## `ObjectDefine`
* <a href="#ObjectDefine">`ObjectDefine`</a>

<!-- /div -->

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

## `if`
* <a href="#if">`if`</a>

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

## `Chainable.prototype`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/typings/Chainable.d.ts">🌊  Types: Chainable.d</a>&nbsp;

<a href="https://github.com/fluents/chain-able/blob/master/test/Chainable.js">🔬  Tests: Chainable</a>&nbsp;

<h3 id="Chainable-prototype-"><a href="#Chainable-prototype-">#</a>&nbsp;<code>Chainable.prototype.</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L49 "View in source") [&#x24C9;][1]

(Chainable): Trait class that can inherit any class passed into compose, extended by ChainedMap & ChainedSet


### @see 

* <a href="https://github.com/iluwatar/java-design-patterns/tree/master/chain">iluwatar/java design patterns/tree/master/chain</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js">fluents/chain able/blob/master/src/chained map.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedSet.js">fluents/chain able/blob/master/src/chained set.js</a>

[chain-pattern]: https://github.com/iluwatar/java-design-patterns/tree/master/chain <!-- NAMED_LINK -->

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `ObjectDefine`

<!-- div -->

<h3 id="ObjectDefine"><a href="#ObjectDefine">#</a>&nbsp;<code>ObjectDefine()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L380 "View in source") [&#x24C9;][1]




### @see 

* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values">Developer.mozilla.org/en us/docs/web/java script/reference/global objects/map/values</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/values">Developer.mozilla.org/en us/docs/web/java script/reference/global objects/set/values</a>
* <a href="https://github.com/fluents/chain-able/blob/masterhttps://kangax.github.io/compat-table/es6/#test-Array_static_methods">fluents/chain able/blob/masterhttps:/kangax.github.io/compat table/es6</a>
* <a href="https://stackoverflow.com/questions/20069828/how-to-convert-set-to-array">questions/20069828/how to convert set to array</a>
#### Since
0.5.0

#### Example
```js
for (var i = 0; i < chain.length; i++)
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `[Iterator]`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/test/iteration.js">🔬  Tests: iteration</a>&nbsp;

<h3 id="[Iterator]"><a href="#[Iterator]">#</a>&nbsp;<code>[Iterator]()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L112 "View in source") [&#x24C9;][1]

(generator): Iterator for looping values in the store


### @see 

* <a href="https://github.com/iluwatar/java-design-patterns/tree/master/chain">iluwatar/java design patterns/tree/master/chain</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js">fluents/chain able/blob/master/src/chained map.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedSet.js">fluents/chain able/blob/master/src/chained set.js</a>
#### Since
0.5.0

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

<!-- /div -->

<!-- div -->

## `[Primitive]`

<!-- div -->

<h3 id="[Primitive]"><a href="#[Primitive]">#</a>&nbsp;<code>[Primitive](hint=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L349 "View in source") [&#x24C9;][1]




### @see 

* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values">Developer.mozilla.org/en us/docs/web/java script/reference/global objects/map/values</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/values">Developer.mozilla.org/en us/docs/web/java script/reference/global objects/set/values</a>
* <a href="https://github.com/fluents/chain-able/blob/masterhttps://kangax.github.io/compat-table/es6/#test-Array_static_methods">fluents/chain able/blob/masterhttps:/kangax.github.io/compat table/es6</a>
* <a href="https://stackoverflow.com/questions/20069828/how-to-convert-set-to-array">questions/20069828/how to convert set to array</a>
#### Since
1.0.2

#### Arguments
1. `hint=undefined` *(string)*: enum&#91;default, string, number&#93;

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

<!-- /div -->

<!-- div -->

## `clear`

<!-- div -->

<h3 id="clear"><a href="#clear">#</a>&nbsp;<code>clear([clearPropertiesThatAreChainLike=true])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L226 "View in source") [&#x24C9;][1]

clears the map, goes through this properties, calls .clear if they are instanceof Chainable or Map


### @see 

* <a href="https://github.com/iluwatar/java-design-patterns/tree/master/chain">iluwatar/java design patterns/tree/master/chain</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js">fluents/chain able/blob/master/src/chained map.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedSet.js">fluents/chain able/blob/master/src/chained set.js</a>
#### Arguments
1. `[clearPropertiesThatAreChainLike=true]` *(|boolean)*: checks properties on the object, if they are `chain-like`, clears them as well

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
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L409 "View in source") [&#x24C9;][1]



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

<h3 id="delete"><a href="#delete">#</a>&nbsp;<code>delete(key=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L264 "View in source") [&#x24C9;][1]

calls .delete on this.store.map


### @see 

* <a href="https://github.com/iluwatar/java-design-patterns/tree/master/chain">iluwatar/java design patterns/tree/master/chain</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js">fluents/chain able/blob/master/src/chained map.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedSet.js">fluents/chain able/blob/master/src/chained set.js</a>
#### Since
0.3.0

#### Arguments
1. `key=undefined` *(Primitive)*: on a Map: key referencing the value. on a Set: the index

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
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L154 "View in source") [&#x24C9;][1]

for ending nested chains


### @see 

* <a href="https://github.com/iluwatar/java-design-patterns/tree/master/chain">iluwatar/java design patterns/tree/master/chain</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js">fluents/chain able/blob/master/src/chained map.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedSet.js">fluents/chain able/blob/master/src/chained set.js</a>
#### Since
0.4.0

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

<h3 id="has"><a href="#has">#</a>&nbsp;<code>has(keyOrValue=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L284 "View in source") [&#x24C9;][1]




### @see 

* <a href="https://github.com/iluwatar/java-design-patterns/tree/master/chain">iluwatar/java design patterns/tree/master/chain</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js">fluents/chain able/blob/master/src/chained map.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedSet.js">fluents/chain able/blob/master/src/chained set.js</a>
#### Since
0.3.0

#### Arguments
1. `keyOrValue=undefined` *(any)*: key when Map, value when Set

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

## `if`

<!-- div -->

<h3 id="if"><a href="#if">#</a>&nbsp;<code>if()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L361 "View in source") [&#x24C9;][1]

hint === 'number'
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

<!-- div -->

## `values`

<!-- div -->

<h3 id="values"><a href="#values">#</a>&nbsp;<code>values()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L319 "View in source") [&#x24C9;][1]

spreads the entries from ChainedMap.store.values allocates a new array, adds the values from the iterator


### @see 

* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values">Developer.mozilla.org/en us/docs/web/java script/reference/global objects/map/values</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/values">Developer.mozilla.org/en us/docs/web/java script/reference/global objects/set/values</a>
* <a href="https://github.com/fluents/chain-able/blob/masterhttps://kangax.github.io/compat-table/es6/#test-Array_static_methods">fluents/chain able/blob/masterhttps:/kangax.github.io/compat table/es6</a>
* <a href="https://stackoverflow.com/questions/20069828/how-to-convert-set-to-array">questions/20069828/how to convert set to array</a>

[compat-array-static-methods]: https://kangax.github.io/compat-table/es6/#test-Array_static_methods <!-- NAMED_LINK -->


[set-to-array]: https://stackoverflow.com/questions/20069828/how-to-convert-set-to-array <!-- NAMED_LINK -->


[mozilla-map-values]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values <!-- NAMED_LINK -->


[mozilla-set-values]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/values <!-- NAMED_LINK -->

#### Since
0.4.0

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

<h3 id="when"><a href="#when">#</a>&nbsp;<code>when(condition=undefined, [trueBrancher=Function], [falseBrancher=Function])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L179 "View in source") [&#x24C9;][1]

when the condition is true, trueBrancher is called, else, falseBrancher is called

#### Arguments
1. `condition=undefined` *(boolean|string)*: when string, checks this.get
2. `[trueBrancher=Function]` *(Function)*: called when true
3. `[falseBrancher=Function]` *(Function)*: called when false

#### Example
```js
const prod = process.env.NODE_ENV === 'production'
chains.when(prod, c => c.set('prod', true), c => c.set('prod', false))

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #chainable.prototype "Jump back to the TOC."
