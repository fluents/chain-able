# keysObjOrArray.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `exports`
* <a href="#exports"  data-meta="exports object undefined"  data-call="exports object undefined"  data-category="Object"  data-description="Function Creates an array of the own enumerable property names of object br br Note Non object values are coerced to objects See the ES spec http ecma international org ecma 262 7 0 sec object keys for more details"  data-name="exports"  data-see="href https github com fluents chain able blob master src deps util props js label fluents chain able blob master src deps util props js"  data-todos="https github com lodash lodash blob master internal arrayLikeKeys js"  data-all="meta exports object undefined call exports object undefined category Object description Function Creates an array of the own enumerable property names of object n br n br n Note Non object values are coerced to objects See the n ES spec http ecma international org ecma 262 7 0 sec object keys nfor more details name exports member see href https github com fluents chain able blob master src deps util props js label fluents chain able blob master src deps util props js notes todos https github com lodash lodash blob master internal arrayLikeKeys js n klassProps" >`exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `exports`

<!-- div -->

<h3 id="exports" data-member="" data-category="Object" data-name="exports"><code>exports(object=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/util/keysObjOrArray.js#L43 "View in source") [&#x24C9;][1]

(Function): Creates an array of the own enumerable property names of `object`.
<br>
<br>
**Note:** Non-object values are coerced to objects. See the
[ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
for more details.


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/util/props.js" >fluents/chain able/blob/master/src/deps/util/props.js</a>

#### @todos 

- [ ] https://github.com/lodash/lodash/blob/master/.internal/arrayLikeKeys.js
 

#### @Since
0.1.0

#### Arguments
1. `object=undefined` *(Object)*: The object to query.

#### Returns
*(Array)*: Returns the array of property names.

#### Example
```js
function Foo() {
  this.a = 1
  this.b = 2
}

Foo.prototype.c = 3

keys(new Foo())
// => ['a', 'b'] (iteration order is not guaranteed)

keys('hi')
// => ['0', '1']

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #exports "Jump back to the TOC."
