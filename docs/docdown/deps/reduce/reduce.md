# reduce.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `exports`
* <a href="#exports"  data-meta="exports map undefined"  data-call="exports map undefined"  data-category="Methods"  data-description="Function Map Object"  data-name="exports"  data-see="href https github com fluents chain able search utf8 E2 9C 93 q ArrayFrom type label ArrayFrom"  data-all="meta exports map undefined call exports map undefined category Methods description Function Map Object name exports member see href https github com fluents chain able search utf8 E2 9C 93 q ArrayFrom type label ArrayFrom notes todos klassProps" >`exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `exports`

<!-- div -->

<h3 id="exports" data-member="" data-category="Methods" data-name="exports"><code>exports(map=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/reduce/reduce.js#L26 "View in source") [&#x24C9;][1]

(Function): Map -> Object


#### @see 

* <a href="https://github.com/fluents/chain-able/search?utf8=%E2%9C%93&q=ArrayFrom&type=" >ArrayFrom</a>

#### @Since
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
