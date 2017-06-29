# ChainedMap.js API documentation

<!-- div class="toc-container" -->

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

## `merge`

<!-- div -->

<h3 id="merge"><a href="#merge">#</a>&nbsp;<code>merge(obj, cb)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js#L37 "View in source") [&#x24C9;][1]



#### Since
0.4.0 ...as second arg? on instance property?

#### Arguments
1. `obj` *(Object)*: object to merge
2. `cb` *(|Function)*: return the merger to the callback

#### Example
```js
chain.set('eh', [1]).merge({eh: [2]}).get('eh') === [1, 2]
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `method`

<!-- div -->

<h3 id="method"><a href="#method">#</a>&nbsp;<code>method(names)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js#L22 "View in source") [&#x24C9;][1]



#### Since
4.0.0

#### Aliases
*methods*

#### Arguments
1. `names` *(Primitive|string|string&#91;&#93;)*:

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `methods`

<!-- /div -->

<!-- /div -->

 [1]: #merge "Jump back to the TOC."
