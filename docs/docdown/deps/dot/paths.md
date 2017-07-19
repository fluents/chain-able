# paths.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `exports`
* <a href="#exports"  data-meta="exports key undefined value undefined longest undefined"  data-call="exports key undefined value undefined longest undefined"  data-category="Methods"  data-description="Function gathers dot prop from any value with a prefixed base key"  data-name="exports"  data-see="href https github com fluents chain able blob master src deps traverse js label fluents chain able blob master src deps traverse js"  data-notes="had onlyLongest asString but can just join to match"  data-todos="should build a trie if doing this"  data-all="meta exports key undefined value undefined longest undefined call exports key undefined value undefined longest undefined category Methods description Function gathers dot prop from any value with a prefixed base key name exports member see href https github com fluents chain able blob master src deps traverse js label fluents chain able blob master src deps traverse js notes had onlyLongest asString but can just join to match n todos should build a trie if doing this n klassProps" >`exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `exports`

<!-- div -->

<h3 id="exports" data-member="" data-category="Methods" data-name="exports"><code>exports(key=undefined, value=undefined, [longest=undefined])</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/dot/paths.js#L32 "View in source") [&#x24C9;][1]

(Function): gathers dot.prop from any value, with a prefixed/base key


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js" >fluents/chain able/blob/master/src/deps/traverse.js</a>

#### @notes 

* had `onlyLongest` & `asString` but can just .join(',') to match
 

#### @todos 

- [ ] should build a trie if doing this
 

#### @Since
4.0.0

#### Arguments
1. `key=undefined` *(Primitive)*: prefixing key for the paths, root path/key
2. `value=undefined` *(Traversable)*: traversable value to extract paths from
3. `[longest=undefined]` *(|boolean)*: optionally filter to keep only longest/deepest paths

#### Returns
*(&#42;)*: paths&#91;&#93;

#### Example
```js
dotPropPaths('', { oh: { eh: true } })
//=> ['oh.eh']

dotPropPaths('moose', { oh: { eh: true } })
//=> ['moose.oh.eh']

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #exports "Jump back to the TOC."
