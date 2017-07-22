# toS.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-exports"  data-meta="exports obj undefined"  data-call="exports obj undefined"  data-category="Methods"  data-description="Function The base implementation of getTag without fallbacks for buggy environments"  data-name="exports"  data-member="is"  data-see="href https github com lodash lodash blob master internal baseGetTag js label https github com lodash lodash blob master internal baseGetTag js href https github com jonschlinkert kind of label https github com jonschlinkert kind of href https github com substack js traverse blob master index js L285 label https github com substack js traverse blob master index js L285 href http luxiyalu com object prototype tostring call label http luxiyalu com object prototype tostring call"  data-todos="obj Symbol toStringTag run deopt check on this invoking see how many invocations are needed to inline"  data-all="meta exports obj undefined call exports obj undefined category Methods description Function The base implementation of getTag without fallbacks for buggy environments name exports member is see href https github com lodash lodash blob master internal baseGetTag js label https github com lodash lodash blob master internal baseGetTag js href https github com jonschlinkert kind of label https github com jonschlinkert kind of href https github com substack js traverse blob master index js L285 label https github com substack js traverse blob master index js L285 href http luxiyalu com object prototype tostring call label http luxiyalu com object prototype tostring call notes todos obj Symbol toStringTag n run deopt check on this invoking see how many invocations are needed to inline n klassProps" >`is.exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-exports" data-member="is" data-category="Methods" data-name="exports"><code>is.exports(obj=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/toS.js#L34 "View in source") [&#x24C9;][1]

(Function): The base implementation of `getTag` without fallbacks for buggy environments.


#### @see 

* <a href="https://github.com/lodash/lodash/blob/master/.internal/baseGetTag.js" >https://github.com/lodash/lodash/blob/master/.internal/baseGetTag.js</a>
* <a href="https://github.com/jonschlinkert/kind-of" >https://github.com/jonschlinkert/kind-of</a>
* <a href="https://github.com/substack/js-traverse/blob/master/index.js#L285" >https://github.com/substack/js-traverse/blob/master/index.js#L285</a>
* <a href="http://luxiyalu.com/object-prototype-tostring-call/" >http://luxiyalu.com/object-prototype-tostring-call/</a>

#### @todos 

- [ ] obj[Symbol.toStringTag]
- [ ] run deopt check on this invoking see how many invocations... are needed to inline
 

#### @Since
3.0.0

#### Arguments
1. `obj=undefined` *(&#42;)*: The value to `Object.prototype.toString.call(obj)`.

#### Returns
*(string)*: Returns the `toStringTag`.

#### Example
```js
toS({})
//=> '[object Object]'

toS(function() {})
//=> '[Object Function]'

getTag([])
//=> '[object Array]'

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
