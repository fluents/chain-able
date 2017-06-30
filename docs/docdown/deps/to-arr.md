# to-arr.js API documentation

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

<h3 id="exports"><a href="#exports">#</a>&nbsp;<code>exports(ar)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/to-arr.js#L48 "View in source") [&#x24C9;][1]



#### Since
0.0.1

#### Arguments
1. `ar` *(any)*: turn this into an array

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

<!-- /div -->

 [1]: #exports "Jump back to the TOC."
