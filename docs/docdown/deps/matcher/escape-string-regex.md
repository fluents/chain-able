# escape-string-regex.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `matcher.prototype`
* <a href="#matcher-prototype-exports">`matcher.prototype.exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `matcher.prototype`

<!-- div -->

<h3 id="matcher-prototype-exports"><a href="#matcher-prototype-exports">#</a>&nbsp;<code>matcher.prototype.exports(str)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/matcher/escape-string-regex.js#L22 "View in source") [&#x24C9;][1]



#### Since
3.0.0

#### Arguments
1. `str` *(string)*: string to escape

#### Returns
*(string)*: escaped string
<br>
<br>
{@link https://github.com/sindresorhus/escape-string-regexp escape-string-regexp}

#### Example
```js
const escaped = escapeStringRegexp('how much $ for a unicorn?');
   //=> 'how much \$ for a unicorn\?'
   new RegExp(escaped);
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #matcher.prototype "Jump back to the TOC."
