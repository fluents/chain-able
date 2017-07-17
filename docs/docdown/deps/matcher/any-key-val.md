# any-key-val.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `exports`
* <a href="#exports">`exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `exports`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/typings/matcher.d.ts">🌊  Types: matcher.d</a>&nbsp;

<h3 id="exports"><a href="#exports">#</a>&nbsp;<code>exports(keys=undefined, vals=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/matcher/any-key-val.js#L27 "View in source") [&#x24C9;][1]

(Function): the original simple to-test matcher for traversable,
will be merged into, or simplified as simplified into matcher


### @todos 

- [ ] should use matcher,
- [ ] should inprove the callback data...
 
#### Since
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
