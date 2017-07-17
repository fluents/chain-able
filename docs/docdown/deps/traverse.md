# traverse.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `Traverse.prototype`
* <a href="#Traverse-prototype-">`Traverse.prototype.`</a>
* <a href="#Traverse-prototype-">`Traverse.prototype.`</a>
* <a href="#Traverse-prototype-clone">`Traverse.prototype.clone`</a>
* <a href="#Traverse-prototype-forEach">`Traverse.prototype.forEach`</a>
* <a href="#Traverse-prototype-get">`Traverse.prototype.get`</a>
* <a href="#Traverse-prototype-has">`Traverse.prototype.has`</a>
* <a href="#Traverse-prototype-nodes">`Traverse.prototype.nodes`</a>
* <a href="#Traverse-prototype-paths">`Traverse.prototype.paths`</a>
* <a href="#Traverse-prototype-reduce">`Traverse.prototype.reduce`</a>
* <a href="#Traverse-prototype-set">`Traverse.prototype.set`</a>

<!-- /div -->

<!-- div -->

## `after`
* <a href="#after">`after`</a>

<!-- /div -->

<!-- div -->

## `before`
* <a href="#before">`before`</a>

<!-- /div -->

<!-- div -->

## `block`
* <a href="#block">`block`</a>

<!-- /div -->

<!-- div -->

## `circular`
* <a href="#circular">`circular`</a>

<!-- /div -->

<!-- div -->

## `delete`
* <a href="#delete">`delete`</a>

<!-- /div -->

<!-- div -->

## `forEach`
* <a href="#forEach">`forEach`</a>

<!-- /div -->

<!-- div -->

## `isRoot`
* <a href="#isRoot">`isRoot`</a>

<!-- /div -->

<!-- div -->

## `key`
* <a href="#key">`key`</a>

<!-- /div -->

<!-- div -->

## `level`
* <a href="#level">`level`</a>

<!-- /div -->

<!-- div -->

## `node`
* <a href="#node">`node`</a>

<!-- /div -->

<!-- div -->

## `node_`
* <a href="#node_">`node_`</a>

<!-- /div -->

<!-- div -->

## `parent`
* <a href="#parent">`parent`</a>

<!-- /div -->

<!-- div -->

## `path`
* <a href="#path">`path`</a>

<!-- /div -->

<!-- div -->

## `post`
* <a href="#post">`post`</a>

<!-- /div -->

<!-- div -->

## `pre`
* <a href="#pre">`pre`</a>

<!-- /div -->

<!-- div -->

## `remove`
* <a href="#remove">`remove`</a>

<!-- /div -->

<!-- div -->

## `return`
* <a href="#return">`return`</a>

<!-- /div -->

<!-- div -->

## `state`
* <a href="#state">`state`</a>

<!-- /div -->

<!-- div -->

## `stop`
* <a href="#stop">`stop`</a>

<!-- /div -->

<!-- div -->

## `traverse`
* <a href="#">``</a>
* <a href="#">``</a>
* <a href="#traverse">`traverse`</a>

<!-- /div -->

<!-- div -->

## `update`
* <a href="#update">`update`</a>

<!-- /div -->

<!-- div -->

## `updateState`
* <a href="#updateState">`updateState`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `Traverse.prototype`

<!-- div -->

* <a href="https://github.com/fluents/chain-able/blob/master/typings/TraverseChain.d.ts">🌊  Types: TraverseChain.d</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/typings/traverse.d.ts">🌊  Types: traverse.d</a>&nbsp;

* <a href="https://github.com/fluents/chain-able/blob/master/test/traverse/circular.js">🔬  Tests: circular</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/test/traverse/date.js">🔬  Tests: date</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/test/traverse/equal.js">🔬  Tests: equal</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/test/traverse/error.js">🔬  Tests: error</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/test/traverse/has.js">🔬  Tests: has</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/test/traverse/index.js">🔬  Tests: index</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/test/traverse/instance.js">🔬  Tests: instance</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/test/traverse/interface.js">🔬  Tests: interface</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/test/traverse/json.js">🔬  Tests: json</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/test/traverse/keys.js">🔬  Tests: keys</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/test/traverse/leaves.js">🔬  Tests: leaves</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/test/traverse/negative.js">🔬  Tests: negative</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/test/traverse/obj.js">🔬  Tests: obj</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/test/traverse/set-map.js">🔬  Tests: set-map</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/test/traverse/siblings.js">🔬  Tests: siblings</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/test/traverse/stop.js">🔬  Tests: stop</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/test/traverse/stringify.js">🔬  Tests: stringify</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/test/traverse/subexpr.js">🔬  Tests: subexpr</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/test/traverse/superDeep.js">🔬  Tests: superDeep</a>&nbsp;

<h3 id="Traverse-prototype-"><a href="#Traverse-prototype-">#</a>&nbsp;<code>Traverse.prototype.Traverse(obj=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L91 "View in source") [&#x24C9;][1]

Function


### @todos 

- [ ] : symbol, map, set
 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
#### Arguments
1. `obj=undefined` *(Traversable)*: any traversable value

#### Example
```js
traverse({})
//=> Traverser

```
---

<!-- /div -->

<!-- div -->

<h3 id="Traverse-prototype-"><a href="#Traverse-prototype-">#</a>&nbsp;<code>Traverse.prototype.map(cb=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L199 "View in source") [&#x24C9;][1]

(Function): Execute fn for each node in the object and return a new object with the results of the walk. To update nodes in the result use this.update(value).

#### Arguments
1. `cb=undefined` *(Function)*: fn for each node in the object

#### Returns
*(any)*:

#### Example
```js
var { traverse } = require('chain-able')

var obj = { a: 1, b: 2, c: [3, 4] }
obj.c.push(obj)

var scrubbed = traverse(obj).map(function(x) {
  if (this.circular) this.remove()
})
console.dir(scrubbed)
//=> { a: 1, b: 2, c: [ 3, 4 ] }

```
---

<!-- /div -->

<!-- div -->

<h3 id="Traverse-prototype-clone"><a href="#Traverse-prototype-clone">#</a>&nbsp;<code>Traverse.prototype.clone()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L319 "View in source") [&#x24C9;][1]

(Function): Create a deep clone of the object.

#### Returns
*(any)*:

#### Example
```js
const { traverse, eq } = require('chain-able')

const obj = { eh: true, canada: [1] }
const cloned = traverse(obj).clone()
cloned.eh = false
eq(cloned, obj)
//=> false

```
---

<!-- /div -->

<!-- div -->

<h3 id="Traverse-prototype-forEach"><a href="#Traverse-prototype-forEach">#</a>&nbsp;<code>Traverse.prototype.forEach(callback=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L226 "View in source") [&#x24C9;][1]

(Function): Execute fn for each node in the object but unlike .map(), when this.update() is called it updates the object in-place. executes a provided function once for each traversed element.

#### Arguments
1. `callback=undefined` *(Function)*: provided callback function

#### Returns
*(any)*: this.value

#### Example
```js
var { traverse } = require('chain-able')

var obj = [5, 6, -3, [7, 8, -2, 1], { f: 10, g: -13 }]
traverse(obj).forEach(function(x) {
  if (x < 0) this.update(x + 128)
})

console.dir(obj)
//=> [ 5, 6, 125, [ 7, 8, 126, 1 ], { f: 10, g: 115 } ]

```
---

<!-- /div -->

<!-- div -->

<h3 id="Traverse-prototype-get"><a href="#Traverse-prototype-get">#</a>&nbsp;<code>Traverse.prototype.get(ps=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L105 "View in source") [&#x24C9;][1]

(Function): Get the element at the array path.


### @todos 

- [ ] hasOwnProperty
 
#### Arguments
1. `ps=undefined` *(string&#91;&#93;)*: paths

#### Returns
*(any)*: value at dot-prop

---

<!-- /div -->

<!-- div -->

<h3 id="Traverse-prototype-has"><a href="#Traverse-prototype-has">#</a>&nbsp;<code>Traverse.prototype.has(pathsArray=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L144 "View in source") [&#x24C9;][1]

(Function): Return whether the element at the array path exists.

#### Arguments
1. `pathsArray=undefined` *(string&#91;&#93;)*: paths

#### Returns
*(boolean)*: has element at path

#### Example
```js
traverse({ eh: true }).has(['eh'])
//=> true

```
#### Example
```js
traverse({ eh: true }).has(['canada'])
//=> false

```
#### Example
```js
traverse([0]).has([2])
//=> false

```
---

<!-- /div -->

<!-- div -->

<h3 id="Traverse-prototype-nodes"><a href="#Traverse-prototype-nodes">#</a>&nbsp;<code>Traverse.prototype.nodes()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L294 "View in source") [&#x24C9;][1]

(Function): Return an Array of every node in the object.

#### Returns
*(&#42;)*:

---

<!-- /div -->

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/test/traverse/keys.js">🔬  Tests: keys</a>&nbsp;

<h3 id="Traverse-prototype-paths"><a href="#Traverse-prototype-paths">#</a>&nbsp;<code>Traverse.prototype.paths()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L281 "View in source") [&#x24C9;][1]

(Function): Return an Array of every possible non-cyclic path in the object. Paths are Arrays of string keys.

#### Returns
*(&#42;)*:

---

<!-- /div -->

<!-- div -->

<h3 id="Traverse-prototype-reduce"><a href="#Traverse-prototype-reduce">#</a>&nbsp;<code>Traverse.prototype.reduce(cb=undefined, init=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L264 "View in source") [&#x24C9;][1]

(Function): applies a function against an accumulator and each element in the array *(from left to right)* to reduce it to a single value. calls cb for each loop that is .notRoot defaults initial value to `this.value`

#### Arguments
1. `cb=undefined` *(Function)*: callback forEach
2. `init=undefined` *(Array|Object|any)*: initial value

#### Returns
*(&#42;)*:

#### Example
```js
var { traverse } = require('chain-able')

var obj = {
  a: [1, 2, 3],
  b: 4,
  c: [5, 6],
  d: { e: [7, 8], f: 9 },
}

var leaves = traverse(obj).reduce(function(acc, x) {
  if (this.isLeaf) acc.push(x)
  return acc
}, [])

console.dir(leaves)
//=> [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

```
---

<!-- /div -->

<!-- div -->

<h3 id="Traverse-prototype-set"><a href="#Traverse-prototype-set">#</a>&nbsp;<code>Traverse.prototype.set(arrayPath=undefined, value=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L166 "View in source") [&#x24C9;][1]

(Function): Set the element at the array path to value.

#### Arguments
1. `arrayPath=undefined` *(string&#91;&#93;)*: paths
2. `value=undefined` *(any)*: any value to assign to the element @ the path

#### Returns
*(any)*: value passed in

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `after`

<!-- div -->

<h3 id="after"><a href="#after">#</a>&nbsp;<code>after(fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L485 "View in source") [&#x24C9;][1]

(Function): Call this function after any of the children are traversed.

#### Arguments
1. `fn=undefined` *(Function)*:

#### Returns
*(any)*:

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `before`

<!-- div -->

<h3 id="before"><a href="#before">#</a>&nbsp;<code>before(fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L477 "View in source") [&#x24C9;][1]

(Function): Call this function before any of the children are traversed.
You can assign into this.keys here to traverse in a custom order.

#### Arguments
1. `fn=undefined` *(Function)*:

#### Returns
*(any)*:

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `block`

<!-- div -->

<h3 id="block"><a href="#block">#</a>&nbsp;<code>block()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L517 "View in source") [&#x24C9;][1]

Function

#### Returns
*(void)*:

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `circular`

<!-- div -->

<h3 id="circular"><a href="#circular">#</a>&nbsp;<code>circular</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L427 "View in source") [&#x24C9;][1]

unknown

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `delete`

<!-- div -->

<h3 id="delete"><a href="#delete">#</a>&nbsp;<code>delete(stopHere=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L448 "View in source") [&#x24C9;][1]

(Function): Delete the current element from its parent in the output. Calls delete even on Arrays.

#### Arguments
1. `stopHere=undefined` *(boolean)*:

#### Returns
*(void)*:

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `forEach`

<!-- div -->

<h3 id="forEach"><a href="#forEach">#</a>&nbsp;<code>forEach()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L673 "View in source") [&#x24C9;][1]

(Function): adds methods to Traverser

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `isRoot`

<!-- div -->

<h3 id="isRoot"><a href="#isRoot">#</a>&nbsp;<code>isRoot</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L417 "View in source") [&#x24C9;][1]

(Boolean): Whether the present node is the root node

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `key`

<!-- div -->

<h3 id="key"><a href="#key">#</a>&nbsp;<code>key</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L412 "View in source") [&#x24C9;][1]

unknown

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `level`

<!-- div -->

<h3 id="level"><a href="#level">#</a>&nbsp;<code>level</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L422 "View in source") [&#x24C9;][1]

(number): Depth of the node within the traversal

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `node`

<!-- div -->

<h3 id="node"><a href="#node">#</a>&nbsp;<code>node</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L390 "View in source") [&#x24C9;][1]

(Array): The present node on the recursive walk

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `node_`

<!-- div -->

<h3 id="node_"><a href="#node_">#</a>&nbsp;<code>node_</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L396 "View in source") [&#x24C9;][1]

Array

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `parent`

<!-- div -->

<h3 id="parent"><a href="#parent">#</a>&nbsp;<code>parent</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L406 "View in source") [&#x24C9;][1]

unknown

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `path`

<!-- div -->

<h3 id="path"><a href="#path">#</a>&nbsp;<code>path</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L401 "View in source") [&#x24C9;][1]

(Array): An array of string keys from the root to the present node

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `post`

<!-- div -->

<h3 id="post"><a href="#post">#</a>&nbsp;<code>post(fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L501 "View in source") [&#x24C9;][1]

(Function): Call this function after each of the children are traversed.

#### Arguments
1. `fn=undefined` *(Function)*:

#### Returns
*(any)*:

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `pre`

<!-- div -->

<h3 id="pre"><a href="#pre">#</a>&nbsp;<code>pre(fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L493 "View in source") [&#x24C9;][1]

(Function): Call this function before each of the children are traversed.

#### Arguments
1. `fn=undefined` *(Function)*:

#### Returns
*(any)*:

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `remove`

<!-- div -->

<h3 id="remove"><a href="#remove">#</a>&nbsp;<code>remove(stopHere=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L457 "View in source") [&#x24C9;][1]

(Function): Remove the current element from the output. If the node is in an Array it will be spliced off. Otherwise it will be deleted from its parent.

#### Arguments
1. `stopHere=undefined` *(boolean)*:

#### Returns
*(void)*:

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `return`

<!-- div -->

<h3 id="return"><a href="#return">#</a>&nbsp;<code>return(node_=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L374 "View in source") [&#x24C9;][1]

Function

#### Arguments
1. `node_=undefined` *(any)*:

#### Returns
*(State)*: see types

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `state`

<!-- div -->

<h3 id="state"><a href="#state">#</a>&nbsp;<code>state</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L385 "View in source") [&#x24C9;][1]

(Object): Each method that takes a callback has a context *(its this object)* with these attributes:


### @classProps 

* {isRoot} @alias isNotRoot Whether or not the present node is a leaf node (has no children) 
 
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `stop`

<!-- div -->

<h3 id="stop"><a href="#stop">#</a>&nbsp;<code>stop()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L509 "View in source") [&#x24C9;][1]

Function

#### Returns
*(void)*:

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `traverse`

<!-- div -->

<h3 id=""><a href="#">#</a>&nbsp;<code>walk(root=undefined, cb=undefined, immutable=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L360 "View in source") [&#x24C9;][1]

Function

#### Arguments
1. `root=undefined` *(any)*: root node
2. `cb=undefined` *(Function)*: callback for each
3. `immutable=undefined` *(boolean)*: should mutate or not

#### Returns
*(any)*:

---

<!-- /div -->

<!-- div -->

<h3 id=""><a href="#">#</a>&nbsp;<code>copy(src=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L610 "View in source") [&#x24C9;][1]

Function


### @notes 

* wicked ternary
 

### @todos 

- [ ] does not respect ObjectDescriptors
 
#### Arguments
1. `src=undefined` *(any)*:

#### Returns
*(any)*:

---

<!-- /div -->

<!-- div -->

<h3 id="traverse"><a href="#traverse">#</a>&nbsp;<code>traverse(obj=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L7 "View in source") [&#x24C9;][1]

Function

#### Arguments
1. `obj=undefined` *(Traversable)*: object to traverse

#### Example
```js
traverse({})
//=> new Traverse(obj)

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `update`

<!-- div -->

<h3 id="update"><a href="#update">#</a>&nbsp;<code>update(x=undefined, stopHere=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L436 "View in source") [&#x24C9;][1]

(Function): Set a new value for the present node.
All the elements in value will be recursively traversed unless stopHere is true.

#### Arguments
1. `x=undefined` *(Function)*:
2. `stopHere=undefined` *(boolean)*:

#### Returns
*(void)*:

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `updateState`

<!-- div -->

<h3 id="updateState"><a href="#updateState">#</a>&nbsp;<code>updateState()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L533 "View in source") [&#x24C9;][1]

(Function): updates if needed:

#### Returns
*(void)*:

---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #traverse.prototype "Jump back to the TOC."
