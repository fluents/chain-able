# reduce.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `exports`
* <a href="#exports">`exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `exports`

<!-- div -->

<h3 id="exports"><a href="#exports">#</a>&nbsp;<code>exports(map=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/reduce/reduce.js#L26 "View in source") [&#x24C9;][1]

(Function): Map -> Object

#### Since
4.0.0

#### Arguments
1. `map=undefined` *(Map)*: map to reduce, calls entries, turns into an array, then object

#### Returns
*(Object)*: reduced object

#### Example
```js
var emptyMap = new Map()
reduce(emptyMap)
// => {}

```
#### Example
```js
var map = new Map()
map.set('eh', 1)
reduce(map)
// => {eh: 1}

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #exports "Jump back to the TOC."
