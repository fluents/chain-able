# booleanPrimitive.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-isBooleanPrimitive"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Lang"  data-description="Function Checks if value is classified as a boolean primitive NOT object"  data-name="isBooleanPrimitive"  data-member="is"  data-see="href https github com fluents chain able blob master src deps is toS js label is toS"  data-notes="could also have typeof x boolean true false test x"  data-all="meta n n exports x undefined call exports x undefined category Lang description Function Checks if value is classified as a boolean primitive NOT object name isBooleanPrimitive member is see href https github com fluents chain able blob master src deps is toS js label is toS notes could also have typeof x boolean true false test x n todos klassProps" >`is.isBooleanPrimitive`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-isBooleanPrimitive" data-member="is" data-category="Lang" data-name="isBooleanPrimitive"><code>is.exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/booleanPrimitive.js#L33 "View in source") [&#x24C9;][1]

(Function): Checks if `value` is classified as a boolean primitive NOT object.


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/toS.js" >is/toS</a>

#### @notes 

* could also have typeof x === 'boolean' || (/true|false/).test(x)
 

#### @extends 

* undefined
* undefined



#### @Since
5.0.0-beta.4

#### Arguments
1. `x=undefined` *(&#42;)*: value

#### Returns
*(boolean)*: isBooleanPrimitive

#### Example
```js
isBooleanPrimitive(false)
//=> true
isBooleanPrimitive(new Boolean(1))
//=> false

isBooleanPrimitive(1)
//=> false
isBooleanPrimitive('')
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
