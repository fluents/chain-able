# matcher.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is.prototype`
* <a href="#is-prototype-exports">`is.prototype.exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is.prototype`

<!-- div -->

<h3 id="is-prototype-exports"><a href="#is-prototype-exports">#</a>&nbsp;<code>is.prototype.exports(x=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/matcher.js#L25 "View in source") [&#x24C9;][1]



#### Since
3.0.0

#### Arguments
1. `x=undefined` *(&#42;)*: value to check

#### Returns
*(boolean)*: isFunction || isRegExp

#### Example
```js
isMatcher(/(.*)/)
//=> true

isMatcher(x => true)
//=> true

isMatcher(1)
//=> false
isMatcher('.*')
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is.prototype "Jump back to the TOC."
