# toS.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-exports"  data-meta="exports obj undefined"  data-call="exports obj undefined"  data-category="Methods"  data-description="Function The base implementation of getTag without fallbacks for buggy environments"  data-name="exports"  data-member="is"  data-todos="obj Symbol toStringTag"  data-all="meta exports obj undefined call exports obj undefined category Methods description Function The base implementation of getTag without fallbacks for buggy environments name exports member is see notes todos obj Symbol toStringTag n klassProps" >`is.exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-exports" data-member="is" data-category="Methods" data-name="exports"><code>is.exports(obj=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/toS.js#L26 "View in source") [&#x24C9;][1]

(Function): The base implementation of `getTag` without fallbacks for buggy environments.


#### @todos 

- [ ] obj[Symbol.toStringTag]
 

#### @Since
3.0.0

#### Arguments
1. `obj=undefined` *(&#42;)*: The value to `Object.prototype.toString.call(obj)`.

#### Returns
*(string)*: Returns the `toStringTag`.

#### Example
```js
toS({})
//=> '[Object object]'

toS(function() {})
//=> '[Object function]'

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
