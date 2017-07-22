# notEmptyArray.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-isNotEmptyArray"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Methods"  data-description="Function value is an Array with at least 1 value"  data-name="isNotEmptyArray"  data-member="is"  data-see="href https github com fluents chain able blob master src deps is objWithKeys js label fluents chain able blob master src deps is obj with keys js href https github com fluents chain able blob master src deps is array js label fluents chain able blob master src deps is array js"  data-all="meta exports x undefined call exports x undefined category Methods description Function value is an Array with at least 1 value name isNotEmptyArray member is see href https github com fluents chain able blob master src deps is objWithKeys js label fluents chain able blob master src deps is obj with keys js href https github com fluents chain able blob master src deps is array js label fluents chain able blob master src deps is array js notes todos klassProps" >`is.isNotEmptyArray`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-isNotEmptyArray" data-member="is" data-category="Methods" data-name="isNotEmptyArray"><code>is.exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/notEmptyArray.js#L30 "View in source") [&#x24C9;][1]

(Function): value is an Array, with at least `1` value


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/objWithKeys.js" >fluents/chain able/blob/master/src/deps/is/obj with keys.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/array.js" >fluents/chain able/blob/master/src/deps/is/array.js</a>

#### @extends




#### @Since
4.0.0-alpha.1

#### Arguments
1. `x=undefined` *(&#42;)*: value

#### Returns
*(boolean)*: isNotEmptyArray

#### Example
```js
isNotEmptyArray(new Array(3))
//=> true
isNotEmptyArray([1, 2, 3])
//=> true

isNotEmptyArray(new Array())
//=> false
isNotEmptyArray([])
//=> false
isNotEmptyArray(new Map())
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
