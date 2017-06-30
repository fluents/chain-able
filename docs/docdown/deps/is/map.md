# map.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is.prototype`
* <a href="#is-prototype-exports">`is.prototype.exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is.prototype`

<!-- div -->

<h3 id="is-prototype-exports"><a href="#is-prototype-exports">#</a>&nbsp;<code>is.prototype.exports(x)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/map.js#L43 "View in source") [&#x24C9;][1]



#### Since
3.0.0

#### Arguments
1. `x` *(&#42;)*: value

#### Returns
*(boolean)*: isMap

#### Example
```js
isMap(new Map())
 //=> true
 isMap(new Map.entries())
 //=> false
 isMap(new Set())
 //=> false
 isMap({})
 //=> false
 isMap('')
 //=> false
 isMap(1)
 //=> false
 isMap(new WeakMap)
 // => false
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is.prototype "Jump back to the TOC."
