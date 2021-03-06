# real.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is.prototype`
* <a href="#is-prototype-isReal">`is.prototype.isReal`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is.prototype`

<!-- div -->

<h3 id="is-prototype-isReal"><a href="#is-prototype-isReal">#</a>&nbsp;<code>is.prototype.exports(x=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/real.js#L51 "View in source") [&#x24C9;][1]

Function


### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/null.js">fluents/chain able/blob/master/src/deps/is/null.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/undefined.js">fluents/chain able/blob/master/src/deps/is/undefined.js</a>

### @notes 

* eslint-disable-next-line no-self-compare
      && x !== x
 

### @extends



#### Since
3.0.0

#### Arguments
1. `x=undefined` *(&#42;)*: value

#### Returns
*(boolean)*: isReal

#### Example
```js
isReal(null)
//=> false
isReal(void 0)
//=> false
const nan = Number(undefined)
isReal(nan)
//=> false

isReal({ eh: true })
//=> true
isReal({})
//=> true
isReal(Object)
//=> true
isReal([])
//=> true
isReal(new Set())
//=> true
isReal(function() {})
//=> true
isReal('')
//=> true
isReal(1)
//=> true

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is.prototype "Jump back to the TOC."
