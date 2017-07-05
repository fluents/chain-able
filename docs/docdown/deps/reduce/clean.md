# clean.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `reduce.prototype`
* <a href="#reduce-prototype-exports">`reduce.prototype.exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `reduce.prototype`

<!-- div -->

<h3 id="reduce-prototype-exports"><a href="#reduce-prototype-exports">#</a>&nbsp;<code>reduce.prototype.exports(obj=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/reduce/clean.js#L39 "View in source") [&#x24C9;][1]

(Function): goes through the maps, and the map values, reduces them to array then to an object using the reduced values


### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/reduce/clean.js">fluents/chain able/blob/master/src/deps/reduce/clean.js</a>
#### Arguments
1. `obj=undefined` *(Object): object to clean, usually .entries()*

#### Returns
*(Object)*: reduced object, without `notReal` values

#### Example
```js
const map = new ChainedMap()

map
  .set('emptyArr', [])
  .set('arr', [1])
  .set('nill', null)
  .set('emptyObj', {})
  .set('obj', { keys: true })

clean(map.entries())
//=> {arr: [1], obj: {keys: true}}

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #reduce.prototype "Jump back to the TOC."
