# symbol.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-exports"  data-meta="exports value undefined"  data-call="exports value undefined"  data-category="Lang"  data-description="Function Checks if value is classified as a Symbol primitive or object"  data-name="exports"  data-member="is"  data-all="meta exports value undefined call exports value undefined category Lang description Function Checks if value is classified as a Symbol primitive or object name exports member is see notes todos klassProps" >`is.exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-exports" data-member="is" data-category="Lang" data-name="exports"><code>is.exports(value=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/symbol.js#L22 "View in source") [&#x24C9;][1]

(Function): Checks if `value` is classified as a `Symbol` primitive or object.


#### @Since
4.0.0

#### Arguments
1. `value=undefined` *(&#42;)*: The value to check.

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

 [1]: #is "Jump back to the TOC."
