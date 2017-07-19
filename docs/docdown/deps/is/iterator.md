# iterator.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-isIterator"  data-meta="x undefined"  data-call="x undefined"  data-category="Methods"  data-description="Function"  data-name="isIterator"  data-member="is"  data-all="meta x undefined call x undefined category Methods description Function name isIterator member is see notes todos klassProps" >`is.isIterator`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-isIterator" data-member="is" data-category="Methods" data-name="isIterator"><code>is.(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/iterator.js#L42 "View in source") [&#x24C9;][1]

Function


#### @Since
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

 [1]: #is "Jump back to the TOC."
