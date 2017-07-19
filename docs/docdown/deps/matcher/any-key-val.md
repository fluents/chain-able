# any-key-val.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `exports`
* <a href="#exports"  data-meta="exports keys undefined vals undefined"  data-call="exports keys undefined vals undefined"  data-category="Methods"  data-description="Function the original simple to test matcher for traversable will be merged into or simplified as simplified into matcher"  data-name="exports"  data-todos="should use matcher should inprove the callback data"  data-all="meta exports keys undefined vals undefined call exports keys undefined vals undefined category Methods description Function the original simple to test matcher for traversable nwill be merged into or simplified as simplified into matcher name exports member see notes todos should use matcher n should inprove the callback data n klassProps" >`exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `exports`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/typings/matcher.d.ts">🌊  Types: matcher.d</a>&nbsp;

<h3 id="exports" data-member="" data-category="Methods" data-name="exports"><code>exports(keys=undefined, vals=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/matcher/any-key-val.js#L27 "View in source") [&#x24C9;][1]

(Function): the original simple to-test matcher for traversable,
will be merged into, or simplified as simplified into matcher


#### @todos 

- [ ] should use matcher,
- [ ] should inprove the callback data...
 

#### @Since
2.0.0

#### Arguments
1. `keys=undefined` *(Matchable&#91;&#93;)*: matchable keys
2. `vals=undefined` *(Matchable&#91;&#93;)*: matchable values

#### Returns
*(boolean)*: matched or not

#### Example
```js
anyKeyVal([], [])(0, 0)
//=> false

anyKeyVal([() => true], [])(0, 0)
//=> true

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #exports "Jump back to the TOC."
