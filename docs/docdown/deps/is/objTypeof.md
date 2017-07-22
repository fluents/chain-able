# objTypeof.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-isObjLoose"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Methods"  data-description="Function"  data-name="isObjLoose"  data-member="is"  data-see="href https github com fluents chain able blob master src deps is obj js label is obj href https github com fluents chain able blob master src deps is objWithKeys js label is objWithKeys href https github com fluents chain able search utf8 E2 9C 93 q is objStrict type label is objStrict href https github com fluents chain able blob master src deps is null js label is null"  data-all="meta exports x undefined call exports x undefined category Methods description Function name isObjLoose member is see href https github com fluents chain able blob master src deps is obj js label is obj href https github com fluents chain able blob master src deps is objWithKeys js label is objWithKeys href https github com fluents chain able search utf8 E2 9C 93 q is objStrict type label is objStrict href https github com fluents chain able blob master src deps is null js label is null notes todos klassProps" >`is.isObjLoose`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-isObjLoose" data-member="is" data-category="Methods" data-name="isObjLoose"><code>is.exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/objTypeof.js#L34 "View in source") [&#x24C9;][1]

Function


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/obj.js" >is/obj</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/objWithKeys.js" >is/objWithKeys</a>
* <a href="https://github.com/fluents/chain-able/search?utf8=%E2%9C%93&q=is/objStrict&type=" >is/objStrict</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/null.js" >is/null</a>

#### @Since
3.0.0

#### Arguments
1. `x=undefined` *(&#42;)*: value

#### Returns
*(boolean)*: isObjLoose

#### Example
```js
isObjLoose(new Object())
//=> true
isObjLoose({})
//=> true
isObjLoose(Object.create(null))
//=> true
isObjLoose(null)
//=> true

isObjLoose(new Set())
//=> false
isObjLoose(function() {})
//=> false
isObjLoose('')
//=> false
isObjLoose(1)
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
