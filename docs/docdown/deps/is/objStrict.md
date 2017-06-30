# objStrict.js API documentation

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
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/objStrict.js#L42 "View in source") [&#x24C9;][1]



#### Since
3.0.0

#### Arguments
1. `x` *(&#42;)*: value

#### Returns
*(boolean)*: isObjStrict

#### Example
```js
isObjStrict(new Object())
 //=> true
 isObjStrict({})
 //=> true
 isObjStrict(Object.create(null))
 //=> true
 isObjStrict(null)
 //=> false

 isObjStrict(new Set())
 //=> false
 isObjStrict(function() {})
 //=> false
 isObjStrict('')
 //=> false
 isObjStrict(1)
 //=> false
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is.prototype "Jump back to the TOC."
