# objWithKeys.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-isObjWithKeys"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Methods"  data-description="Function"  data-name="isObjWithKeys"  data-member="is"  data-see="href https github com fluents chain able blob master src deps is obj js label fluents chain able blob master src deps is obj js href https github com fluents chain able blob master src deps is objWithKeys js label fluents chain able blob master src deps is obj with keys js href https github com fluents chain able blob master src deps is null js label fluents chain able blob master src deps is null js"  data-todos="NOTE need to be more careful needs to check for vanilla objects not native ones since e g Error has no keys"  data-all="meta exports x undefined call exports x undefined category Methods description Function name isObjWithKeys member is see href https github com fluents chain able blob master src deps is obj js label fluents chain able blob master src deps is obj js href https github com fluents chain able blob master src deps is objWithKeys js label fluents chain able blob master src deps is obj with keys js href https github com fluents chain able blob master src deps is null js label fluents chain able blob master src deps is null js notes todos NOTE need to be more careful needs to check for vanilla objects not native ones since e g Error has no keys n klassProps" >`is.isObjWithKeys`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-isObjWithKeys" data-member="is" data-category="Methods" data-name="isObjWithKeys"><code>is.exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/objWithKeys.js#L43 "View in source") [&#x24C9;][1]

Function


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/obj.js" >fluents/chain able/blob/master/src/deps/is/obj.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/objWithKeys.js" >fluents/chain able/blob/master/src/deps/is/obj with keys.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/null.js" >fluents/chain able/blob/master/src/deps/is/null.js</a>

#### @todos 

- [ ] @NOTE need to be more careful, needs to check for vanilla objects, not native ones since e.g. Error has no keys
 

#### @extends




#### @Since
3.0.0

#### Arguments
1. `x=undefined` *(&#42;)*: value

#### Returns
*(boolean)*: isObjWithKeys

#### Example
```js
isObjWithKeys({ eh: true })
//=> true
isObjWithKeys({})
//=> false
isObjWithKeys(new Object())
//=> false
isObjWithKeys(Object.create(null))
//=> false
isObjWithKeys(null)
//=> false
isObjWithKeys(new Set())
//=> false
isObjWithKeys(function() {})
//=> false
isObjWithKeys('')
//=> false
isObjWithKeys(1)
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
