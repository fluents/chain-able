# escape-string-regex.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `matcher`
* <a href="#matcher-prototype-escapeStringRegExp"  data-meta="exports str undefined"  data-call="exports str undefined"  data-category="Methods"  data-description="Function"  data-name="escapeStringRegExp"  data-member="matcher"  data-see="href https github com fluents chain able blob master src deps fp replace js label fluents chain able blob master src deps fp replace js"  data-notes="also as const escapeStringRegexp require escape string regexp"  data-all="meta exports str undefined call exports str undefined category Methods description Function name escapeStringRegExp member matcher see href https github com fluents chain able blob master src deps fp replace js label fluents chain able blob master src deps fp replace js notes also as const escapeStringRegexp require escape string regexp n todos klassProps" >`matcher.escapeStringRegExp`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `matcher`

<!-- div -->

<h3 id="matcher-prototype-escapeStringRegExp" data-member="matcher" data-category="Methods" data-name="escapeStringRegExp"><code>matcher.exports(str=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/matcher/escape-string-regex.js#L21 "View in source") [&#x24C9;][1]

Function


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/fp/replace.js" >fluents/chain able/blob/master/src/deps/fp/replace.js</a>

#### @notes 

* also as const escapeStringRegexp = require('escape-string-regexp');
 

#### @Since
3.0.0

#### Arguments
1. `str=undefined` *(string)*: string to escape

#### Returns
*(string)*: escaped string

#### Example
```js
const escaped = escapeStringRegexp('how much $ for a unicorn?')
//=> 'how much \$ for a unicorn\?'
new RegExp(escaped)

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #matcher "Jump back to the TOC."
