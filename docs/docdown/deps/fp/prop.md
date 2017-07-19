# prop.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `fp`
* <a href="#fp-prototype-"  data-meta="exports p undefined obj undefined s s a a Undefined"  data-call="exports p undefined obj undefined"  data-category="Object"  data-description="Function Returns a function that when supplied an object returns the indicated property of that object if it exists"  data-member="fp"  data-all="meta exports p undefined obj undefined n s s a a Undefined call exports p undefined obj undefined category Object description Function Returns a function that when supplied an object returns the indicated nproperty of that object if it exists name member fp see notes todos klassProps" >`fp.`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `fp`

<!-- div -->

<h3 id="fp-prototype-" data-member="fp" data-category="Object" data-name="prop"><code>fp.exports(p=undefined, obj=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/fp/prop.js#L25 "View in source") [&#x24C9;][1]

(Function): Returns a function that when supplied an object returns the indicated
property of that object, if it exists.


#### @sig 

s -> {s: a} -> a | Undefined 

#### @Since
v5.0.0

#### Arguments
1. `p=undefined` *(String)*: The property name
2. `obj=undefined` *(Object)*: The object to query

#### Returns
*(&#42;)*: The value at `obj.p`.

#### Example
```js
R.prop('x', { x: 100 }) //=> 100
R.prop('x', {}) //=> undefined

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #fp "Jump back to the TOC."
