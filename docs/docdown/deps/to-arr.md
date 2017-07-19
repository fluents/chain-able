# to-arr.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `exports`
* <a href="#exports"  data-meta="exports ar undefined Array"  data-call="exports ar undefined"  data-category="Methods"  data-description="Function anything into an array"  data-name="exports"  data-all="meta exports ar undefined n Array call exports ar undefined category Methods description Function anything into an array name exports member see notes todos klassProps" >`exports`</a>

<!-- /div -->

<!-- div -->

## `to-arr`
* <a href="#"  data-category="Properties"  data-description="unknown"  data-all="meta call category Properties description unknown name member see notes todos klassProps" >``</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `exports`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/typings/deps.d.ts">🌊  Types: deps.d</a>&nbsp;

<h3 id="exports" data-member="" data-category="Methods" data-name="exports"><code>exports(ar=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/to-arr.js#L48 "View in source") [&#x24C9;][1]

(Function): anything into an array


#### @sig 

* => Array 

#### @Since
0.0.1

#### Arguments
1. `ar=undefined` *(any)*: turn this into an array

#### Returns
*(Array)*: anything into an array

#### Example
```js
toarr([])
// => []

toarr('')
// => ['']

toarr('1,2')
// => ['1', '2']

toarr('1,2')
// => ['1', '2']

const map = new Map()
map.set('eh', true)
const arr = toarr(map.entries())
// => ['eh', true]

const set = new Set()
set.add('eh')
set.add(true)
const arr = toarr(map.entries())
// => ['eh', true]

toarr('').concat(toarr(false)).concat(toarr(null))
// => ['', false, null]

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `to-arr`

<!-- div -->

<h3 id="" data-member="" data-category="Properties" data-name="to-arr"><code></code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/to-arr.js#L58 "View in source") [&#x24C9;][1]

unknown

---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #exports "Jump back to the TOC."
