# objWithKeys.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is.prototype`
* <a href="#is-prototype-isObjWithKeys">`is.prototype.isObjWithKeys`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is.prototype`

<!-- div -->

<h3 id="is-prototype-isObjWithKeys"><a href="#is-prototype-isObjWithKeys">#</a>&nbsp;<code>is.prototype.exports(x=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/objWithKeys.js#L41 "View in source") [&#x24C9;][1]

Function


### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/obj.js">fluents/chain able/blob/master/src/deps/is/obj.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/objWithKeys.js">fluents/chain able/blob/master/src/deps/is/obj with keys.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/objStrict.js">fluents/chain able/blob/master/src/deps/is/obj strict.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/null.js">fluents/chain able/blob/master/src/deps/is/null.js</a>

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
