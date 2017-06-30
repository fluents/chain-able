# error.js API documentation

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
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/error.js#L35 "View in source") [&#x24C9;][1]



#### Arguments
1. `x` *(&#42;)*: value

#### Returns
*(boolean)*: isError

#### Example
```js
isError(new Error())
 //=> true
 isError(new Error().stack)
 //=> false
 isError(1)
 //=> false
 isError('')
 //=> false
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is.prototype "Jump back to the TOC."
