# weakSet.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `isWeakSet`
* <a href="#isWeakSet"  data-meta="isWeakSet x undefined"  data-call="isWeakSet x undefined"  data-category="Lang"  data-description="Function Checks if value is classified as a isWeakSet object"  data-name="isWeakSet"  data-all="meta isWeakSet x undefined call isWeakSet x undefined category Lang description Function Checks if value is classified as a isWeakSet object name isWeakSet member see notes todos klassProps" >`isWeakSet`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `isWeakSet`

<!-- div -->

<h3 id="isWeakSet" data-member="" data-category="Lang" data-name="isWeakSet"><code>isWeakSet(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/weakSet.js#L21 "View in source") [&#x24C9;][1]

(Function): Checks if `value` is classified as a `isWeakSet` object.


#### @Since
5.0.0-beta.4

#### Arguments
1. `x=undefined` *(&#42;)*: The value to check.

#### Returns
*(boolean)*: Returns `true` if `value` is a weak map, else `false`.

#### Example
```js
isWeakSet(new WeakSet())
// => true

isWeakSet(new Set())
// => false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #isweakset "Jump back to the TOC."
