# simpleKindOf.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `exports`
* <a href="#exports"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Methods"  data-description="Function when Array array when null null else typeof x"  data-name="exports"  data-todos="type split pop replace s g toLowerCase"  data-all="meta exports x undefined call exports x undefined category Methods description Function when Array array when null null else typeof x name exports member see notes todos type split pop replace s g toLowerCase n klassProps" >`exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `exports`

<!-- div -->

<h3 id="exports" data-member="" data-category="Methods" data-name="exports"><code>exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/util/simpleKindOf.js#L24 "View in source") [&#x24C9;][1]

(Function): when Array -> 'array' when null -> 'null' else `typeof x`


#### @todos 

- [ ] `type.split(' ').pop().replace(/\s\[\]/g, '').toLowerCase()`
 

#### @Since
4.0.0

#### Arguments
1. `x=undefined` *(any)*: value for type

#### Returns
*(string)*: type
<br>
<br>
split at space, replace brackets and space, lowercase

#### Example
```js
simpleKindOf([]) //=> 'array'
simpleKindOf(null) //=> 'null'
simpleKindOf({}) //=> 'object'

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #exports "Jump back to the TOC."
