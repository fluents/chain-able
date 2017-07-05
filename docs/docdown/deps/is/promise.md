# promise.js API documentation

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
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/promise.js#L38 "View in source") [&#x24C9;][1]

is a Promise


### @see 

* <a href="https://github.com/KyleAMathews/deepmerge">kyle a mathews/deepmerge</a>
#### Since
4.0.0-beta.2

#### Arguments
1. `x=undefined` *(&#42;)*: value

#### Returns
*(boolean)*: x isPromise

#### Example
```js
isPromise(new Promise(r => r))
//=> true
isPromise(async function() {})
//=> false // on some environments, true

isPromise({})
//=> false
isPromise(Object.create(null))
//=> false
isPromise(null)
//=> false
isPromise(new Set())
//=> false
isPromise(function() {})
//=> false
isPromise('')
//=> false
isPromise(1)
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is.prototype "Jump back to the TOC."
