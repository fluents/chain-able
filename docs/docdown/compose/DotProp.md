# DotProp.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `DotProp`
* <a href="#DotProp-prototype-get"  data-meta="get key undefined fallback undefined"  data-call="get key undefined fallback undefined"  data-category="Methods"  data-description="Function dot prop enabled get"  data-name="get"  data-member="DotProp"  data-see="href https github com fluents chain able blob master src deps dot delete js label fluents chain able blob master src deps dot delete js href https github com fluents chain able blob master src deps is dot js label fluents chain able blob master src deps is dot js"  data-todos="dot prop on non store instance property when using nested chains"  data-all="meta get key undefined fallback undefined call get key undefined fallback undefined category Methods description Function dot prop enabled get name get member DotProp see href https github com fluents chain able blob master src deps dot delete js label fluents chain able blob master src deps dot delete js href https github com fluents chain able blob master src deps is dot js label fluents chain able blob master src deps is dot js notes todos dot prop on non store instance property when using nested chains n klassProps" >`DotProp.get`</a>
* <a href="#DotProp-prototype-set"  data-meta="set"  data-call="set"  data-category="Properties"  data-description="unknown"  data-name="set"  data-member="DotProp"  data-see="href https github com fluents chain able blob master src deps dot delete js label fluents chain able blob master src deps dot delete js href https github com fluents chain able blob master src deps is dot js label fluents chain able blob master src deps is dot js"  data-all="meta set call set category Properties description unknown name set member DotProp see href https github com fluents chain able blob master src deps dot delete js label fluents chain able blob master src deps dot delete js href https github com fluents chain able blob master src deps is dot js label fluents chain able blob master src deps is dot js notes todos klassProps" >`DotProp.set`</a>

<!-- /div -->

<!-- div -->

## `Observe`
* <a href="#Observe-prototype-exports"  data-meta="ChainedMap exports Target undefined"  data-call="exports Target undefined"  data-category="Chainable"  data-description="Function"  data-name="exports"  data-member="Observe"  data-see="href https github com fluents chain able blob master src deps dot delete js label fluents chain able blob master src deps dot delete js href https github com fluents chain able blob master src deps is dot js label fluents chain able blob master src deps is dot js"  data-all="meta ChainedMap n n exports Target undefined call exports Target undefined category Chainable description Function name exports member Observe see href https github com fluents chain able blob master src deps dot delete js label fluents chain able blob master src deps dot delete js href https github com fluents chain able blob master src deps is dot js label fluents chain able blob master src deps is dot js notes todos klassProps" >`Observe.exports`</a>

<!-- /div -->

<!-- div -->

## `delete`
* <a href="#delete"  data-meta="delete"  data-call="delete"  data-category="Properties"  data-description="unknown"  data-name="delete"  data-see="href https github com fluents chain able blob master src deps dot delete js label fluents chain able blob master src deps dot delete js href https github com fluents chain able blob master src deps is dot js label fluents chain able blob master src deps is dot js"  data-all="meta delete call delete category Properties description unknown name delete member see href https github com fluents chain able blob master src deps dot delete js label fluents chain able blob master src deps dot delete js href https github com fluents chain able blob master src deps is dot js label fluents chain able blob master src deps is dot js notes todos klassProps" >`delete`</a>

<!-- /div -->

<!-- div -->

## `dot`
* <a href="#dot"  data-meta="dot"  data-call="dot"  data-category="Properties"  data-description="unknown"  data-name="dot"  data-all="meta dot call dot category Properties description unknown name dot member see notes todos klassProps" >`dot`</a>
* <a href="#dot"  data-meta="dot useDot undefined"  data-call="dot useDot undefined"  data-category="Methods"  data-description="Function"  data-name="dot"  data-see="href https github com fluents chain able blob master src deps dot delete js label fluents chain able blob master src deps dot delete js href https github com fluents chain able blob master src deps is dot js label fluents chain able blob master src deps is dot js"  data-all="meta dot useDot undefined call dot useDot undefined category Methods description Function name dot member see href https github com fluents chain able blob master src deps dot delete js label fluents chain able blob master src deps dot delete js href https github com fluents chain able blob master src deps is dot js label fluents chain able blob master src deps is dot js notes todos klassProps" >`dot`</a>

<!-- /div -->

<!-- div -->

## `has`
* <a href="#has"  data-meta="has"  data-call="has"  data-category="Properties"  data-description="unknown"  data-name="has"  data-see="href https github com fluents chain able blob master src deps dot delete js label fluents chain able blob master src deps dot delete js href https github com fluents chain able blob master src deps is dot js label fluents chain able blob master src deps is dot js"  data-all="meta has call has category Properties description unknown name has member see href https github com fluents chain able blob master src deps dot delete js label fluents chain able blob master src deps dot delete js href https github com fluents chain able blob master src deps is dot js label fluents chain able blob master src deps is dot js notes todos klassProps" >`has`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `DotProp`

<!-- div -->

<h3 id="DotProp-prototype-get" data-member="DotProp" data-category="Methods" data-name="get"><code>DotProp.get(key=undefined, [fallback=undefined])</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/DotProp.js#L199 "View in source") [&#x24C9;][1]

(Function): dot-prop enabled get


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/dot/delete.js" >fluents/chain able/blob/master/src/deps/dot/delete.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/dot.js" >fluents/chain able/blob/master/src/deps/is/dot.js</a>

#### @todos 

- [ ] dot-prop on non-store instance.property when using nested chains...
 

#### @Since
3.0.1

#### Arguments
1. `key=undefined` *(Primitive)*: dot prop key, or any primitive key
2. `[fallback=undefined]` *(any)*: fallback value, if it cannot find value with key path

#### Returns
*(any)*: value for path, or fallback value if provided

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

<h3 id="DotProp-prototype-set" data-member="DotProp" data-category="Properties" data-name="set"><code>DotProp.set</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/DotProp.js#L141 "View in source") [&#x24C9;][1]

unknown


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/dot/delete.js" >fluents/chain able/blob/master/src/deps/dot/delete.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/dot.js" >fluents/chain able/blob/master/src/deps/is/dot.js</a>

#### @Since
3.0.1

#### Example
```js
const chain = new Target()

chain.set('moose.simple', 1)
//=> Target store:Map:  { moose: { simple: 1 } }

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `Observe`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/test/DotProp.js">🔬  Tests: DotProp</a>&nbsp;

<h3 id="Observe-prototype-exports" data-member="Observe" data-category="Chainable" data-name="exports"><code>Observe.exports(Target=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/DotProp.js#L88 "View in source") [&#x24C9;][1]

Function


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/dot/delete.js" >fluents/chain able/blob/master/src/deps/dot/delete.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/dot.js" >fluents/chain able/blob/master/src/deps/is/dot.js</a>

#### @extends
ChainedMap


#### Arguments
1. `Target=undefined` *(Class|Composable)*: composable class

#### Returns
*(DotProp)*: class

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

<h3 id="delete" data-member="" data-category="Properties" data-name="delete"><code>delete</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/DotProp.js#L255 "View in source") [&#x24C9;][1]

unknown


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/dot/delete.js" >fluents/chain able/blob/master/src/deps/dot/delete.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/dot.js" >fluents/chain able/blob/master/src/deps/is/dot.js</a>

#### @Since
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

<h3 id="dot" data-member="" data-category="Properties" data-name="dot"><code>dot</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/DotProp.js#L4 "View in source") [&#x24C9;][1]

unknown


#### @Since
2.0.0

---

<!-- /div -->

<!-- div -->

<h3 id="dot" data-member="" data-category="Methods" data-name="dot"><code>dot([useDot=undefined])</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/DotProp.js#L116 "View in source") [&#x24C9;][1]

Function


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/dot/delete.js" >fluents/chain able/blob/master/src/deps/dot/delete.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/dot.js" >fluents/chain able/blob/master/src/deps/is/dot.js</a>

#### @Since
3.0.1

#### Arguments
1. `[useDot=undefined]` *(boolean)*: use dot prop or not

#### Returns
*(DotProp)*: @chainable

#### Example
```js
const chain = new Target()
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

<h3 id="has" data-member="" data-category="Properties" data-name="has"><code>has</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/DotProp.js#L222 "View in source") [&#x24C9;][1]

unknown


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/dot/delete.js" >fluents/chain able/blob/master/src/deps/dot/delete.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/dot.js" >fluents/chain able/blob/master/src/deps/is/dot.js</a>

#### @Since
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

<!-- /div -->

 [1]: #dotprop "Jump back to the TOC."
