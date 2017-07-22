# primitive.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-exports"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Lang"  data-description="Function Checks if value is classified as a primitive number string boolean null undefined"  data-name="exports"  data-member="is"  data-all="meta exports x undefined call exports x undefined category Lang description Function Checks if value is classified as a primitive n number string boolean null undefined name exports member is see notes todos klassProps" >`is.exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-exports" data-member="is" data-category="Lang" data-name="exports"><code>is.exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/primitive.js#L36 "View in source") [&#x24C9;][1]

(Function): Checks if `value` is classified as a **primitive**
`(number|string|boolean|null|undefined)`


#### @Since
4.0.0 was in another file

#### Arguments
1. `x=undefined` *(&#42;)*: The value to check.

#### Returns
*(boolean)*: x is number|string|boolean|null|undefined

#### Example
```js
isPrimitive('abc') // => true
isPrimitive(1) // => true
isPrimitive('') // => true
isPrimitive(null) // => true
isPrimitive(undefined) // => true
isPrimitive(void 0) // => true

isPrimitive(new String('abc')) // => false
isPrimitive([]) // => false
isPrimitive(() => {}) // => false
isPrimitive({}) // => false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
