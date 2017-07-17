# notEmptyArray.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is.prototype`
* <a href="#is-prototype-isNotEmptyArray">`is.prototype.isNotEmptyArray`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is.prototype`

<!-- div -->

<h3 id="is-prototype-isNotEmptyArray"><a href="#is-prototype-isNotEmptyArray">#</a>&nbsp;<code>is.prototype.exports(x=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/notEmptyArray.js#L30 "View in source") [&#x24C9;][1]

(Function): value is an Array, with at least `1` value


### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/objWithKeys.js">fluents/chain able/blob/master/src/deps/is/obj with keys.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/array.js">fluents/chain able/blob/master/src/deps/is/array.js</a>

### @extends



#### Since
4.0.0-alpha.1

#### Arguments
1. `x=undefined` *(&#42;)*: value

#### Returns
*(boolean)*: isNotEmptyArray

#### Example
```js
isNotEmptyArray(new Array(3))
//=> true
isNotEmptyArray([1, 2, 3])
//=> true

isNotEmptyArray(new Array())
//=> false
isNotEmptyArray([])
//=> false
isNotEmptyArray(new Map())
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is.prototype "Jump back to the TOC."
