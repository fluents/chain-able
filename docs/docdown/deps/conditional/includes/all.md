# all.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `arrayIncludesAll`
* <a href="#arrayIncludesAll"  data-meta="arrayIncludesAll needles undefined haystack undefined"  data-call="arrayIncludesAll needles undefined haystack undefined"  data-category="Methods"  data-description="Function"  data-name="arrayIncludesAll"  data-all="meta arrayIncludesAll needles undefined haystack undefined call arrayIncludesAll needles undefined haystack undefined category Methods description Function name arrayIncludesAll member see notes todos klassProps" >`arrayIncludesAll`</a>

<!-- /div -->

<!-- div -->

## `includesAll`
* <a href="#includesAll"  data-meta="includesAll needle undefined haystack undefined"  data-call="includesAll needle undefined haystack undefined"  data-category="Methods"  data-description="Function"  data-name="includesAll"  data-all="meta includesAll needle undefined haystack undefined call includesAll needle undefined haystack undefined category Methods description Function name includesAll member see notes todos klassProps" >`includesAll`</a>

<!-- /div -->

<!-- div -->

## `stringIncludesAll`
* <a href="#stringIncludesAll"  data-meta="stringIncludesAll needle undefined haystack undefined"  data-call="stringIncludesAll needle undefined haystack undefined"  data-category="Methods"  data-description="Function"  data-name="stringIncludesAll"  data-all="meta stringIncludesAll needle undefined haystack undefined call stringIncludesAll needle undefined haystack undefined category Methods description Function name stringIncludesAll member see notes todos klassProps" >`stringIncludesAll`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `arrayIncludesAll`

<!-- div -->

<h3 id="arrayIncludesAll" data-member="" data-category="Methods" data-name="arrayIncludesAll"><code>arrayIncludesAll(needles=undefined, haystack=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/conditional/includes/all.js#L28 "View in source") [&#x24C9;][1]

Function

#### Arguments
1. `needles=undefined` *(string&#91;&#93;)*:
2. `haystack=undefined` *(string&#91;&#93;)*:

#### Returns
*(boolean)*:

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `includesAll`

<!-- div -->

<h3 id="includesAll" data-member="" data-category="Methods" data-name="includesAll"><code>includesAll(needle=undefined, haystack=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/conditional/includes/all.js#L54 "View in source") [&#x24C9;][1]

Function


#### @Since
4.0.0

#### Arguments
1. `needle=undefined` *(string|string&#91;&#93;)*: everything in haystack is in this
2. `haystack=undefined` *(string&#91;&#93;)*: everything in this is in the needle

#### Returns
*(boolean)*:

#### Example
```js
/// 'canada' and 'can' are both in it, so true
includesAll('canada', ['canada', 'can'])
includesAll(['eh'], 'e') //=> true
includesAll(['eh'], 'nope') //=> false
includesAll('eh', ['no', 'eh']) //=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `stringIncludesAll`

<!-- div -->

<h3 id="stringIncludesAll" data-member="" data-category="Methods" data-name="stringIncludesAll"><code>stringIncludesAll(needle=undefined, haystack=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/conditional/includes/all.js#L13 "View in source") [&#x24C9;][1]

Function

#### Arguments
1. `needle=undefined` *(string)*:
2. `haystack=undefined` *(string&#91;&#93;)*:

#### Returns
*(boolean)*:

#### Example
```js

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #arrayincludesall "Jump back to the TOC."
