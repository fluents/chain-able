# asyncish.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-isAsyncish"  data-meta="isAsyncish x undefined"  data-call="isAsyncish x undefined"  data-category="Lang"  data-description="Function async function or promise"  data-name="isAsyncish"  data-member="is"  data-all="meta n n isAsyncish x undefined call isAsyncish x undefined category Lang description Function async function or promise name isAsyncish member is see notes todos klassProps" >`is.isAsyncish`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-isAsyncish" data-member="is" data-category="Lang" data-name="isAsyncish"><code>is.isAsyncish(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/asyncish.js#L29 "View in source") [&#x24C9;][1]

(Function): async function or promise


#### @extends 

* undefined
* undefined



#### @Since
4.0.0-beta.2

#### Arguments
1. `x=undefined` *(&#42;)*: value

#### Returns
*(boolean)*: x isAsyncish

#### Example
```js
isAsyncish(async function() {}) //=> true
isAsyncish(new Promise(r => r())) //=> true

isAsyncish({}) //=> false
isAsyncish(function() {}) //=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
