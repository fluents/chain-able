# DotProp.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `DotProp.prototype`
* <a href="#DotProp-prototype-get">`DotProp.prototype.get`</a>
* <a href="#DotProp-prototype-set">`DotProp.prototype.set`</a>

<!-- /div -->

<!-- div -->

## `Observe.prototype`
* <a href="#Observe-prototype-exports">`Observe.prototype.exports`</a>

<!-- /div -->

<!-- div -->

## `delete`
* <a href="#delete">`delete`</a>

<!-- /div -->

<!-- div -->

## `dot`
* <a href="#dot">`dot`</a>
* <a href="#dot">`dot`</a>

<!-- /div -->

<!-- div -->

## `has`
* <a href="#has">`has`</a>

<!-- /div -->

<!-- div -->

## `shouldDot`
* <a href="#shouldDot">`shouldDot`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `DotProp.prototype`

<!-- div -->

<h3 id="DotProp-prototype-get"><a href="#DotProp-prototype-get">#</a>&nbsp;<code>DotProp.prototype.get(key=undefined, [fallback=undefined])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/DotProp.js#L193 "View in source") [&#x24C9;][1]

dot-prop enabled get


### @see 

* <a href="https://ponyfoo.com/articles/es6-maps-in-depth">articles/es6 maps in depth</a>
* <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map">Developer.mozilla.org/en/docs/web/java script/reference/global objects/map</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js">fluents/chain able/blob/master/src/chained map.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/Chainable.js">fluents/chain able/blob/master/src/chainable.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/MergeChain.js">fluents/chain able/blob/master/src/merge chain.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/MethodChain.js">fluents/chain able/blob/master/src/method chain.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js">fluents/chain able/blob/master/src/chained map.js</a>
#### Since
3.0.1

#### Arguments
1. `key=undefined` *(Primitive)*: dot prop key, or any primitive key
2. `[fallback=undefined]` *(any)*: fallback value, if it cannot find value with key path

#### Example
```js
chain.set('moose.simple', 1)
//=> Chain

chain.get('moose.simple')
//=>1

chain.get('moose')
//=> {simple: 1}

```
#### Example
```js
//also works with an array (moose.simple)
chain.get(['moose', 'simple'])
//=> 1

```
---

<!-- /div -->

<!-- div -->

<h3 id="DotProp-prototype-set"><a href="#DotProp-prototype-set">#</a>&nbsp;<code>DotProp.prototype.set()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/DotProp.js#L135 "View in source") [&#x24C9;][1]

since we have a map, we need to ensure the first property is available otherwise we have an empty map.entries obj which does nothing by reference


### @see 

* <a href="https://ponyfoo.com/articles/es6-maps-in-depth">articles/es6 maps in depth</a>
* <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map">Developer.mozilla.org/en/docs/web/java script/reference/global objects/map</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js">fluents/chain able/blob/master/src/chained map.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/Chainable.js">fluents/chain able/blob/master/src/chainable.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/MergeChain.js">fluents/chain able/blob/master/src/merge chain.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/MethodChain.js">fluents/chain able/blob/master/src/method chain.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js">fluents/chain able/blob/master/src/chained map.js</a>
#### Since
3.0.1

#### Example
```js
const chain = new Chain()

chain.set('moose.simple', 1)
//=> Chain store:Map:  { moose: { simple: 1 } }

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `Observe.prototype`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/test/DotProp.js">🔬  Tests: DotProp</a>&nbsp;

<h3 id="Observe-prototype-exports"><a href="#Observe-prototype-exports">#</a>&nbsp;<code>Observe.prototype.exports(SuperClass=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/DotProp.js#L88 "View in source") [&#x24C9;][1]




### @see 

* <a href="https://ponyfoo.com/articles/es6-maps-in-depth">articles/es6 maps in depth</a>
* <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map">Developer.mozilla.org/en/docs/web/java script/reference/global objects/map</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js">fluents/chain able/blob/master/src/chained map.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/Chainable.js">fluents/chain able/blob/master/src/chainable.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/MergeChain.js">fluents/chain able/blob/master/src/merge chain.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/MethodChain.js">fluents/chain able/blob/master/src/method chain.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js">fluents/chain able/blob/master/src/chained map.js</a>
#### Arguments
1. `SuperClass=undefined` *(Class|Composable)*: composable class

#### Example
```js
const { compose } = require('chain-able')
const { DotProp } = compose
new DotProp()
//=> DotProp

```
#### Example
```js
const chain = new Chain()

chain.set('moose.simple', 1)
//=> Chain

chain.get('moose.simple')
//=>1

chain.get('moose')
//=> {simple: 1}

chain.set('moose.canada.eh', true).set('moose.canada.igloo', true)
//=> Chain

//set, has, get, delete :-)
chain.delete('moose.canada.eh')
//=> Chain

//also works with an array (moose.canada.igloo)
chain.get(['moose', 'canada', 'igloo'])
//=> true

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `delete`

<!-- div -->

<h3 id="delete"><a href="#delete">#</a>&nbsp;<code>delete()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/DotProp.js#L249 "View in source") [&#x24C9;][1]




### @see 

* <a href="https://ponyfoo.com/articles/es6-maps-in-depth">articles/es6 maps in depth</a>
* <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map">Developer.mozilla.org/en/docs/web/java script/reference/global objects/map</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js">fluents/chain able/blob/master/src/chained map.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/Chainable.js">fluents/chain able/blob/master/src/chainable.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/MergeChain.js">fluents/chain able/blob/master/src/merge chain.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/MethodChain.js">fluents/chain able/blob/master/src/method chain.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js">fluents/chain able/blob/master/src/chained map.js</a>
#### Since
3.0.1

#### Example
```js
chain.set('moose.canada.eh', true)
chain.set('moose.canada.igloo', true)
//=> Chain

chain.delete('moose.canada.eh')
//=> Chain

chain.has('moose.canada.eh')
//=> true

//still has moose.canada.igloo
chain.has('moose.canada')
//=> true

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `dot`

<!-- div -->

<h3 id="dot"><a href="#dot">#</a>&nbsp;<code>dot</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/DotProp.js#L4 "View in source") [&#x24C9;][1]



#### Since
2.0.0

---

<!-- /div -->

<!-- div -->

<h3 id="dot"><a href="#dot">#</a>&nbsp;<code>dot([useDot=undefined])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/DotProp.js#L110 "View in source") [&#x24C9;][1]




### @see 

* <a href="https://ponyfoo.com/articles/es6-maps-in-depth">articles/es6 maps in depth</a>
* <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map">Developer.mozilla.org/en/docs/web/java script/reference/global objects/map</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js">fluents/chain able/blob/master/src/chained map.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/Chainable.js">fluents/chain able/blob/master/src/chainable.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/MergeChain.js">fluents/chain able/blob/master/src/merge chain.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/MethodChain.js">fluents/chain able/blob/master/src/method chain.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js">fluents/chain able/blob/master/src/chained map.js</a>
#### Since
3.0.1

#### Arguments
1. `[useDot=undefined]` *(boolean)*: use dot prop or not

#### Example
```js
const chain = new Chain()
chain.dot(false)
chain.set('moose.simple', 1)

toArr(chain.store.keys())
//=> ['moose.simple']

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `has`

<!-- div -->

<h3 id="has"><a href="#has">#</a>&nbsp;<code>has()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/DotProp.js#L216 "View in source") [&#x24C9;][1]




### @see 

* <a href="https://ponyfoo.com/articles/es6-maps-in-depth">articles/es6 maps in depth</a>
* <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map">Developer.mozilla.org/en/docs/web/java script/reference/global objects/map</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js">fluents/chain able/blob/master/src/chained map.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/Chainable.js">fluents/chain able/blob/master/src/chainable.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/MergeChain.js">fluents/chain able/blob/master/src/merge chain.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/MethodChain.js">fluents/chain able/blob/master/src/method chain.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js">fluents/chain able/blob/master/src/chained map.js</a>
#### Since
3.0.1

#### Example
```js
chain.set('one.two', 3)
chain.has('one.two')
//=> true

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `shouldDot`

<!-- div -->

<h3 id="shouldDot"><a href="#shouldDot">#</a>&nbsp;<code>shouldDot(key=undefined, thisArg=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/DotProp.js#L39 "View in source") [&#x24C9;][1]

checks if this.meta.dot != false & isDot(key) - scoped


### @see 

* <a href="https://ponyfoo.com/articles/es6-maps-in-depth">articles/es6 maps in depth</a>
* <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map">Developer.mozilla.org/en/docs/web/java script/reference/global objects/map</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js">fluents/chain able/blob/master/src/chained map.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/Chainable.js">fluents/chain able/blob/master/src/chainable.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/MergeChain.js">fluents/chain able/blob/master/src/merge chain.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/MethodChain.js">fluents/chain able/blob/master/src/method chain.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js">fluents/chain able/blob/master/src/chained map.js</a>
#### Since
3.0.1

#### Arguments
1. `key=undefined` *(string)*: key in .get/.has/.delete/set
2. `thisArg=undefined` *(DotProp)*: Chain

#### Example
```js
const chain = new DotProp()
shouldDot('me.me', chain)
//=> true

const chain = new DotProp()
shouldDot('me', chain)
//=> false

const chain = new DotProp()
chain.dot(false)
shouldDot('me.me', chain)
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #dotprop.prototype "Jump back to the TOC."
