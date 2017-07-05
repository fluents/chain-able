# map.js API documentation

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
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/map.js#L43 "View in source") [&#x24C9;][1]

Checks if `value` is classified as a `Map` object.


### @see 

* <a href="https://github.com/KyleAMathews/deepmerge">kyle a mathews/deepmerge</a>
#### Since
3.0.0

#### Arguments
1. `x=undefined` *(&#42;)*: value

#### Returns
*(boolean)*: isMap

#### Example
```js
isMap(new Map())
//=> true
isMap(new Map.entries())
//=> false
isMap(new Set())
//=> false
isMap({})
//=> false
isMap('')
//=> false
isMap(1)
//=> false
isMap(new WeakMap())
// => false

```
#### Example
```js
const e = {}
eh[Symbol.toStringTag] = '[object Map]'
isMap(eh)

```
#### Example
```js
class Eh extends Map()
 isMap(new Eh())
 //=> true
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is.prototype "Jump back to the TOC."
