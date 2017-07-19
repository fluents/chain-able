# hasIn.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `exports`
* <a href="#exports"  data-meta="exports obj undefined prop undefined"  data-call="exports obj undefined prop undefined"  data-category="Methods"  data-description="Function isIn but first checks it is not null"  data-name="exports"  data-all="meta n n exports obj undefined prop undefined call exports obj undefined prop undefined category Methods description Function isIn but first checks it is not null name exports member see notes todos klassProps" >`exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `exports`

<!-- div -->

<h3 id="exports" data-member="" data-category="Methods" data-name="exports"><code>exports(obj=undefined, prop=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/hasIn.js#L22 "View in source") [&#x24C9;][1]

(Function): isIn, but first checks it is not null


#### @extends 

* undefined
* undefined



#### @Since
5.0.0

#### Arguments
1. `obj=undefined` *(Object)*: object to check
2. `prop=undefined` *(any)*: property to check in object

#### Returns
*(boolean)*:

#### Example
```js
hasIn({}, 'eh') //=> false
hasIn(null, 'eh') //=> false
hasIn({ eh: true }, 'eh') //=> true

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #exports "Jump back to the TOC."
