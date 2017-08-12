# native.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-isNative"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Methods"  data-description="Function based on isNative from react fibers based on isNative from Lodash"  data-name="isNative"  data-member="is"  data-see="href https developer mozilla org en US docs Web JavaScript Reference Global Objects Function toString label Function toString href https github com fluents chain able search utf8 E2 9C 93 q http tc39 github io Function prototype toString revision type label functiontostring emca href https github com lodash lodash issues 2185 label lodash functiontostring issue href https esdiscuss org topic spec feedback on rev 6 content 2 label esdiscuss functiontostring"  data-all="meta exports x undefined call exports x undefined category Methods description Function based on isNative from react fibers based on isNative from Lodash name isNative member is see href https developer mozilla org en US docs Web JavaScript Reference Global Objects Function toString label Function toString href https github com fluents chain able search utf8 E2 9C 93 q http tc39 github io Function prototype toString revision type label functiontostring emca href https github com lodash lodash issues 2185 label lodash functiontostring issue href https esdiscuss org topic spec feedback on rev 6 content 2 label esdiscuss functiontostring notes todos klassProps" >`is.isNative`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-isNative" data-member="is" data-category="Methods" data-name="isNative"><code>is.exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/native.js#L14 "View in source") [&#x24C9;][1]

(Function): based on isNative from react-fibers, based on isNative() from Lodash


#### @see 

* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toString" >Function.toString</a>
* <a href="https://github.com/fluents/chain-able/search?utf8=%E2%9C%93&q=http://tc39.github.io/Function-prototype-toString-revision/&type=" >functiontostring-emca</a>
* <a href="https://github.com/lodash/lodash/issues/2185" >lodash-functiontostring-issue</a>
* <a href="https://esdiscuss.org/topic/spec-feedback-on-rev-6#content-2" >esdiscuss-functiontostring</a>

#### @Since
4.0.6

#### Arguments
1. `x=undefined` *(&#42;)*: value to check

#### Returns
*(boolean)*:

#### Example
```js
isNative(Array.prototype.push)
// => true

isNative(function normalFunction() {})
// => false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
