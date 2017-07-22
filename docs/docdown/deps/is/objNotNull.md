# objNotNull.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-isObjNotNull"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Methods"  data-description="Function"  data-name="isObjNotNull"  data-member="is"  data-see="href https github com fluents chain able blob master src deps is obj js label is obj href https github com fluents chain able blob master src deps is objWithKeys js label is objWithKeys href https github com fluents chain able blob master src deps is objTypeof js label is objTypeof href https github com fluents chain able blob master src deps is null js label is null href https github com sindresorhus is obj blob master index js label is obj href https github com lodash lodash blob master isObjectLike js label lodash is object like"  data-todos="Array isArray"  data-all="meta exports x undefined call exports x undefined category Methods description Function name isObjNotNull member is see href https github com fluents chain able blob master src deps is obj js label is obj href https github com fluents chain able blob master src deps is objWithKeys js label is objWithKeys href https github com fluents chain able blob master src deps is objTypeof js label is objTypeof href https github com fluents chain able blob master src deps is null js label is null href https github com sindresorhus is obj blob master index js label is obj href https github com lodash lodash blob master isObjectLike js label lodash is object like notes todos Array isArray n klassProps" >`is.isObjNotNull`</a>

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

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/obj.js" >is/obj</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/objWithKeys.js" >is/objWithKeys</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/objTypeof.js" >is/objTypeof</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/null.js" >is/null</a>
* <a href="https://github.com/sindresorhus/is-obj/blob/master/index.js" >is-obj</a>
* <a href="https://github.com/lodash/lodash/blob/master/isObjectLike.js" >lodash-is-object-like</a>

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
