# stringPrimitive.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-exports"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Lang"  data-description="Function Checks if value is classified as a String primitive"  data-name="exports"  data-member="is"  data-see="href https github com fluents chain able blob master src deps is string js label fluents chain able blob master src deps is string js"  data-all="meta exports x undefined call exports x undefined category Lang description Function Checks if value is classified as a String primitive name exports member is see href https github com fluents chain able blob master src deps is string js label fluents chain able blob master src deps is string js notes todos klassProps" >`is.exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-exports" data-member="is" data-category="Lang" data-name="exports"><code>is.exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/stringPrimitive.js#L27 "View in source") [&#x24C9;][1]

(Function): Checks if `value` is classified as a `String` **primitive**.


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/string.js" >fluents/chain able/blob/master/src/deps/is/string.js</a>

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
// => false

isString(1)
// => false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
