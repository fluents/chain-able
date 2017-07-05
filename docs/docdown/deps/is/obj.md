# obj.js API documentation

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

<h3 id="is-prototype-exports"><a href="#is-prototype-exports">#</a>&nbsp;<code>is.prototype.exports(value=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/obj.js#L34 "View in source") [&#x24C9;][1]




### @see 

* <a href="https://github.com/KyleAMathews/deepmerge">kyle a mathews/deepmerge</a>

### @notes 

* Object.prototype.toString.call(val) === '[object Object]'
 
#### Since
3.0.0

#### Arguments
1. `value=undefined` *(&#42;)*: The value to check.

#### Returns
*(boolean)*: Returns `true` if `value` is an object, else `false`.

#### Example
```js
isObject({})
// => true

isObject([1, 2, 3])
// => true

isObject(Function)
// => true

isObject(null)
// => false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is.prototype "Jump back to the TOC."
