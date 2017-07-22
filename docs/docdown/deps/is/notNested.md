# notNested.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `exports`
* <a href="#exports"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Methods"  data-description="Function"  data-name="exports"  data-all="meta exports x undefined call exports x undefined category Methods description Function name exports member see notes todos klassProps" >`exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `exports`

<!-- div -->

<h3 id="exports" data-member="" data-category="Methods" data-name="exports"><code>exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/notNested.js#L21 "View in source") [&#x24C9;][1]

Function


#### @Since
5.0.0

#### Arguments
1. `x=undefined` *(&#42;)*: value to check

#### Returns
*(boolean)*: x isNotNested

#### Example
```js
isNotNested('') //=> true
isNotNested(true) //=> true
isNotNested(new RegExp()) //=> true
isNotNested(new Error('eh')) //=> false
isNotNested(null) //=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #exports "Jump back to the TOC."
