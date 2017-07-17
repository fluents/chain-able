# nullOrUndefined.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is.prototype`
* <a href="#is-prototype-isNullOrUndefined">`is.prototype.isNullOrUndefined`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is.prototype`

<!-- div -->

<h3 id="is-prototype-isNullOrUndefined"><a href="#is-prototype-isNullOrUndefined">#</a>&nbsp;<code>is.prototype.exports(x=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/nullOrUndefined.js#L41 "View in source") [&#x24C9;][1]

(Function): Checks if `value` is `null` or `undefined`.


### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/null.js">fluents/chain able/blob/master/src/deps/is/null.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/undefined.js">fluents/chain able/blob/master/src/deps/is/undefined.js</a>
#### Since
4.0.0-alpha.1

#### Arguments
1. `x=undefined` *(&#42;)*: value

#### Returns
*(boolean)*: isNullOrUndefined

#### Example
```js
isNullOrUndefined(null)
//=> true
isNullOrUndefined(undefined)
//=> true
isNullOrUndefined(void 0)
//=> true

isNullOrUndefined(NaN)
//=> false
isNullOrUndefined({})
//=> false
isNullOrUndefined('')
//=> false
isNullOrUndefined(1)
//=> false
isNullOrUndefined(false)
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is.prototype "Jump back to the TOC."
