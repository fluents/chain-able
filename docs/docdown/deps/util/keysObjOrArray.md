# keysObjOrArray.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `keysObjOrArray`
* <a href="#keysObjOrArray"  data-meta="keysObjOrArray obj undefined"  data-call="keysObjOrArray obj undefined"  data-category="Object"  data-description="Function Creates an array of the own enumerable property names of object Note Non object values are coerced to objects See the ES spec http ecma international org ecma 262 7 0 sec object keys for more details"  data-name="keysObjOrArray"  data-see="href https github com fluents chain able blob master src deps util lengthFromZero js label deps util lengthFromZero href https github com fluents chain able blob master src deps util props js label deps util props href https github com lodash lodash blob master keys js label lodash keys href https github com lodash lodash blob master internal getAllKeys js label lodash get all keys"  data-todos="https github com lodash lodash blob master internal arrayLikeKeys js"  data-all="meta keysObjOrArray obj undefined call keysObjOrArray obj undefined category Object description Function Creates an array of the own enumerable property names of object n Note Non object values are coerced to objects See the n ES spec http ecma international org ecma 262 7 0 sec object keys nfor more details name keysObjOrArray member see href https github com fluents chain able blob master src deps util lengthFromZero js label deps util lengthFromZero href https github com fluents chain able blob master src deps util props js label deps util props href https github com lodash lodash blob master keys js label lodash keys href https github com lodash lodash blob master internal getAllKeys js label lodash get all keys notes todos https github com lodash lodash blob master internal arrayLikeKeys js n klassProps" >`keysObjOrArray`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `keysObjOrArray`

<!-- div -->

<h3 id="keysObjOrArray" data-member="" data-category="Object" data-name="keysObjOrArray"><code>keysObjOrArray(obj=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/util/keysObjOrArray.js#L27 "View in source") [&#x24C9;][1]

(Function): Creates an array of the own enumerable property names of `object`.
**Note:** Non-object values are coerced to objects. See the
[ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
for more details.


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/util/lengthFromZero.js" >deps/util/lengthFromZero</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/util/props.js" >deps/util/props</a>
* <a href="undefined" ></a>
* <a href="https://github.com/lodash/lodash/blob/master/keys.js" >lodash-keys</a>
* <a href="https://github.com/lodash/lodash/blob/master/.internal/getAllKeys.js" >lodash-get-all-keys</a>

#### @todos 

- [ ] https://github.com/lodash/lodash/blob/master/.internal/arrayLikeKeys.js
 

#### @Since
0.1.0

#### Arguments
1. `obj=undefined` *(Object)*: The object to query.

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

 [1]: #keysobjorarray "Jump back to the TOC."
