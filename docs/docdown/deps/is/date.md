# date.js API documentation

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
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/date.js#L35 "View in source") [&#x24C9;][1]



#### Since
3.0.0

#### Arguments
1. `x=undefined` *(&#42;)*: value

#### Returns
*(boolean)*: isDate

#### Example
```js
isDate(new Date())
//=> true
isDate(Date.now())
//=> false
isDate(1)
//=> false
isDate('')
//=> false

```
#### Example
```js
const e = {}
eh[Symbol.toStringTag] = '[Object Date]'
isDate(eh)
//=> true

```
#### Example
```js
class Eh extends Date()
 isDate(new Eh())
 //=> true
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is.prototype "Jump back to the TOC."
