# date.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-isDate"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Methods"  data-description="Function"  data-name="isDate"  data-member="is"  data-all="meta exports x undefined call exports x undefined category Methods description Function name isDate member is see notes todos klassProps" >`is.isDate`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-isDate" data-member="is" data-category="Methods" data-name="isDate"><code>is.exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/date.js#L36 "View in source") [&#x24C9;][1]

Function


#### @extends




#### @Since
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

 [1]: #is "Jump back to the TOC."
