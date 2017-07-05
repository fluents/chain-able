# objWithKeys.js API documentation

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
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/objWithKeys.js#L41 "View in source") [&#x24C9;][1]




### @see 

* <a href="https://github.com/KyleAMathews/deepmerge">kyle a mathews/deepmerge</a>

### @extends



#### Since
3.0.0

#### Arguments
1. `x=undefined` *(&#42;)*: value

#### Returns
*(boolean)*: isObjWithKeys

#### Example
```js
isObjWithKeys({ eh: true })
//=> true
isObjWithKeys({})
//=> false
isObjWithKeys(new Object())
//=> false
isObjWithKeys(Object.create(null))
//=> false
isObjWithKeys(null)
//=> false
isObjWithKeys(new Set())
//=> false
isObjWithKeys(function() {})
//=> false
isObjWithKeys('')
//=> false
isObjWithKeys(1)
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is.prototype "Jump back to the TOC."
