# Chainable.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `Chainable`
* <a href="#"  data-meta="compose"  data-call="compose"  data-category="Properties"  data-description="unknown"  data-all="meta compose call compose category Properties description unknown name member see notes todos klassProps" >``</a>
* <a href="#Chainable-prototype-"  data-category="Chainable"  data-description="Chainable Trait class that can inherit any class passed into compose extended by ChainedMap ChainedSet"  data-member="Chainable"  data-klassProps="parent className"  data-all="meta call category Chainable description Chainable Trait class that can inherit any class passed into compose extended by ChainedMap ChainedSet name member Chainable see notes todos klassProps parent n className n" >`Chainable.`</a>
* <a href="#Chainable-prototype-[Iterator]"  data-meta="Iterator"  data-call="Iterator"  data-category="Properties"  data-description="generator Iterator for looping values in the store"  data-name="Iterator"  data-member="Chainable"  data-notes="assigned to a variable so buble ignores it"  data-all="meta Iterator call Iterator category Properties description generator Iterator for looping values in the store name Iterator member Chainable see notes assigned to a variable so buble ignores it n todos klassProps" >`Chainable.&#91;Iterator&#93;`</a>
* <a href="#Chainable-prototype-[Primitive]"  data-meta="Primitive hint undefined"  data-call="Primitive hint undefined"  data-category="Methods"  data-description="Function"  data-name="Primitive"  data-member="Chainable"  data-all="meta Primitive hint undefined call Primitive hint undefined category Methods description Function name Primitive member Chainable see notes todos klassProps" >`Chainable.&#91;Primitive&#93;`</a>
* <a href="#Chainable-prototype-clear"  data-meta="clear clearPropertiesThatAreChainLike true"  data-call="clear clearPropertiesThatAreChainLike true"  data-category="Methods"  data-description="Function clears the map goes through this properties calls clear if they are instanceof Chainable or Map"  data-name="clear"  data-member="Chainable"  data-all="meta clear clearPropertiesThatAreChainLike true call clear clearPropertiesThatAreChainLike true category Methods description Function clears the map goes through this properties calls clear if they are instanceof Chainable or Map name clear member Chainable see notes todos klassProps" >`Chainable.clear`</a>
* <a href="#Chainable-prototype-delete"  data-meta="delete key undefined"  data-call="delete key undefined"  data-category="Methods"  data-description="Function calls delete on this store map"  data-name="delete"  data-member="Chainable"  data-all="meta delete key undefined call delete key undefined category Methods description Function calls delete on this store map name delete member Chainable see notes todos klassProps" >`Chainable.delete`</a>
* <a href="#Chainable-prototype-end"  data-meta="end"  data-call="end"  data-category="Methods"  data-description="Function for ending nested chains"  data-name="end"  data-member="Chainable"  data-all="meta end call end category Methods description Function for ending nested chains name end member Chainable see notes todos klassProps" >`Chainable.end`</a>
* <a href="#Chainable-prototype-has"  data-meta="has keyOrValue undefined"  data-call="has keyOrValue undefined"  data-category="Methods"  data-description="Function"  data-name="has"  data-member="Chainable"  data-all="meta has keyOrValue undefined call has keyOrValue undefined category Methods description Function name has member Chainable see notes todos klassProps" >`Chainable.has`</a>
* <a href="#Chainable-prototype-length"  data-meta="length"  data-call="length"  data-category="Methods"  data-description="Function"  data-name="length"  data-member="Chainable"  data-all="meta length call length category Methods description Function name length member Chainable see notes todos klassProps" >`Chainable.length`</a>
* <a href="#Chainable-prototype-values"  data-meta="values"  data-call="values"  data-category="Methods"  data-description="Function spreads the entries from ChainedMap store values allocates a new array adds the values from the iterator"  data-name="values"  data-member="Chainable"  data-notes="look at Chainable constructor to ensure not to use new Array moved from ChainedMap and ChainedSet to Chainable 2 0 2 this was Array from this store values"  data-all="meta values call values category Methods description Function spreads the entries from ChainedMap store values allocates a new array adds the values from the iterator name values member Chainable see notes look at Chainable constructor to ensure not to use new Array n moved from ChainedMap and ChainedSet to Chainable 2 0 2 n this was Array from this store values n todos klassProps" >`Chainable.values`</a>
* <a href="#Chainable-prototype-when"  data-meta="when condition undefined trueBrancher Function falseBrancher Function"  data-call="when condition undefined trueBrancher Function falseBrancher Function"  data-category="Methods"  data-description="Function when the condition is true trueBrancher is called else falseBrancher is called"  data-name="when"  data-member="Chainable"  data-all="meta when condition undefined trueBrancher Function falseBrancher Function call when condition undefined trueBrancher Function falseBrancher Function category Methods description Function when the condition is true trueBrancher is called else falseBrancher is called name when member Chainable see notes todos klassProps" >`Chainable.when`</a>

<!-- /div -->

<!-- div -->

## `Chainable.constructor`
* <a href="#Chainable-constructor"  data-meta="constructor parent undefined"  data-call="constructor parent undefined"  data-category="Methods"  data-description="Function"  data-name="constructor"  data-member="Chainable"  data-all="meta constructor parent undefined call constructor parent undefined category Methods description Function name constructor member Chainable see notes todos klassProps" >`Chainable.constructor`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `Chainable`

<!-- div -->

<h3 id="" data-member="" data-category="Properties" data-name="Chainable"><code>compose</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L446 "View in source") [&#x24C9;][1]

unknown


#### @Since
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

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/typings/Chainable.d.ts">🌊  Types: Chainable.d</a>&nbsp;

<a href="https://github.com/fluents/chain-able/blob/master/test/Chainable.js">🔬  Tests: Chainable</a>&nbsp;

<h3 id="Chainable-prototype-" data-member="Chainable" data-category="Chainable" data-name="Chainable"><code>Chainable.</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L10 "View in source") [&#x24C9;][1]

(Chainable): Trait class that can inherit any class passed into compose, extended by ChainedMap & ChainedSet


#### @classProps 

* {parent}  
* {className}  
 
---

<!-- /div -->

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/test/iteration.js">🔬  Tests: iteration</a>&nbsp;

<h3 id="Chainable-prototype-[Iterator]" data-member="Chainable" data-category="Properties" data-name="[Iterator]"><code>Chainable.[Iterator]()</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L118 "View in source") [&#x24C9;][1]

(generator): Iterator for looping values in the store


#### @notes 

* assigned to a variable so buble ignores it
 

#### @Since
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

<h3 id="Chainable-prototype-[Primitive]" data-member="Chainable" data-category="Methods" data-name="[Primitive]"><code>Chainable.[Primitive](hint=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L383 "View in source") [&#x24C9;][1]

Function


#### @Since
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

<h3 id="Chainable-prototype-clear" data-member="Chainable" data-category="Methods" data-name="clear"><code>Chainable.clear([clearPropertiesThatAreChainLike=true])</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L237 "View in source") [&#x24C9;][1]

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

<h3 id="Chainable-prototype-delete" data-member="Chainable" data-category="Methods" data-name="delete"><code>Chainable.delete(key=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L276 "View in source") [&#x24C9;][1]

(Function): calls .delete on this.store.map


#### @Since
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

<h3 id="Chainable-prototype-end" data-member="Chainable" data-category="Methods" data-name="end"><code>Chainable.end()</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L163 "View in source") [&#x24C9;][1]

(Function): for ending nested chains


#### @Since
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

<h3 id="Chainable-prototype-has" data-member="Chainable" data-category="Methods" data-name="has"><code>Chainable.has(keyOrValue=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L299 "View in source") [&#x24C9;][1]

Function


#### @Since
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

<h3 id="Chainable-prototype-length" data-member="Chainable" data-category="Methods" data-name="length"><code>Chainable.length()</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L417 "View in source") [&#x24C9;][1]

Function


#### @Since
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

<h3 id="Chainable-prototype-values" data-member="Chainable" data-category="Methods" data-name="values"><code>Chainable.values()</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L19 "View in source") [&#x24C9;][1]

(Function): spreads the entries from ChainedMap.store.values allocates a new array, adds the values from the iterator


#### @notes 

* look at Chainable.constructor to ensure not to use `new Array...`
* moved from ChainedMap and ChainedSet to Chainable @2.0.2
* this was [...] & Array.from(this.store.values())
 

#### @Since
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

<h3 id="Chainable-prototype-when" data-member="Chainable" data-category="Methods" data-name="when"><code>Chainable.when(condition=undefined, [trueBrancher=Function], [falseBrancher=Function])</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L189 "View in source") [&#x24C9;][1]

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

## `Chainable.constructor`

<!-- div -->

<h3 id="Chainable-constructor" data-member="Chainable" data-category="Methods" data-name="constructor"><code>Chainable.constructor(parent=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L66 "View in source") [&#x24C9;][1]

Function


#### @Since
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

<!-- /div -->

 [1]: #chainable "Jump back to the TOC."
