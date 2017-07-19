# string.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-exports"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Lang"  data-description="Function Checks if value is classified as a String primitive or object"  data-name="exports"  data-member="is"  data-all="meta exports x undefined call exports x undefined category Lang description Function Checks if value is classified as a String primitive or object name exports member is see notes todos klassProps" >`is.exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-exports" data-member="is" data-category="Lang" data-name="exports"><code>is.exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/string.js#L31 "View in source") [&#x24C9;][1]

(Function): Checks if `value` is classified as a `String` primitive or object.


#### @extends




#### @Since
3.0.0

#### Arguments
1. `x=undefined` *(&#42;)*: The value to check.

#### Returns
*(boolean)*: Returns `true` if `value` is a string, else `false`.

#### Example
```js
isString('abc')
// => true

isString(new String('abc'))
// => true

isString(1)
// => false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
