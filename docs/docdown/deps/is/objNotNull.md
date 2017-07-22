# objNotNull.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-isObjNotNull"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Methods"  data-description="Function"  data-name="isObjNotNull"  data-member="is"  data-see="href https github com fluents chain able blob master src deps is obj js label fluents chain able blob master src deps is obj js href https github com fluents chain able blob master src deps is objWithKeys js label fluents chain able blob master src deps is obj with keys js href https github com fluents chain able blob master src deps is objTypeof js label fluents chain able blob master src deps is obj typeof js href https github com fluents chain able blob master src deps is null js label fluents chain able blob master src deps is null js href https github com sindresorhus is obj blob master index js label sindresorhus is obj blob master index js href https github com lodash lodash blob master isObjectLike js label lodash lodash blob master is object like js"  data-todos="Array isArray"  data-all="meta exports x undefined call exports x undefined category Methods description Function name isObjNotNull member is see href https github com fluents chain able blob master src deps is obj js label fluents chain able blob master src deps is obj js href https github com fluents chain able blob master src deps is objWithKeys js label fluents chain able blob master src deps is obj with keys js href https github com fluents chain able blob master src deps is objTypeof js label fluents chain able blob master src deps is obj typeof js href https github com fluents chain able blob master src deps is null js label fluents chain able blob master src deps is null js href https github com sindresorhus is obj blob master index js label sindresorhus is obj blob master index js href https github com lodash lodash blob master isObjectLike js label lodash lodash blob master is object like js notes todos Array isArray n klassProps" >`is.isObjNotNull`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-isObjNotNull" data-member="is" data-category="Methods" data-name="isObjNotNull"><code>is.exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/objNotNull.js#L34 "View in source") [&#x24C9;][1]

Function


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/obj.js" >fluents/chain able/blob/master/src/deps/is/obj.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/objWithKeys.js" >fluents/chain able/blob/master/src/deps/is/obj with keys.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/objTypeof.js" >fluents/chain able/blob/master/src/deps/is/obj typeof.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/null.js" >fluents/chain able/blob/master/src/deps/is/null.js</a>
* <a href="https://github.com/sindresorhus/is-obj/blob/master/index.js" >sindresorhus/is obj/blob/master/index.js</a>
* <a href="https://github.com/lodash/lodash/blob/master/isObjectLike.js" >lodash/lodash/blob/master/is object like.js</a>

#### @todos 

- [ ] !Array.isArray
 

#### @extends




#### @Since
3.0.0

#### Arguments
1. `x=undefined` *(&#42;)*: value

#### Returns
*(boolean)*: isObjNotNull

#### Example
```js
isObjNotNull(new Object())
//=> true
isObjNotNull({})
//=> true
isObjNotNull(Object.create(null))
//=> true
isObjNotNull(null)
//=> false

isObjNotNull(new Set())
//=> false
isObjNotNull(function() {})
//=> false
isObjNotNull('')
//=> false
isObjNotNull(1)
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
