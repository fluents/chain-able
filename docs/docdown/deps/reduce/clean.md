# clean.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `reduce`
* <a href="#reduce-prototype-exports"  data-meta="exports obj undefined"  data-call="exports obj undefined"  data-category="Methods"  data-description="Function goes through the maps and the map values reduces them to array then to an object using the reduced values"  data-name="exports"  data-member="reduce"  data-see="href https github com fluents chain able blob master src deps reduce clean js label fluents chain able blob master src deps reduce clean js"  data-todos="seems to be overkill with reducing mapping just copy ignore or delete"  data-all="meta exports obj undefined call exports obj undefined category Methods description Function goes through the maps and the map values reduces them to array then to an object using the reduced values name exports member reduce see href https github com fluents chain able blob master src deps reduce clean js label fluents chain able blob master src deps reduce clean js notes todos seems to be overkill with reducing mapping just copy ignore or delete n klassProps" >`reduce.exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `reduce`

<!-- div -->

<h3 id="reduce-prototype-exports" data-member="reduce" data-category="Methods" data-name="exports"><code>reduce.exports(obj=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/reduce/clean.js#L47 "View in source") [&#x24C9;][1]

(Function): goes through the maps, and the map values, reduces them to array then to an object using the reduced values


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/reduce/clean.js" >fluents/chain able/blob/master/src/deps/reduce/clean.js</a>

#### @todos 

- [ ] seems to be overkill with reducing mapping just copy & ignore or delete?
 
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

 [1]: #reduce "Jump back to the TOC."
