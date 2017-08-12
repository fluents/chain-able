# mapWhere.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `fp`
* <a href="#fp-prototype-mapWhere"  data-meta="mapWhere obj undefined predicate undefined"  data-call="mapWhere obj undefined predicate undefined"  data-category="Object"  data-description="Function Creates an array of values by running each property of object thru iteratee The iteratee is invoked with three arguments value key object"  data-name="mapWhere"  data-member="fp"  data-see="href https github com lodash lodash blob master map js label https github com lodash lodash blob master map js"  data-all="meta mapWhere obj undefined predicate undefined call mapWhere obj undefined predicate undefined category Object description Function Creates an array of values by running each property of object thru n iteratee The iteratee is invoked with three arguments value key object name mapWhere member fp see href https github com lodash lodash blob master map js label https github com lodash lodash blob master map js notes todos klassProps" >`fp.mapWhere`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `fp`

<!-- div -->

<h3 id="fp-prototype-mapWhere" data-member="fp" data-category="Object" data-name="mapWhere"><code>fp.mapWhere(obj=undefined, predicate=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/fp/mapWhere.js#L26 "View in source") [&#x24C9;][1]

(Function): Creates an array of values by running each property of `object` thru
`iteratee`. The iteratee is invoked with three arguments: *(value, key, object)*.


#### @see 

* <a href="https://github.com/lodash/lodash/blob/master/map.js" >https://github.com/lodash/lodash/blob/master/map.js</a>

#### @Since
5.0.0

#### Arguments
1. `obj=undefined` *(Object)*: The object to iterate over.
2. `predicate=undefined` *(Function)*: The function invoked per iteration.

#### Returns
*(Array)*: Returns the new mapped array.

#### Example
```js
const square = n => n * n
map({ a: 4, b: 8 }, square)
// => [16, 64] (iteration order is not guaranteed)

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #fp "Jump back to the TOC."
