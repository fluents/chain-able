# iteratable.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `exports`
* <a href="#exports"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Methods"  data-description="Function is able to be iterated on"  data-name="exports"  data-all="meta n n exports x undefined call exports x undefined category Methods description Function is able to be iterated on name exports member see notes todos klassProps" >`exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `exports`

<!-- div -->

<h3 id="exports" data-member="" data-category="Methods" data-name="exports"><code>exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/iteratable.js#L35 "View in source") [&#x24C9;][1]

(Function): is able to be iterated on


#### @extends 

* undefined
* undefined
* undefined
* undefined
* undefined
* undefined
* undefined
* undefined


#### Arguments
1. `x=undefined` *(&#42;)*: node is iteratable

#### Returns
*(boolean)*: x isIteratable

#### Example
```js
isIteratable([]) //=> true
isIteratable({}) //=> true
isIteratable(new Date()) //=> false
isIteratable(Symbol('eh')) //=> false
isIteratable(new Promise(r => r())) //=> false
isIteratable(new Error('eh')) //=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #exports "Jump back to the TOC."
