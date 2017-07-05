# async.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is.prototype`
* <a href="#is-prototype-isAsync">`is.prototype.isAsync`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is.prototype`

<!-- div -->

<h3 id="is-prototype-isAsync"><a href="#is-prototype-isAsync">#</a>&nbsp;<code>is.prototype.exports(x=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/async.js#L23 "View in source") [&#x24C9;][1]

Function

#### Since
4.0.0-beta.2

#### Arguments
1. `x=undefined` *(&#42;)*: value

#### Returns
*(boolean)*: isAsync

#### Example
```js
isAsync(async function() {})
//=> true
isAsync(new Promise(r => r()))
//=> false
isAsync({})
//=> false
isAsync(function() {})

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is.prototype "Jump back to the TOC."
