# real.js API documentation

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
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/real.js#L51 "View in source") [&#x24C9;][1]



#### Since
3.0.0

#### Arguments
1. `x` *(&#42;)*: value

#### Returns
*(boolean)*: isReal

#### Example
```js
isReal(null)
 //=> false
 isReal(void 0)
 //=> false
 const nan = Number(undefined)
 isReal(nan)
 //=> false

 isReal({eh: true})
 //=> true
 isReal({})
 //=> true
 isReal(Object)
 //=> true
 isReal([])
 //=> true
 isReal(new Set())
 //=> true
 isReal(function() {})
 //=> true
 isReal('')
 //=> true
 isReal(1)
 //=> true
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is.prototype "Jump back to the TOC."
