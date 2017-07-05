# traverse.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `Traverse`
* <a href="#Traverse">`Traverse`</a>

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

## `clone`
* <a href="#clone">`clone`</a>

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
* <a href="#forEach">`forEach`</a>

<!-- /div -->

<!-- div -->

## `get`
* <a href="#get">`get`</a>

<!-- /div -->

<!-- div -->

## `has`
* <a href="#has">`has`</a>

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

## `map`
* <a href="#map">`map`</a>

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

## `nodes`
* <a href="#nodes">`nodes`</a>

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

## `paths`
* <a href="#paths">`paths`</a>

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

## `reduce`
* <a href="#reduce">`reduce`</a>

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

## `set`
* <a href="#set">`set`</a>

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

<h3 id="Traverse"><a href="#Traverse">#</a>&nbsp;<code>Traverse(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L82 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `after`

<!-- div -->

<h3 id="after"><a href="#after">#</a>&nbsp;<code>after(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L476 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `before`

<!-- div -->

<h3 id="before"><a href="#before">#</a>&nbsp;<code>before(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L468 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `block`

<!-- div -->

<h3 id="block"><a href="#block">#</a>&nbsp;<code>block(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L508 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `circular`

<!-- div -->

<h3 id="circular"><a href="#circular">#</a>&nbsp;<code>circular(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L418 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `clone`

<!-- div -->

<h3 id="clone"><a href="#clone">#</a>&nbsp;<code>clone(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L310 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `copy`

<!-- div -->

<h3 id="copy"><a href="#copy">#</a>&nbsp;<code>copy(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L601 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `delete`

<!-- div -->

<h3 id="delete"><a href="#delete">#</a>&nbsp;<code>delete(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L439 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `forEach`

<!-- div -->

<h3 id="forEach"><a href="#forEach">#</a>&nbsp;<code>forEach(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L35 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- div -->

<h3 id="forEach"><a href="#forEach">#</a>&nbsp;<code>forEach(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L217 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- div -->

<h3 id="forEach"><a href="#forEach">#</a>&nbsp;<code>forEach(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L664 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `get`

<!-- div -->

<h3 id="get"><a href="#get">#</a>&nbsp;<code>get(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L96 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `has`

<!-- div -->

<h3 id="has"><a href="#has">#</a>&nbsp;<code>has(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L135 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `isRoot`

<!-- div -->

<h3 id="isRoot"><a href="#isRoot">#</a>&nbsp;<code>isRoot(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L408 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `key`

<!-- div -->

<h3 id="key"><a href="#key">#</a>&nbsp;<code>key(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L403 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `level`

<!-- div -->

<h3 id="level"><a href="#level">#</a>&nbsp;<code>level(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L413 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `map`

<!-- div -->

<h3 id="map"><a href="#map">#</a>&nbsp;<code>map(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L190 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `node`

<!-- div -->

<h3 id="node"><a href="#node">#</a>&nbsp;<code>node(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L381 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `node_`

<!-- div -->

<h3 id="node_"><a href="#node_">#</a>&nbsp;<code>node_(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L387 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `nodes`

<!-- div -->

<h3 id="nodes"><a href="#nodes">#</a>&nbsp;<code>nodes(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L285 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `parent`

<!-- div -->

<h3 id="parent"><a href="#parent">#</a>&nbsp;<code>parent(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L397 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `path`

<!-- div -->

<h3 id="path"><a href="#path">#</a>&nbsp;<code>path(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L392 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `paths`

<!-- div -->

<h3 id="paths"><a href="#paths">#</a>&nbsp;<code>paths(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L272 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `post`

<!-- div -->

<h3 id="post"><a href="#post">#</a>&nbsp;<code>post(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L492 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `pre`

<!-- div -->

<h3 id="pre"><a href="#pre">#</a>&nbsp;<code>pre(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L484 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `reduce`

<!-- div -->

<h3 id="reduce"><a href="#reduce">#</a>&nbsp;<code>reduce(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L255 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `remove`

<!-- div -->

<h3 id="remove"><a href="#remove">#</a>&nbsp;<code>remove(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L448 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `return`

<!-- div -->

<h3 id="return"><a href="#return">#</a>&nbsp;<code>return(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L365 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `set`

<!-- div -->

<h3 id="set"><a href="#set">#</a>&nbsp;<code>set(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L157 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `state`

<!-- div -->

<h3 id="state"><a href="#state">#</a>&nbsp;<code>state(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L376 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `stop`

<!-- div -->

<h3 id="stop"><a href="#stop">#</a>&nbsp;<code>stop(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L500 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `traverse`

<!-- div -->

<h3 id="traverse"><a href="#traverse">#</a>&nbsp;<code>traverse(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L53 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `update`

<!-- div -->

<h3 id="update"><a href="#update">#</a>&nbsp;<code>update(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L427 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `updateState`

<!-- div -->

<h3 id="updateState"><a href="#updateState">#</a>&nbsp;<code>updateState(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L524 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `walk`

<!-- div -->

<h3 id="walk"><a href="#walk">#</a>&nbsp;<code>walk(xs=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L351 "View in source") [&#x24C9;][1]

Function


### @notes 

* if there is .forEach on the obj already, use it
otherwise, call function for each
 

### @todos 

- [ ] : unexpectedly breaks things iterating
if you are relying on internal functionality
(such as .path, .get, .value...) with map & set
 
#### Arguments
1. `xs=undefined` *(Array|Object|any)*: iteratee
2. `fn=undefined` *(Function)*: callback for each iteration

---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #traverse "Jump back to the TOC."
