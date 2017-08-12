# first.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `fp`
* <a href="#fp-prototype-"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="List"  data-description="Function Returns the first element of the given list or string In some libraries this function is named first"  data-member="fp"  data-see="href https github com lodash lodash blob master head js label https github com lodash lodash blob master head js href https github com ramda ramda blob master src head js label https github com ramda ramda blob master src head js"  data-todos="could just pipe nth"  data-all="meta exports x undefined call exports x undefined category List description Function Returns the first element of the given list or string In some libraries nthis function is named first name member fp see href https github com lodash lodash blob master head js label https github com lodash lodash blob master head js href https github com ramda ramda blob master src head js label https github com ramda ramda blob master src head js notes todos could just pipe nth n klassProps" >`fp.`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `fp`

<!-- div -->

<h3 id="fp-prototype-" data-member="fp" data-category="List" data-name="first"><code>fp.exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/fp/first.js#L33 "View in source") [&#x24C9;][1]

(Function): Returns the first element of the given list or string. In some libraries
this function is named `first`.


#### @see 

* <a href="https://github.com/lodash/lodash/blob/master/head.js" >https://github.com/lodash/lodash/blob/master/head.js</a>
* <a href="https://github.com/ramda/ramda/blob/master/src/head.js" >https://github.com/ramda/ramda/blob/master/src/head.js</a>
* <a href="undefined" ></a>

#### @todos 

- [ ] could just pipe nth
 

#### @extends




#### @Since
v5.0.0

#### Arguments
1. `x=undefined` *(&#42;)*: Array or Object find the last key of

#### Returns
*(&#42;)*: value at last index

#### Example
```js
first(['fi', 'fo', 'fum']) //=> 'fi'
first([]) //=> undefined

first('abc') //=> 'a'
first('') //=> ''

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #fp "Jump back to the TOC."
