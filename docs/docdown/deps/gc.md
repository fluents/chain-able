# gc.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `markForGarbageCollection`
* <a href="#markForGarbageCollection">`markForGarbageCollection`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `markForGarbageCollection`

<!-- div -->

<h3 id="markForGarbageCollection"><a href="#markForGarbageCollection">#</a>&nbsp;<code>markForGarbageCollection(obj=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/gc.js#L41 "View in source") [&#x24C9;][1]

(Function): remove all methods, mark for garbage collection


### @todos 

- [ ] blacklist = [] param
- [ ] put all GC events into a cached map and debounce the operation
 
#### Since
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
