# weakMap.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `isWeakMap`
* <a href="#isWeakMap"  data-meta="isWeakMap x undefined"  data-call="isWeakMap x undefined"  data-category="Lang"  data-description="Function Checks if value is classified as a WeakMap object"  data-name="isWeakMap"  data-all="meta isWeakMap x undefined call isWeakMap x undefined category Lang description Function Checks if value is classified as a WeakMap object name isWeakMap member see notes todos klassProps" >`isWeakMap`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `isWeakMap`

<!-- div -->

<h3 id="isWeakMap" data-member="" data-category="Lang" data-name="isWeakMap"><code>isWeakMap(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/weakMap.js#L21 "View in source") [&#x24C9;][1]

(Function): Checks if `value` is classified as a `WeakMap` object.


#### @Since
5.0.0-beta.4

#### Arguments
1. `x=undefined` *(&#42;)*: The value to check.

#### Returns
*(boolean)*: Returns `true` if `value` is a weak map, else `false`.

#### Example
```js
isWeakMap(new WeakMap())
// => true

isWeakMap(new Map())
// => false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #isweakmap "Jump back to the TOC."
