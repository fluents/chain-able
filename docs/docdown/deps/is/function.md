# function.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-isFunction"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Lang"  data-description="Function Checks if value is classified as a Function object"  data-name="isFunction"  data-member="is"  data-see="href http underscorejs org docs underscore html section 141 label underscore is function"  data-notes="x instanceof Function"  data-all="meta exports x undefined call exports x undefined category Lang description Function Checks if value is classified as a Function object name isFunction member is see href http underscorejs org docs underscore html section 141 label underscore is function notes x instanceof Function n todos klassProps" >`is.isFunction`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-isFunction" data-member="is" data-category="Lang" data-name="isFunction"><code>is.exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/function.js#L36 "View in source") [&#x24C9;][1]

(Function): Checks if `value` is classified as a `Function` object.


#### @see 

* <a href="http://underscorejs.org/docs/underscore.html#section-141" >underscore-is-function</a>

#### @notes 

* || x instanceof Function
 

#### @Since
3.0.0

#### Arguments
1. `x=undefined` *(&#42;)*: The value to check.

#### Returns
*(boolean)*: x isFunction

#### Example
```js
isFunction(function() {})
//=> true
isFunction(() => {})
//=> true
isFunction(new Function())
//=> true

isFunction(1)
//=> false
isFunction('')
//=> false
isFunction(/abc/)
// => false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
