# function.js API documentation

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
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/function.js#L37 "View in source") [&#x24C9;][1]

Checks if `value` is classified as a `Function` object.

#### Since
3.0.0

#### Arguments
1. `x` *(&#42;)*: The value to check.

#### Returns
*(boolean)*: x isFunction

#### Example
```js
isFunction(function() {})
 //=> true
 isFunction(() => {})
 //=> true
 isFunction(new Function())
 //=> true

 isFunction(1)
 //=> false
 isFunction('')
 //=> false
 isFunction(/abc/)
 // => false
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is.prototype "Jump back to the TOC."
