# nullOrUndefined.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is.prototype`
* <a href="#is-prototype-exports">`is.prototype.exports`</a>
* <a href="#is-prototype-exports" class="alias">`is.prototype.isNil` -> `exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is.prototype`

<!-- div -->

<h3 id="is-prototype-exports"><a href="#is-prototype-exports">#</a>&nbsp;<code>is.prototype.exports(x)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/nullOrUndefined.js#L41 "View in source") [&#x24C9;][1]



#### Since
4.0.0-alpha.1

#### Aliases
*is.prototype.isNil*

#### Arguments
1. `x` *(&#42;)*: value

#### Returns
*(boolean)*: isNullOrUndefined

#### Example
```js
isNullOrUndefined(null)
 //=> true
 isNullOrUndefined(undefined)
 //=> true
 isNullOrUndefined(void 0)
 //=> true

 isNullOrUndefined(NaN)
 //=> false
 isNullOrUndefined({})
 //=> false
 isNullOrUndefined('')
 //=> false
 isNullOrUndefined(1)
 //=> false
 isNullOrUndefined(false)
 //=> false
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is.prototype "Jump back to the TOC."
