# stringPrimitive.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-exports"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Lang"  data-description="Function Checks if value is classified as a String primitive"  data-name="exports"  data-member="is"  data-see="href https developer mozilla org en US docs Web JavaScript Reference Global Objects String label https developer mozilla org en US docs Web JavaScript Reference Global Objects String href https github com lodash lodash blob master isString js label https github com lodash lodash blob master isString js href https github com fluents chain able blob master src deps is string js label is string"  data-all="meta exports x undefined call exports x undefined category Lang description Function Checks if value is classified as a String primitive name exports member is see href https developer mozilla org en US docs Web JavaScript Reference Global Objects String label https developer mozilla org en US docs Web JavaScript Reference Global Objects String href https github com lodash lodash blob master isString js label https github com lodash lodash blob master isString js href https github com fluents chain able blob master src deps is string js label is string notes todos klassProps" >`is.exports`</a>

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

* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" >https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String</a>
* <a href="https://github.com/lodash/lodash/blob/master/isString.js" >https://github.com/lodash/lodash/blob/master/isString.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/string.js" >is/string</a>

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
