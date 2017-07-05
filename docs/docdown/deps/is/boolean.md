# boolean.js API documentation

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
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/boolean.js#L33 "View in source") [&#x24C9;][1]

Checks if `value` is classified as a boolean primitive or object.


### @see 

* <a href="https://github.com/KyleAMathews/deepmerge">kyle a mathews/deepmerge</a>

### @notes 

* could also have typeof x === 'boolean' || (/true|false/).test(x)
 

### @extends 

* undefined
* undefined


#### Since
3.0.0

#### Arguments
1. `x=undefined` *(&#42;)*: value

#### Returns
*(boolean)*: isBoolean

#### Example
```js
isBoolean(false)
//=> true
isBoolean(new Boolean(1))
//=> true
isBoolean(1)
//=> false
isBoolean('')
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is.prototype "Jump back to the TOC."
