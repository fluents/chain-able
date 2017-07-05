# traverse.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `Traverse`
* <a href="#Traverse-Traverse">`Traverse.Traverse`</a>
* <a href="#Traverse-clone">`Traverse.clone`</a>
* <a href="#Traverse-forEach">`Traverse.forEach`</a>
* <a href="#Traverse-get">`Traverse.get`</a>
* <a href="#Traverse-has">`Traverse.has`</a>
* <a href="#Traverse-map">`Traverse.map`</a>
* <a href="#Traverse-nodes">`Traverse.nodes`</a>
* <a href="#Traverse-paths">`Traverse.paths`</a>
* <a href="#Traverse-reduce">`Traverse.reduce`</a>
* <a href="#Traverse-set">`Traverse.set`</a>

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

## `copy`
* <a href="#copy">`copy`</a>

<!-- /div -->

<!-- div -->

## `delete`
* <a href="#delete">`delete`</a>

<!-- /div -->

<!-- div -->

## `forEach`
* <a href="#forEach">`forEach`</a>
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

<!-- div -->

## `walk`
* <a href="#walk">`walk`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `Traverse`

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

<h3 id="Traverse-Traverse"><a href="#Traverse-Traverse">#</a>&nbsp;<code>Traverse.Traverse(obj=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L81 "View in source") [&#x24C9;][1]




### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

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

<h3 id="Traverse-clone"><a href="#Traverse-clone">#</a>&nbsp;<code>Traverse.clone</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L309 "View in source") [&#x24C9;][1]

Create a deep clone of the object.


### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
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

<h3 id="Traverse-forEach"><a href="#Traverse-forEach">#</a>&nbsp;<code>Traverse.forEach(callback=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L216 "View in source") [&#x24C9;][1]

Execute fn for each node in the object but unlike .map(), when this.update() is called it updates the object in-place. executes a provided function once for each traversed element.


### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
#### Arguments
1. `callback=undefined` *(Function)*: provided callback function

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

<h3 id="Traverse-get"><a href="#Traverse-get">#</a>&nbsp;<code>Traverse.get(ps=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L95 "View in source") [&#x24C9;][1]

Get the element at the array path.


### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
#### Arguments
1. `ps=undefined` *(string&#91;&#93;)*: paths

---

<!-- /div -->

<!-- div -->

<h3 id="Traverse-has"><a href="#Traverse-has">#</a>&nbsp;<code>Traverse.has(pathsArray=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L134 "View in source") [&#x24C9;][1]

Return whether the element at the array path exists.


### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
#### Arguments
1. `pathsArray=undefined` *(string&#91;&#93;)*: paths

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

<h3 id="Traverse-map"><a href="#Traverse-map">#</a>&nbsp;<code>Traverse.map(cb=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L189 "View in source") [&#x24C9;][1]

Execute fn for each node in the object and return a new object with the results of the walk. To update nodes in the result use this.update(value).


### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
#### Arguments
1. `cb=undefined` *(Function)*: fn for each node in the object

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

<h3 id="Traverse-nodes"><a href="#Traverse-nodes">#</a>&nbsp;<code>Traverse.nodes</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L284 "View in source") [&#x24C9;][1]

Return an Array of every node in the object.


### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
---

<!-- /div -->

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/test/traverse/keys.js">🔬  Tests: keys</a>&nbsp;

<h3 id="Traverse-paths"><a href="#Traverse-paths">#</a>&nbsp;<code>Traverse.paths</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L271 "View in source") [&#x24C9;][1]

Return an Array of every possible non-cyclic path in the object. Paths are Arrays of string keys.


### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
---

<!-- /div -->

<!-- div -->

<h3 id="Traverse-reduce"><a href="#Traverse-reduce">#</a>&nbsp;<code>Traverse.reduce(cb=undefined, init=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L254 "View in source") [&#x24C9;][1]

applies a function against an accumulator and each element in the array *(from left to right)* to reduce it to a single value. calls cb for each loop that is .notRoot defaults initial value to `this.value`


### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
#### Arguments
1. `cb=undefined` *(Function)*: callback forEach
2. `init=undefined` *(Array|Object|any)*: initial value

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

<h3 id="Traverse-set"><a href="#Traverse-set">#</a>&nbsp;<code>Traverse.set(arrayPath=undefined, value=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L156 "View in source") [&#x24C9;][1]

Set the element at the array path to value.


### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
#### Arguments
1. `arrayPath=undefined` *(string&#91;&#93;)*: paths
2. `value=undefined` *(any)*: any value to assign to the element @ the path

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `after`

<!-- div -->

<h3 id="after"><a href="#after">#</a>&nbsp;<code>after(fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L475 "View in source") [&#x24C9;][1]

Call this function after any of the children are traversed.


### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
#### Arguments
1. `fn=undefined` *(Function)*:

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `before`

<!-- div -->

<h3 id="before"><a href="#before">#</a>&nbsp;<code>before(fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L467 "View in source") [&#x24C9;][1]

Call this function before any of the children are traversed.
You can assign into this.keys here to traverse in a custom order.


### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
#### Arguments
1. `fn=undefined` *(Function)*:

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `block`

<!-- div -->

<h3 id="block"><a href="#block">#</a>&nbsp;<code>block()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L507 "View in source") [&#x24C9;][1]




### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `circular`

<!-- div -->

<h3 id="circular"><a href="#circular">#</a>&nbsp;<code>circular</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L417 "View in source") [&#x24C9;][1]

If the node equals one of its parents, the circular attribute is set to the context of that parent and the traversal progresses no deeper.


### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `copy`

<!-- div -->

<h3 id="copy"><a href="#copy">#</a>&nbsp;<code>copy(src=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L601 "View in source") [&#x24C9;][1]




### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
#### Arguments
1. `src=undefined` *(any)*:

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `delete`

<!-- div -->

<h3 id="delete"><a href="#delete">#</a>&nbsp;<code>delete(stopHere=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L438 "View in source") [&#x24C9;][1]

Delete the current element from its parent in the output. Calls delete even on Arrays.


### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
#### Arguments
1. `stopHere=undefined` *(boolean)*:

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `forEach`

<!-- div -->

<h3 id="forEach"><a href="#forEach">#</a>&nbsp;<code>forEach(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L34 "View in source") [&#x24C9;][1]



#### Arguments
1. `xs=undefined` *(Array|Object|any)*:
2. `fn=undefined` *(Function)*:

---

<!-- /div -->

<!-- div -->

<h3 id="forEach"><a href="#forEach">#</a>&nbsp;<code>forEach()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L664 "View in source") [&#x24C9;][1]

adds methods to Traverser


### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `isRoot`

<!-- div -->

<h3 id="isRoot"><a href="#isRoot">#</a>&nbsp;<code>isRoot</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L407 "View in source") [&#x24C9;][1]

(Boolean): Whether the present node is the root node


### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `key`

<!-- div -->

<h3 id="key"><a href="#key">#</a>&nbsp;<code>key</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L402 "View in source") [&#x24C9;][1]

The name of the key of the present node in its parent. This is undefined for the root node.


### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `level`

<!-- div -->

<h3 id="level"><a href="#level">#</a>&nbsp;<code>level</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L412 "View in source") [&#x24C9;][1]

(number): Depth of the node within the traversal


### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `node`

<!-- div -->

<h3 id="node"><a href="#node">#</a>&nbsp;<code>node</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L380 "View in source") [&#x24C9;][1]

(Array): The present node on the recursive walk


### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `node_`

<!-- div -->

<h3 id="node_"><a href="#node_">#</a>&nbsp;<code>node_</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L386 "View in source") [&#x24C9;][1]




### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `parent`

<!-- div -->

<h3 id="parent"><a href="#parent">#</a>&nbsp;<code>parent</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L396 "View in source") [&#x24C9;][1]

The context of the node's parent. This is undefined for the root node.


### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `path`

<!-- div -->

<h3 id="path"><a href="#path">#</a>&nbsp;<code>path</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L391 "View in source") [&#x24C9;][1]

(Array): An array of string keys from the root to the present node


### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `post`

<!-- div -->

<h3 id="post"><a href="#post">#</a>&nbsp;<code>post(fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L491 "View in source") [&#x24C9;][1]

Call this function after each of the children are traversed.


### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
#### Arguments
1. `fn=undefined` *(Function)*:

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `pre`

<!-- div -->

<h3 id="pre"><a href="#pre">#</a>&nbsp;<code>pre(fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L483 "View in source") [&#x24C9;][1]

Call this function before each of the children are traversed.


### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
#### Arguments
1. `fn=undefined` *(Function)*:

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `remove`

<!-- div -->

<h3 id="remove"><a href="#remove">#</a>&nbsp;<code>remove(stopHere=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L447 "View in source") [&#x24C9;][1]

Remove the current element from the output. If the node is in an Array it will be spliced off. Otherwise it will be deleted from its parent.


### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
#### Arguments
1. `stopHere=undefined` *(boolean)*:

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `return`

<!-- div -->

<h3 id="return"><a href="#return">#</a>&nbsp;<code>return(node_=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L364 "View in source") [&#x24C9;][1]




### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
#### Arguments
1. `node_=undefined` *(any)*:

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `state`

<!-- div -->

<h3 id="state"><a href="#state">#</a>&nbsp;<code>state</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L375 "View in source") [&#x24C9;][1]

(Object): Each method that takes a callback has a context *(its this object)* with these attributes:


### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `stop`

<!-- div -->

<h3 id="stop"><a href="#stop">#</a>&nbsp;<code>stop()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L499 "View in source") [&#x24C9;][1]




### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `traverse`

<!-- div -->

<h3 id="traverse"><a href="#traverse">#</a>&nbsp;<code>traverse(obj=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L52 "View in source") [&#x24C9;][1]

{@link https://sourcemaking.com/design_patterns/chain_of_responsibility chainofresponsibility}


[chainofresponsibility]: https://sourcemaking.com/design_patterns/chain_of_responsibility <!-- NAMED_LINK -->

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
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L426 "View in source") [&#x24C9;][1]

Set a new value for the present node.
All the elements in value will be recursively traversed unless stopHere is true.


### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
#### Arguments
1. `x=undefined` *(Function)*:
2. `stopHere=undefined` *(boolean)*:

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `updateState`

<!-- div -->

<h3 id="updateState"><a href="#updateState">#</a>&nbsp;<code>updateState()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L523 "View in source") [&#x24C9;][1]

updates if needed:


### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `walk`

<!-- div -->

<h3 id="walk"><a href="#walk">#</a>&nbsp;<code>walk(root=undefined, cb=undefined, immutable=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L350 "View in source") [&#x24C9;][1]




### @todos 

- [ ] : symbol, map, set
 

### @classDesc 

Traverse and transform objects by visiting every node on a recursive walk. 

### @classProps 

* {value} the data passed in as an argument to traverse on 
 
#### Arguments
1. `root=undefined` *(any)*: root node
2. `cb=undefined` *(Function)*: callback for each
3. `immutable=undefined` *(boolean)*: should mutate or not

---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #traverse "Jump back to the TOC."
