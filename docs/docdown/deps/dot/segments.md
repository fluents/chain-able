# segments.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `dot`
* <a href="#dot-prototype-dotPropSegments"  data-meta="dotPropSegments path undefined"  data-call="dotPropSegments path undefined"  data-category="Methods"  data-description="Function"  data-name="dotPropSegments"  data-member="dot"  data-all="meta dotPropSegments path undefined call dotPropSegments path undefined category Methods description Function name dotPropSegments member dot see notes todos klassProps" >`dot.dotPropSegments`</a>

<!-- /div -->

<!-- div -->

## `while`
* <a href="#while"  data-meta="while"  data-call="while"  data-category="Methods"  data-description="Function"  data-name="while"  data-all="meta while call while category Methods description Function name while member see notes todos klassProps" >`while`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `dot`

<!-- div -->

<h3 id="dot-prototype-dotPropSegments" data-member="dot" data-category="Methods" data-name="dotPropSegments"><code>dot.dotPropSegments(path=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/dot/segments.js#L22 "View in source") [&#x24C9;][1]

Function


#### @Since
4.0.0

#### Arguments
1. `path=undefined` *(string|string&#91;&#93;)*: dot-prop-path

#### Returns
*(&#42;)*: array path

#### Example
```js
dotPropSegments('eh.oh') //=> ['eh', 'oh']
dotPropSegments(['eh', 'oh']) //=> ['eh', 'oh']
dotPropSegments('ehoh') //=> ['ehoh']

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `while`

<!-- div -->

<h3 id="while" data-member="" data-category="Methods" data-name="while"><code>while()</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/dot/segments.js#L46 "View in source") [&#x24C9;][1]

Function

#### Example
```js
1
'.eh' - 1 === '\\'(true) + 1 !== undefined(true, eh)

```
#### Example
```js
2
'.eh' - 1 === '\\'(false, undefined) + 1 !== undefined(true, eh)

```
#### Example
```js
3
'.' - 1 === '\\'(true) + 1 !== undefined(false, eh)

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #dot "Jump back to the TOC."
