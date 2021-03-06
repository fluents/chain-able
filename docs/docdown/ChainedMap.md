# ChainedMap.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `CM`
* <a href="#CM">`CM`</a>

<!-- /div -->

<!-- div -->

## `merge`
* <a href="#merge">`merge`</a>

<!-- /div -->

<!-- div -->

## `method`
* <a href="#method">`method`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `CM`

<!-- div -->

* <a href="https://github.com/fluents/chain-able/blob/master/typings/ChainedMap.d.ts">🌊  Types: ChainedMap.d</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/typings/ChainedMapBase.d.ts">🌊  Types: ChainedMapBase.d</a>&nbsp;

<a href="https://github.com/fluents/chain-able/blob/master/test/ChainedMap.js">🔬  Tests: ChainedMap</a>&nbsp;

<h3 id="CM"><a href="#CM">#</a>&nbsp;<code>CM([SuperClass=ChainedMapBase])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js#L31 "View in source") [&#x24C9;][1]

(Function): ChainedMap composer


### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/dopemerge/dopemerge.js">fluents/chain able/blob/master/src/deps/dopemerge/dopemerge.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/MergeChain.js">fluents/chain able/blob/master/src/merge chain.js</a>

### @extends
ChainedMapBase


#### Since
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

<h3 id="merge"><a href="#merge">#</a>&nbsp;<code>merge(obj=undefined, [handleMergeFn=undefined])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js#L99 "View in source") [&#x24C9;][1]

(Function): merges an object with the current store


### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/dopemerge/dopemerge.js">fluents/chain able/blob/master/src/deps/dopemerge/dopemerge.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/MergeChain.js">fluents/chain able/blob/master/src/merge chain.js</a>

### @todos 

- [ ] needs to pass in additional opts somehow...
 
#### Since
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

<h3 id="method"><a href="#method">#</a>&nbsp;<code>method(names=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js#L63 "View in source") [&#x24C9;][1]

(Function): the way to easily start building methods when using chainable instances


### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/dopemerge/dopemerge.js">fluents/chain able/blob/master/src/deps/dopemerge/dopemerge.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/MergeChain.js">fluents/chain able/blob/master/src/merge chain.js</a>
#### Since
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

 [1]: #cm "Jump back to the TOC."
