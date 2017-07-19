# gc.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `markForGarbageCollection`
* <a href="#markForGarbageCollection"  data-meta="markForGarbageCollection obj undefined"  data-call="markForGarbageCollection obj undefined"  data-category="Methods"  data-description="Function remove all methods mark for garbage collection"  data-name="markForGarbageCollection"  data-todos="blacklist param put all GC events into a cached map and debounce the operation"  data-all="meta markForGarbageCollection obj undefined call markForGarbageCollection obj undefined category Methods description Function remove all methods mark for garbage collection name markForGarbageCollection member see notes todos blacklist param n put all GC events into a cached map and debounce the operation n klassProps" >`markForGarbageCollection`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `markForGarbageCollection`

<!-- div -->

<h3 id="markForGarbageCollection" data-member="" data-category="Methods" data-name="markForGarbageCollection"><code>markForGarbageCollection(obj=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/gc.js#L41 "View in source") [&#x24C9;][1]

(Function): remove all methods, mark for garbage collection


#### @todos 

- [ ] blacklist = [] param
- [ ] put all GC events into a cached map and debounce the operation
 

#### @Since
4.0.0

#### Arguments
1. `obj=undefined` *(Object)*: object to traverse and clear

#### Returns
*(void)*:

#### Example
```js
var scoped = {}
var ref = () => scoped
var obj = { scoped, ref, eh: true }

markForGarbageCollection(obj)
//=> void

obj
//=> undefined|{}

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #markforgarbagecollection "Jump back to the TOC."
