# set.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `exports`
* <a href="#exports"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Lang"  data-description="Function Checks if value is classified as a Set object"  data-name="exports"  data-all="meta exports x undefined call exports x undefined category Lang description Function Checks if value is classified as a Set object name exports member see notes todos klassProps" >`exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `exports`

<!-- div -->

<h3 id="exports" data-member="" data-category="Lang" data-name="exports"><code>exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/set.js#L20 "View in source") [&#x24C9;][1]

(Function): Checks if `value` is classified as a `Set` object.


#### @Since
4.3.0

#### Arguments
1. `x=undefined` *(&#42;)*: The value to check.

#### Returns
*(boolean)*: Returns `true` if `value` is a set, else `false`.

#### Example
```js
isSet(new Set())
// => true

isSet(new WeakSet())
// => false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #exports "Jump back to the TOC."
