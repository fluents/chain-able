# objStrict.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is.prototype`
* <a href="#is-prototype-isObjStrict">`is.prototype.isObjStrict`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is.prototype`

<!-- div -->

<h3 id="is-prototype-isObjStrict"><a href="#is-prototype-isObjStrict">#</a>&nbsp;<code>is.prototype.exports(x=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/objStrict.js#L42 "View in source") [&#x24C9;][1]

Function


### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/obj.js">fluents/chain able/blob/master/src/deps/is/obj.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/objWithKeys.js">fluents/chain able/blob/master/src/deps/is/obj with keys.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/objLoose.js">fluents/chain able/blob/master/src/deps/is/obj loose.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/null.js">fluents/chain able/blob/master/src/deps/is/null.js</a>

### @todos 

- [ ] !Array.isArray
 

### @extends



#### Since
3.0.0

#### Arguments
1. `x=undefined` *(&#42;)*: value

#### Returns
*(boolean)*: isObjStrict

#### Example
```js
isObjStrict(new Object())
//=> true
isObjStrict({})
//=> true
isObjStrict(Object.create(null))
//=> true
isObjStrict(null)
//=> false

isObjStrict(new Set())
//=> false
isObjStrict(function() {})
//=> false
isObjStrict('')
//=> false
isObjStrict(1)
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is.prototype "Jump back to the TOC."
