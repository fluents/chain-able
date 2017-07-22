# replace.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `fp`
* <a href="#fp-prototype-"  data-meta="exports pattern undefined replacement undefined str undefined RegExp String String String String"  data-call="exports pattern undefined replacement undefined str undefined"  data-category="String"  data-description="Function Replace a substring or regex match in a string with a replacement"  data-member="fp"  data-see="href https github com ramda ramda blob master src replace js label ramda ramda blob master src replace js href https github com lodash lodash blob master replace js label lodash lodash blob master replace js"  data-all="meta exports pattern undefined replacement undefined str undefined n RegExp String String String String call exports pattern undefined replacement undefined str undefined category String description Function Replace a substring or regex match in a string with a replacement name member fp see href https github com ramda ramda blob master src replace js label ramda ramda blob master src replace js href https github com lodash lodash blob master replace js label lodash lodash blob master replace js notes todos klassProps" >`fp.`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `fp`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/typings/fp.d.ts">🌊  Types: fp.d</a>&nbsp;

<a href="https://github.com/fluents/chain-able/blob/master/test/fp/replace.js">🔬  Tests: replace</a>&nbsp;

<h3 id="fp-prototype-" data-member="fp" data-category="String" data-name="replace"><code>fp.exports(pattern=undefined, replacement=undefined, str=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/fp/replace.js#L30 "View in source") [&#x24C9;][1]

(Function): Replace a substring or regex match in a string with a replacement.


#### @see 

* <a href="https://github.com/ramda/ramda/blob/master/src/replace.js" >ramda/ramda/blob/master/src/replace.js</a>
* <a href="https://github.com/lodash/lodash/blob/master/replace.js" >lodash/lodash/blob/master/replace.js</a>

#### @sig 

RegExp|String -> String -> String -> String 

#### @Since
v5.0.0

#### Arguments
1. `pattern=undefined` *(RegExp|String)*: A regular expression or a substring to match.
2. `replacement=undefined` *(String)*: The string to replace the matches with.
3. `str=undefined` *(String)*: The String to do the search and replacement in.

#### Returns
*(String)*: The result.

#### Example
```js
replace('foo', 'bar', 'foo foo foo') //=> 'bar foo foo'
replace(/foo/, 'bar', 'foo foo foo') //=> 'bar foo foo'

// Use the "g" (global) flag to replace all occurrences:
replace(/foo/g, 'bar', 'foo foo foo') //=> 'bar bar bar'

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #fp "Jump back to the TOC."
