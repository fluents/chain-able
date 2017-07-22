# map.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `dopemerge`
* <a href="#dopemerge-prototype-exports"  data-meta="exports obj1 undefined obj2 undefined"  data-call="exports obj1 undefined obj2 undefined"  data-category="Methods"  data-description="Function merge maps sets"  data-name="exports"  data-member="dopemerge"  data-todos="easy clone"  data-all="meta exports obj1 undefined obj2 undefined call exports obj1 undefined obj2 undefined category Methods description Function merge maps sets name exports member dopemerge see notes todos easy clone n klassProps" >`dopemerge.exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `dopemerge`

<!-- div -->

<h3 id="dopemerge-prototype-exports" data-member="dopemerge" data-category="Methods" data-name="exports"><code>dopemerge.exports(obj1=undefined, obj2=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/dopemerge/map.js#L32 "View in source") [&#x24C9;][1]

(Function): merge maps & sets


#### @todos 

- [ ] easy clone
 
#### Arguments
1. `obj1=undefined` *(Map|Set)*: merge with `2`
2. `obj2=undefined` *(Map|Set)*: merge with `1`

#### Returns
*(&#42;)*: merged

#### Example
```js
var targetMap = new Map()
targetMap.set('true', false)
targetMap.set('obj', { obj: [] })
targetMap.set('arr', [1])
var srcMap = new Map()
srcMap.set('true', true)
srcMap.set('obj', { obj: [Symbol] })
srcMap.set('arr', [2])
srcMap.set('emptyArr', [])
var mergedMap = dopemergeMap(targetMap, srcMap, { clone: true })

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #dopemerge "Jump back to the TOC."
