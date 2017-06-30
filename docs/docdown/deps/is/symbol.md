# symbol.js API documentation

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

<h3 id="is-prototype-exports"><a href="#is-prototype-exports">#</a>&nbsp;<code>is.prototype.exports(value)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/symbol.js#L22 "View in source") [&#x24C9;][1]

Checks if `value` is classified as a `Symbol` primitive or object.

#### Since
4.0.0

#### Arguments
1. `value` *(&#42;)*: The value to check.

#### Returns
*(boolean)*: Returns `true` if `value` is a symbol, else `false`.

#### Example
```js
isSymbol(Symbol.iterator)
// => true

isSymbol('abc')
// => false
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is.prototype "Jump back to the TOC."
