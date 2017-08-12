# map.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-isMap"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Methods"  data-description="Function Checks if value is classified as a Map object"  data-name="isMap"  data-member="is"  data-see="href https github com jonschlinkert kind of label https github com jonschlinkert kind of"  data-all="meta exports x undefined call exports x undefined category Methods description Function Checks if value is classified as a Map object name isMap member is see href https github com jonschlinkert kind of label https github com jonschlinkert kind of notes todos klassProps" >`is.isMap`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-isMap" data-member="is" data-category="Methods" data-name="isMap"><code>is.exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/map.js#L43 "View in source") [&#x24C9;][1]

(Function): Checks if `value` is classified as a `Map` object.


#### @see 

* <a href="https://github.com/jonschlinkert/kind-of" >https://github.com/jonschlinkert/kind-of</a>

#### @Since
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

 [1]: #is "Jump back to the TOC."
