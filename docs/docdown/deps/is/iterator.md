# iterator.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is.prototype`
* <a href="#is-prototype-">`is.prototype.`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is.prototype`

<!-- div -->

<h3 id="is-prototype-"><a href="#is-prototype-">#</a>&nbsp;<code>is.prototype.(x=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/iterator.js#L42 "View in source") [&#x24C9;][1]




### @see 

* <a href="https://github.com/KyleAMathews/deepmerge">kyle a mathews/deepmerge</a>
#### Since
3.0.0

#### Arguments
1. `x=undefined` *(&#42;)*: value

#### Returns
*(boolean)*: isIterator

#### Example
```js
isIterator(new Set().values())
//=> true
isIterator(new Map.entries())
//=> true
isIterator(new Map())
//=> false
isIterator('')
//=> false
isIterator(1)
//=> false

```
#### Example
```js
const e = {}
eh[Symbol.toStringTag] = '[Map Iterator]'
isIterator(eh)
//=> true
eh[Symbol.toStringTag] = '[Set Iterator]'
isIterator(eh)
//=> true

```
#### Example
```js
class Eh extends Set()
 isIterator(new Eh().values())
 //=> true
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is.prototype "Jump back to the TOC."
