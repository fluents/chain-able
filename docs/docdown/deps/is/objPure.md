# objPure.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-isObjPure"  data-meta="isObjPure x undefined"  data-call="isObjPure x undefined"  data-category="Methods"  data-description="Function"  data-name="isObjPure"  data-member="is"  data-all="meta n n isObjPure x undefined call isObjPure x undefined category Methods description Function name isObjPure member is see notes todos klassProps" >`is.isObjPure`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-isObjPure" data-member="is" data-category="Methods" data-name="isObjPure"><code>is.isObjPure(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/objPure.js#L34 "View in source") [&#x24C9;][1]

Function


#### @extends 

* undefined
* undefined
* undefined
* undefined



#### @Since
3.0.0

#### Arguments
1. `x=undefined` *(&#42;)*: value to check

#### Returns
*(boolean)*: is obj & !null & !undefined & !array & !function

#### Example
```js
isObjPure(function() {})
//=> false
isObjPure(null)
//=> false
isObjPure([])
//=> false

isObjPure({})
//=> true

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
