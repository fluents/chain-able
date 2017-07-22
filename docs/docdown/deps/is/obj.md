# obj.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-isObj"  data-meta="exports value undefined"  data-call="exports value undefined"  data-category="Lang"  data-description="Function"  data-name="isObj"  data-member="is"  data-notes="Object prototype toString call val object Object"  data-all="meta exports value undefined call exports value undefined category Lang description Function name isObj member is see notes Object prototype toString call val object Object n todos klassProps" >`is.isObj`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-isObj" data-member="is" data-category="Lang" data-name="isObj"><code>is.exports(value=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/obj.js#L38 "View in source") [&#x24C9;][1]

Function


#### @notes 

* Object.prototype.toString.call(val) === '[object Object]'
 

#### @Since
3.0.0

#### Arguments
1. `value=undefined` *(&#42;)*: The value to check.

#### Returns
*(boolean)*: Returns `true` if `value` is an object, else `false`.

#### Example
```js
isObject({})
// => true

isObject([1, 2, 3])
// => true

isObject(Function)
// => true

isObject(null)
// => false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
