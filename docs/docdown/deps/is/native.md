# native.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is.prototype`
* <a href="#is-prototype-isNative">`is.prototype.isNative`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is.prototype`

<!-- div -->

<h3 id="is-prototype-isNative"><a href="#is-prototype-isNative">#</a>&nbsp;<code>is.prototype.exports(x=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/native.js#L19 "View in source") [&#x24C9;][1]

(Function): based on isNative from react-fibers, based on isNative() from Lodash

#### Since
4.0.6

#### Arguments
1. `x=undefined` *(&#42;)*: value to check

#### Returns
*(boolean)*:

#### Example
```js
isNative(Array.prototype.push)
// => true

isNative(function normalFunction() {})
// => false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is.prototype "Jump back to the TOC."
