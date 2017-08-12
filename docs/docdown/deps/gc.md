# gc.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `markForGarbageCollection`
* <a href="#markForGarbageCollection"  data-meta="markForGarbageCollection obj undefined"  data-call="markForGarbageCollection obj undefined"  data-category="Methods"  data-description="Function remove all methods mark for garbage collection"  data-name="markForGarbageCollection"  data-see="href https stackoverflow com questions 1947995 when should i use delete vs setting elements to null in javascript label https stackoverflow com questions 1947995 when should i use delete vs setting elements to null in javascript href https github com fluents chain able search utf8 E2 9C 93 q https v8project blogspot ca 2015 08 getting garbage collection for free html type label https v8project blogspot ca 2015 08 getting garbage collection for free html href https github com natewatson999 js gc label https github com natewatson999 js gc href https github com siddMahen node gc label https github com siddMahen node gc href http buildnewgames com garbage collector friendly code label http buildnewgames com garbage collector friendly code href https stackoverflow com questions 27597335 ensuring object can be garbage collected label https stackoverflow com questions 27597335 ensuring object can be garbage collected href https developer mozilla org en US docs Web JavaScript Memory Management label https developer mozilla org en US docs Web JavaScript Memory Management"  data-todos="blacklist param put all GC events into a cached map and debounce the operation"  data-all="meta markForGarbageCollection obj undefined call markForGarbageCollection obj undefined category Methods description Function remove all methods mark for garbage collection name markForGarbageCollection member see href https stackoverflow com questions 1947995 when should i use delete vs setting elements to null in javascript label https stackoverflow com questions 1947995 when should i use delete vs setting elements to null in javascript href https github com fluents chain able search utf8 E2 9C 93 q https v8project blogspot ca 2015 08 getting garbage collection for free html type label https v8project blogspot ca 2015 08 getting garbage collection for free html href https github com natewatson999 js gc label https github com natewatson999 js gc href https github com siddMahen node gc label https github com siddMahen node gc href http buildnewgames com garbage collector friendly code label http buildnewgames com garbage collector friendly code href https stackoverflow com questions 27597335 ensuring object can be garbage collected label https stackoverflow com questions 27597335 ensuring object can be garbage collected href https developer mozilla org en US docs Web JavaScript Memory Management label https developer mozilla org en US docs Web JavaScript Memory Management notes todos blacklist param n put all GC events into a cached map and debounce the operation n klassProps" >`markForGarbageCollection`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `markForGarbageCollection`

<!-- div -->

<h3 id="markForGarbageCollection" data-member="" data-category="Methods" data-name="markForGarbageCollection"><code>markForGarbageCollection(obj=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/gc.js#L42 "View in source") [&#x24C9;][1]

(Function): remove all methods, mark for garbage collection


#### @see 

* <a href="https://stackoverflow.com/questions/1947995/when-should-i-use-delete-vs-setting-elements-to-null-in-javascript" >https://stackoverflow.com/questions/1947995/when-should-i-use-delete-vs-setting-elements-to-null-in-javascript</a>
* <a href="https://github.com/fluents/chain-able/search?utf8=%E2%9C%93&q=https://v8project.blogspot.ca/2015/08/getting-garbage-collection-for-free.html&type=" >https://v8project.blogspot.ca/2015/08/getting-garbage-collection-for-free.html</a>
* <a href="https://github.com/natewatson999/js-gc" >https://github.com/natewatson999/js-gc</a>
* <a href="https://github.com/siddMahen/node-gc" >https://github.com/siddMahen/node-gc</a>
* <a href="http://buildnewgames.com/garbage-collector-friendly-code/" >http://buildnewgames.com/garbage-collector-friendly-code/</a>
* <a href="https://stackoverflow.com/questions/27597335/ensuring-object-can-be-garbage-collected" >https://stackoverflow.com/questions/27597335/ensuring-object-can-be-garbage-collected</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management" >https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management</a>

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
