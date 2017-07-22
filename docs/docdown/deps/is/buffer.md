# buffer.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-exports"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Methods"  data-description="Function isBuffer global Buffer"  data-name="exports"  data-member="is"  data-all="meta exports x undefined call exports x undefined category Methods description Function isBuffer global Buffer name exports member is see notes todos klassProps" >`is.exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-exports" data-member="is" data-category="Methods" data-name="exports"><code>is.exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/buffer.js#L23 "View in source") [&#x24C9;][1]

(Function): isBuffer, global Buffer


#### @Since
5.0.0-beta.1

#### Arguments
1. `x=undefined` *(&#42;|Buffer)*: value to check if Buffer

#### Returns
*(boolean)*: x is Buffer
<br>
<br>
If you need to support Safari `5-7` *(8-10 yr-old browser)*,

#### Example
```js
isBuffer({}) //=> false
isBuffer(new Buffer('eh')) //=> true

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
