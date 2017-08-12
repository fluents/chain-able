# empty.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-"  data-meta="exports x undefined a Boolean"  data-call="exports x undefined"  data-category="Logic"  data-description="Function Returns true if the given value is its type s empty value false otherwise"  data-member="is"  data-see="href https github com fluents chain able blob master src deps dopemerge emptyTarget js label empty href https github com ramda ramda issues 1228 label https github com ramda ramda issues 1228"  data-all="meta exports x undefined n a Boolean call exports x undefined category Logic description Function Returns true if the given value is its type s empty value n false otherwise name member is see href https github com fluents chain able blob master src deps dopemerge emptyTarget js label empty href https github com ramda ramda issues 1228 label https github com ramda ramda issues 1228 notes todos klassProps" >`is.`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-" data-member="is" data-category="Logic" data-name="empty"><code>is.exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/empty.js#L33 "View in source") [&#x24C9;][1]

(Function): Returns `true` if the given value is its type's empty value;
`false` otherwise.


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/dopemerge/emptyTarget.js" >empty</a>
* <a href="https://github.com/ramda/ramda/issues/1228" >https://github.com/ramda/ramda/issues/1228</a>

#### @sig 

a -> Boolean 

#### @Since
v0.1.0

#### Arguments
1. `x=undefined` *(&#42;)*: value to check if empty

#### Returns
*(boolean)*:

#### Example
```js
isEmpty([1, 2, 3]) //=> false
isEmpty([]) //=> true
isEmpty('') //=> true
isEmpty(null) //=> false
isEmpty({}) //=> true
isEmpty({ length: 0 }) //=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
