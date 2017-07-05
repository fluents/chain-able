# objLoose.js API documentation

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
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/objLoose.js#L34 "View in source") [&#x24C9;][1]




### @see 

* <a href="https://github.com/KyleAMathews/deepmerge">kyle a mathews/deepmerge</a>
#### Since
3.0.0

#### Arguments
1. `x=undefined` *(&#42;)*: value

#### Returns
*(boolean)*: isObjLoose

#### Example
```js
isObjLoose(new Object())
//=> true
isObjLoose({})
//=> true
isObjLoose(Object.create(null))
//=> true
isObjLoose(null)
//=> true

isObjLoose(new Set())
//=> false
isObjLoose(function() {})
//=> false
isObjLoose('')
//=> false
isObjLoose(1)
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is.prototype "Jump back to the TOC."
