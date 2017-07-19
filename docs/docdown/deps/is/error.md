# error.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-isError"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Methods"  data-description="Function"  data-name="isError"  data-member="is"  data-all="meta exports x undefined call exports x undefined category Methods description Function name isError member is see notes todos klassProps" >`is.isError`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-isError" data-member="is" data-category="Methods" data-name="isError"><code>is.exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/error.js#L35 "View in source") [&#x24C9;][1]

Function

#### Arguments
1. `x=undefined` *(&#42;)*: value

#### Returns
*(boolean)*: isError

#### Example
```js
isError(new Error())
//=> true
isError(new Error().stack)
//=> false
isError(1)
//=> false
isError('')
//=> false

```
#### Example
```js
const e = {}
eh[Symbol.toStringTag] = '[Object Error]'
isError(eh)
//=> true

```
#### Example
```js
class Eh extends Error()
 isError(new Eh())
 //=> true
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
