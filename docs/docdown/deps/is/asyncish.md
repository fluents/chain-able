# asyncish.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is.prototype`
* <a href="#is-prototype-isAsyncish">`is.prototype.isAsyncish`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is.prototype`

<!-- div -->

<h3 id="is-prototype-isAsyncish"><a href="#is-prototype-isAsyncish">#</a>&nbsp;<code>is.prototype.exports(x=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/asyncish.js#L29 "View in source") [&#x24C9;][1]

(Function): async function or promise


### @extends 

* undefined
* undefined


#### Since
4.0.0-beta.2

#### Arguments
1. `x=undefined` *(&#42;)*: value

#### Returns
*(boolean)*: x isAsyncish

#### Example
```js
isAsyncish(async function() {})
//=> true
isAsyncish(new Promise(r => r()))
//=> true

isAsyncish({})
//=> false
isAsyncish(function() {})

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is.prototype "Jump back to the TOC."
