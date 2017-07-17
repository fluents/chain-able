# undefined.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is.prototype`
* <a href="#is-prototype-isUndefined">`is.prototype.isUndefined`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is.prototype`

<!-- div -->

<h3 id="is-prototype-isUndefined"><a href="#is-prototype-isUndefined">#</a>&nbsp;<code>is.prototype.exports(x=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/undefined.js#L38 "View in source") [&#x24C9;][1]

(Function): Checks if `value` is `undefined`.


### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/nullOrUndefined.js">fluents/chain able/blob/master/src/deps/is/null or undefined.js</a>

### @notes 

* || typeof x === 'undefined'
 
#### Since
4.0.0-alpha.1

#### Arguments
1. `x=undefined` *(&#42;)*: value

#### Returns
*(boolean)*: isUndefined

#### Example
```js
isUndefined(undefined)
//=> true
isUndefined(void 0)
//=> true

isUndefined(null)
//=> false
isUndefined(NaN)
//=> false
isUndefined({})
//=> false
isUndefined('')
//=> false
isUndefined(1)
//=> false
isUndefined(false)
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is.prototype "Jump back to the TOC."
