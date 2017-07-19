# objNotNull.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-isObjStrict"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Methods"  data-description="Function"  data-name="isObjStrict"  data-member="is"  data-see="href https github com fluents chain able blob master src deps is obj js label fluents chain able blob master src deps is obj js href https github com fluents chain able blob master src deps is objWithKeys js label fluents chain able blob master src deps is obj with keys js href https github com fluents chain able blob master src deps is objTypeof js label fluents chain able blob master src deps is obj typeof js href https github com fluents chain able blob master src deps is null js label fluents chain able blob master src deps is null js"  data-todos="Array isArray"  data-all="meta exports x undefined call exports x undefined category Methods description Function name isObjStrict member is see href https github com fluents chain able blob master src deps is obj js label fluents chain able blob master src deps is obj js href https github com fluents chain able blob master src deps is objWithKeys js label fluents chain able blob master src deps is obj with keys js href https github com fluents chain able blob master src deps is objTypeof js label fluents chain able blob master src deps is obj typeof js href https github com fluents chain able blob master src deps is null js label fluents chain able blob master src deps is null js notes todos Array isArray n klassProps" >`is.isObjStrict`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-isObjStrict" data-member="is" data-category="Methods" data-name="isObjStrict"><code>is.exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/objNotNull.js#L42 "View in source") [&#x24C9;][1]

Function


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/obj.js" >fluents/chain able/blob/master/src/deps/is/obj.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/objWithKeys.js" >fluents/chain able/blob/master/src/deps/is/obj with keys.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/objTypeof.js" >fluents/chain able/blob/master/src/deps/is/obj typeof.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/null.js" >fluents/chain able/blob/master/src/deps/is/null.js</a>

#### @todos 

- [ ] !Array.isArray
 

#### @extends




#### @Since
3.0.0

#### Arguments
1. `x=undefined` *(&#42;)*: value

#### Returns
*(boolean)*: isObjStrict

#### Example
```js
isObjStrict(new Object())
//=> true
isObjStrict({})
//=> true
isObjStrict(Object.create(null))
//=> true
isObjStrict(null)
//=> false

isObjStrict(new Set())
//=> false
isObjStrict(function() {})
//=> false
isObjStrict('')
//=> false
isObjStrict(1)
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
