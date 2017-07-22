# numberPrimitive.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-isNumberPrimitive"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Methods"  data-description="Function"  data-name="isNumberPrimitive"  data-member="is"  data-see="href https github com fluents chain able blob master src deps is real js label is real"  data-all="meta exports x undefined call exports x undefined category Methods description Function name isNumberPrimitive member is see href https github com fluents chain able blob master src deps is real js label is real notes todos klassProps" >`is.isNumberPrimitive`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-isNumberPrimitive" data-member="is" data-category="Methods" data-name="isNumberPrimitive"><code>is.exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/numberPrimitive.js#L35 "View in source") [&#x24C9;][1]

Function


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/real.js" >is/real</a>

#### @Since
3.0.0

#### Arguments
1. `x=undefined` *(&#42;)*: value

#### Returns
*(boolean)*: isNumberPrimitive

#### Example
```js
isNumberPrimitive(1)
//=> true
isNumberPrimitive(Number(1))
//=> true
isNumberPrimitive(NaN)
//=> true
isNumberPrimitive(new Number(1))
//=> false

isNumberPrimitive(null)
//=> false
isNumberPrimitive(undefined)
//=> false
isNumberPrimitive(void 0)
//=> false
isNumberPrimitive({})
//=> false
isNumberPrimitive('')
//=> false
isNumberPrimitive(false)
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
