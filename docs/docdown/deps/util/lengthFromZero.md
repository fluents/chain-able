# lengthFromZero.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `util`
* <a href="#util-prototype-lengthFromZero"  data-meta="lengthFromZero obj undefined"  data-call="lengthFromZero obj undefined"  data-category="Methods"  data-description="Function when length 1 use length 1 otherwise when length 1 use 0 default use length"  data-name="lengthFromZero"  data-member="util"  data-see="href https github com fluents chain able blob master src deps util length js label fluents chain able blob master src deps util length js href https github com fluents chain able blob master src deps util lengthMinusOne js label fluents chain able blob master src deps util length minus one js"  data-todos="lense to use an object or transform it to one with length const len prop length when isObj use len otherwise value const coerceLength lense isObj len"  data-all="meta lengthFromZero obj undefined call lengthFromZero obj undefined category Methods description Function when length 1 use length 1 notherwise when length 1 use 0 ndefault use length name lengthFromZero member util see href https github com fluents chain able blob master src deps util length js label fluents chain able blob master src deps util length js href https github com fluents chain able blob master src deps util lengthMinusOne js label fluents chain able blob master src deps util length minus one js notes todos lense to use an object or transform it to one with length n const len prop length n when isObj use len otherwise value n const coerceLength lense isObj len n klassProps" >`util.lengthFromZero`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `util`

<!-- div -->

<h3 id="util-prototype-lengthFromZero" data-member="util" data-category="Methods" data-name="lengthFromZero"><code>util.lengthFromZero(obj=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/util/lengthFromZero.js#L28 "View in source") [&#x24C9;][1]

(Function): when length > `1`, use length-1
otherwise, when length == `1`, use `0`
default, use length


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/util/length.js" >fluents/chain able/blob/master/src/deps/util/length.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/util/lengthMinusOne.js" >fluents/chain able/blob/master/src/deps/util/length minus one.js</a>

#### @todos 

- [ ] lense to use an object, or transform it to one with .length?
 const len = prop('length')
 // when isObj, use len, otherwise, value
 const coerceLength = lense([isObj, len])
 

#### @Since
5.0.0-beta.2

#### Arguments
1. `obj=undefined` *(Array|Object|number)*: with length

#### Returns
*(number)*: obj length from `0`

#### Example
```js
lengthFromZero([1]) //=> 1
lengthFromZero([]) //=> 0
lengthFromZero([1, 2, 3]) //=> 2

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #util "Jump back to the TOC."
