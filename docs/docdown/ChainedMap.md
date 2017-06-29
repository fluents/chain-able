# ChainedMap.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `CM`
* <a href="#CM">`CM`</a>

<!-- /div -->

<!-- div -->

## `ComposeMap`
* <a href="#CM" class="alias">`ComposeMap` -> `CM`</a>

<!-- /div -->

<!-- div -->

## `merge`
* <a href="#merge">`merge`</a>

<!-- /div -->

<!-- div -->

## `method`
* <a href="#method">`method`</a>

<!-- /div -->

<!-- div -->

## `methods`
* <a href="#method" class="alias">`methods` -> `method`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `CM`

<!-- div -->

<h3 id="CM"><a href="#CM">#</a>&nbsp;<code>CM([SuperClass=ChainedMapBase])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js#L20 "View in source") [&#x24C9;][1]



#### Aliases
*ComposeMap*

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

## `ComposeMap`

<!-- /div -->

<!-- div -->

## `merge`

<!-- div -->

<h3 id="merge"><a href="#merge">#</a>&nbsp;<code>merge(obj, [handleMergeFn=undefined])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js#L71 "View in source") [&#x24C9;][1]



#### Since
0.4.0

#### Arguments
1. `obj` *(Object)*: object to merge
2. `[handleMergeFn=undefined]` *(|Function)*: return the merger to the callback

#### Returns
*(ChainedMap)*: @chainable

#### Example
```js
chain.set('eh', [1])
   chain.merge({eh: [2]})
   chain.get('eh')
   // => [1, 2]
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `method`

<!-- div -->

<h3 id="method"><a href="#method">#</a>&nbsp;<code>method(names)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js#L46 "View in source") [&#x24C9;][1]



#### Since
4.0.0

#### Aliases
*methods*

#### Arguments
1. `names` *(Primitive|string|string&#91;&#93;)*: method names to add to the object

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

<!-- div -->

## `methods`

<!-- /div -->

<!-- /div -->

 [1]: #cm "Jump back to the TOC."
