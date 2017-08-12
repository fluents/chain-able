# ChainedMap.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `ChainedMapBase`
* <a href="#ChainedMapBase-prototype-ComposeChainedMap"  data-meta="ChainedMapBase ComposeChainedMap SuperClass ChainedMapBase"  data-call="ComposeChainedMap SuperClass ChainedMapBase"  data-category="Methods"  data-description="Function ChainedMap composer"  data-name="ComposeChainedMap"  data-member="ChainedMapBase"  data-see="href https github com fluents chain able blob master src ChainedMapBase js label ChainedMapBase"  data-all="meta ChainedMapBase n n ComposeChainedMap SuperClass ChainedMapBase call ComposeChainedMap SuperClass ChainedMapBase category Methods description Function ChainedMap composer name ComposeChainedMap member ChainedMapBase see href https github com fluents chain able blob master src ChainedMapBase js label ChainedMapBase notes todos klassProps" >`ChainedMapBase.ComposeChainedMap`</a>

<!-- /div -->

<!-- div -->

## `merge`
* <a href="#merge"  data-meta="merge obj undefined handleMergeFn undefined"  data-call="merge obj undefined handleMergeFn undefined"  data-category="merge"  data-description="Function merges an object with the current store"  data-name="merge"  data-see="href https github com fluents chain able blob master src deps dopemerge dopemerge js label deps dopemerge href https github com fluents chain able blob master src MergeChain js label MergeChain"  data-todos="needs to pass in additional opts somehow"  data-all="meta merge obj undefined handleMergeFn undefined call merge obj undefined handleMergeFn undefined category merge description Function merges an object with the current store name merge member see href https github com fluents chain able blob master src deps dopemerge dopemerge js label deps dopemerge href https github com fluents chain able blob master src MergeChain js label MergeChain notes todos needs to pass in additional opts somehow n klassProps" >`merge`</a>

<!-- /div -->

<!-- div -->

## `method`
* <a href="#method"  data-meta="method names undefined"  data-call="method names undefined"  data-category="methods"  data-description="Function the way to easily start building methods when using chainable instances"  data-name="method"  data-see="href https github com fluents chain able blob master src MethodChain js label MethodChain"  data-all="meta method names undefined call method names undefined category methods description Function the way to easily start building methods when using chainable instances name method member see href https github com fluents chain able blob master src MethodChain js label MethodChain notes todos klassProps" >`method`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `ChainedMapBase`

<!-- div -->

* <a href="https://github.com/fluents/chain-able/blob/master/typings/ChainedMap.d.ts">🌊  Types: ChainedMap.d</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/typings/ChainedMapBase.d.ts">🌊  Types: ChainedMapBase.d</a>&nbsp;

<a href="https://github.com/fluents/chain-able/blob/master/test/ChainedMap.js">🔬  Tests: ChainedMap</a>&nbsp;

<h3 id="ChainedMapBase-prototype-ComposeChainedMap" data-member="ChainedMapBase" data-category="Methods" data-name="ComposeChainedMap"><code>ChainedMapBase.ComposeChainedMap([SuperClass=ChainedMapBase])</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js#L33 "View in source") [&#x24C9;][1]

(Function): ChainedMap composer


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js" >ChainedMapBase</a>

#### @extends
ChainedMapBase



#### @Since
0.0.1

#### Arguments
1. `[SuperClass=ChainedMapBase]` *(Class|Composable|Object)*: class to extend

#### Returns
*(Class)*: ChainedMap

#### Example
```js
const heh = class {}
const composed = ChainedMap.compose(heh)
const hehchain = new Composed()
hehchain instanceof heh
//=> true

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `merge`

<!-- div -->

<h3 id="merge" data-member="" data-category="merge" data-name="merge"><code>merge(obj=undefined, [handleMergeFn=undefined])</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js#L101 "View in source") [&#x24C9;][1]

(Function): merges an object with the current store


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/dopemerge/dopemerge.js" >deps/dopemerge</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/MergeChain.js" >MergeChain</a>

#### @todos 

- [ ] needs to pass in additional opts somehow...
 

#### @Since
0.4.0

#### Arguments
1. `obj=undefined` *(Object)*: object to merge
2. `[handleMergeFn=undefined]` *(|Function)*: return the merger to the callback

#### Returns
*(ChainedMap)*: @chainable

#### Example
```js
const chain = new Chain()
chain.set('eh', [1])
chain.merge({ eh: [2] })
chain.get('eh')
// => [1, 2]

```
#### Example
```js
const chain = new Chain()
  chain.set('emptyArr', [])
  chain.merge({emptyArr: []}, mergeChain =>
    mergeChain.onExisting((a, b) => []).merger((a, b) => []).merge()
  )
  chain.get('emptyArr').length)
  //=> 0
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `method`

<!-- div -->

<h3 id="method" data-member="" data-category="methods" data-name="method"><code>method(names=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js#L65 "View in source") [&#x24C9;][1]

(Function): the way to easily start building methods when using chainable instances


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/MethodChain.js" >MethodChain</a>

#### @Since
4.0.0

#### Arguments
1. `names=undefined` *(Primitive|string|string&#91;&#93;)*: method names to add to the object

#### Returns
*(MethodChain)*: @chainable

#### Example
```js
const chain = new Chain()
chain.method('eh').build()
chain.eh(true)
chain.get('eh')
// => true

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #chainedmapbase "Jump back to the TOC."
