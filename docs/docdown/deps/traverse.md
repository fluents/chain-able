# traverse.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `Traverse`
* <a href="#Traverse-prototype-checkIteratable"  data-meta="checkIteratable node undefined"  data-call="checkIteratable node undefined"  data-category="Methods"  data-description="Function checks whether a node is iteratable"  data-name="checkIteratable"  data-member="Traverse"  data-todos="move into the wrapper if perf allows"  data-all="meta checkIteratable node undefined call checkIteratable node undefined category Methods description Function checks whether a node is iteratable name checkIteratable member Traverse see notes todos move into the wrapper if perf allows n klassProps" >`Traverse.checkIteratable`</a>
* <a href="#Traverse-prototype-clone"  data-meta="clone arg undefined"  data-call="clone arg undefined"  data-category="Methods"  data-description="Function clone any value"  data-name="clone"  data-member="Traverse"  data-see="href https github com fluents chain able blob master src deps dopemerge dopemerge js label fluents chain able blob master src deps dopemerge dopemerge js"  data-all="meta n n clone arg undefined call clone arg undefined category Methods description Function clone any value name clone member Traverse see href https github com fluents chain able blob master src deps dopemerge dopemerge js label fluents chain able blob master src deps dopemerge dopemerge js notes todos klassProps" >`Traverse.clone`</a>
* <a href="#Traverse-prototype-forEach"  data-meta="forEach cb undefined"  data-call="forEach cb undefined"  data-category="Methods"  data-description="Function this is the main usage of Traverse"  data-name="forEach"  data-member="Traverse"  data-all="meta forEach cb undefined call forEach cb undefined category Methods description Function this is the main usage of Traverse name forEach member Traverse see notes todos klassProps" >`Traverse.forEach`</a>
* <a href="#Traverse-prototype-iterate"  data-meta="iterate on undefined on key null Primitive val any instance Traverse any"  data-call="iterate on undefined"  data-category="Methods"  data-description="Function"  data-name="iterate"  data-member="Traverse"  data-todos="handler for Set Map so they can be skipped or traversed for example when cloning add hook to add custom checking if isIteratable deal with isRoot if needed examples with clone and stop"  data-all="meta iterate on undefined n on key null Primitive val any instance Traverse any call iterate on undefined category Methods description Function name iterate member Traverse see notes todos handler for Set Map so they can be skipped or traversed for example when cloning n add hook to add custom checking if isIteratable n deal with isRoot if needed n examples with clone and stop n klassProps" >`Traverse.iterate`</a>
* <a href="#Traverse-prototype-remove"  data-meta="remove arg undefined"  data-call="remove arg undefined"  data-category="Methods"  data-description="Function Remove the current element from the output If the node is in an Array it will be spliced off Otherwise it will be deleted from its parent"  data-name="remove"  data-member="Traverse"  data-all="meta remove arg undefined call remove arg undefined category Methods description Function Remove the current element from the output nIf the node is in an Array it will be spliced off nOtherwise it will be deleted from its parent name remove member Traverse see notes todos klassProps" >`Traverse.remove`</a>
* <a href="#Traverse-prototype-skip"  data-meta="skip"  data-call="skip"  data-category="Methods"  data-description="Function"  data-name="skip"  data-member="Traverse"  data-todos="skip 1 branch"  data-all="meta skip call skip category Methods description Function name skip member Traverse see notes todos skip 1 branch n klassProps" >`Traverse.skip`</a>
* <a href="#Traverse-prototype-stop"  data-meta="stop"  data-call="stop"  data-category="Methods"  data-description="Function stop the iteration"  data-name="stop"  data-member="Traverse"  data-all="meta stop call stop category Methods description Function stop the iteration name stop member Traverse see notes todos klassProps" >`Traverse.stop`</a>
* <a href="#Traverse-prototype-update"  data-meta="update value undefined"  data-call="update value undefined"  data-category="Methods"  data-description="Function update the value for the current key"  data-name="update"  data-member="Traverse"  data-all="meta update value undefined call update value undefined category Methods description Function update the value for the current key name update member Traverse see notes todos klassProps" >`Traverse.update`</a>

<!-- /div -->

<!-- div -->

## `clone`
* <a href="#clone"  data-meta="clone arg undefined"  data-call="clone arg undefined"  data-category="Methods"  data-description="Function"  data-name="clone"  data-todos="merge with dopemerge needs tests converted back for this observe tests do cover somewhat"  data-all="meta clone arg undefined call clone arg undefined category Methods description Function name clone member see notes todos merge with dopemerge n needs tests converted back for this observe tests do cover somewhat n klassProps" >`clone`</a>

<!-- /div -->

<!-- div -->

## `copy`
* <a href="#copy"  data-meta="copy src undefined"  data-call="copy src undefined"  data-category="Methods"  data-description="Function"  data-name="copy"  data-todos="ugh how to clone better with recursive objects"  data-all="meta copy src undefined call copy src undefined category Methods description Function name copy member see notes todos ugh how to clone better with recursive objects n klassProps" >`copy`</a>

<!-- /div -->

<!-- div -->

## `traverse`
* <a href="#"  data-category="Properties"  data-description="unknown"  data-all="meta call category Properties description unknown name member see notes todos klassProps" >``</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `Traverse`

<!-- div -->

<h3 id="Traverse-prototype-checkIteratable" data-member="Traverse" data-category="Methods" data-name="checkIteratable"><code>Traverse.checkIteratable(node=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L337 "View in source") [&#x24C9;][1]

(Function): checks whether a node is iteratable


#### @todos 

- [ ] move into the wrapper? if perf allows?
 
#### Arguments
1. `node=undefined` *(&#42;)*: value to check

#### Returns
*(void)*:

#### Example
```js
.checkIteratable({eh: true})
   //=> this.isLeaf = false
   //=> this.isCircular = false
   //=> this.isIteratable = true

   .checkIteratable({} || [])
   //=> this.isLeaf = true
   //=> this.isCircular = false
   //=> this.isIteratable = false

   var circular = {}
   circular.circular = circular
   .checkIteratable(circular)
   //=> this.isLeaf = false
   //=> this.isCircular = true
   //=> this.isIteratable = true
```
---

<!-- /div -->

<!-- div -->

<h3 id="Traverse-prototype-clone" data-member="Traverse" data-category="Methods" data-name="clone"><code>Traverse.clone(arg=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L833 "View in source") [&#x24C9;][1]

(Function): clone any value


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/dopemerge/dopemerge.js" >fluents/chain able/blob/master/src/deps/dopemerge/dopemerge.js</a>

#### @extends 

* undefined
* undefined



#### @Since
4.0.0

#### Arguments
1. `arg=undefined` *(&#42;)*: argument to clone

#### Returns
*(&#42;)*: cloned value

#### Example
```js
var obj = { eh: true }
clone(obj) === obj //=> false

var obj = { eh: true }
var obj2 = clone(obj)
obj.eh = false
console.log(obj2.eh) //=> true

```
---

<!-- /div -->

<!-- div -->

<h3 id="Traverse-prototype-forEach" data-member="Traverse" data-category="Methods" data-name="forEach"><code>Traverse.forEach(cb=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L250 "View in source") [&#x24C9;][1]

(Function): this is the main usage of Traverse


#### @Since
3.0.0

#### Arguments
1. `cb=undefined` *(Function)*: callback for each iteration

#### Returns
*(&#42;)*: mapped result or original value, depends how it is used

#### Example
```js
traverse([1, 2, 3]).forEach((key, value) => console.log({ [key]: value }))
//=> {'0': 1}
//=> {'1': 2}
//=> {'2': 3}

```
---

<!-- /div -->

<!-- div -->

<h3 id="Traverse-prototype-iterate" data-member="Traverse" data-category="Methods" data-name="iterate"><code>Traverse.iterate(on=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L518 "View in source") [&#x24C9;][1]

Function


#### @todos 

- [ ] handler for Set & Map so they can be skipped or traversed, for example when cloning...
- [ ] add hook to add custom checking if isIteratable
- [ ] deal with .isRoot if needed
- [ ] examples with clone and stop
 

#### @sig 

on(key: null | Primitive, val: any, instance: Traverse): any 
#### Arguments
1. `on=undefined` *(Function)*: callback fn for each iteration

#### Returns
*(&#42;)*: this.node

#### Example
```js
iterate([])
//=> []
//=> on(null, [])

```
#### Example
```js
iterate([1])
//=> [1]
//=> on(null, [1])
//=> on('1', 1)

```
#### Example
```js
//primitive - same for any number, string, symbol, null, undefined
iterate(Symbol('eh'))
//=> Symbol('eh')
//=> on(Symbol('eh'))

```
#### Example
```js
var deeper = { eh: 'canada', arr: [{ moose: true }, 0] }
iterate(deeper)
//=> deeper // returns
//=> on(null, deeper, this) // root

//=> on('eh', 'canada', this) // 1st branch

//=> on('arr', [{moose: true}, 0], this)
//=> on('arr.0', [{moose: true}], this)
//=> on('arr.0.moose', true, this)
//=> on('arr.1', [0], this)

```
---

<!-- /div -->

<!-- div -->

<h3 id="Traverse-prototype-remove" data-member="Traverse" data-category="Methods" data-name="remove"><code>Traverse.remove([arg=undefined])</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L397 "View in source") [&#x24C9;][1]

(Function): Remove the current element from the output.
If the node is in an Array it will be spliced off.
Otherwise it will be deleted from its parent.


#### @Since
2.0.0

#### Arguments
1. `[arg=undefined]` *(|Object)*: optional obj to use, defaults to this.node

#### Returns
*(void)*:

#### Example
```js
traverse([0]).forEach((key, val, it) => it.remove())
//=> []

traverse({ eh: true }).forEach((key, val, it) => it.remove())
//=> {}

traverse({ eh: true, str: 'stringy' }).forEach((key, val, it) => {
  if (!isString(val)) it.remove()
})
//=> {str: 'stringy'}

```
---

<!-- /div -->

<!-- div -->

<h3 id="Traverse-prototype-skip" data-member="Traverse" data-category="Methods" data-name="skip"><code>Traverse.skip()</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L298 "View in source") [&#x24C9;][1]

Function


#### @todos 

- [ ] skip 1 branch
 

#### @Since
3.0.0

#### Returns
*(void)*:

#### Example
```js
traverse([1, 2, 3, [4]]).forEach((key, val, t) => {
  if (isArray(val)) t.skip()
})

```
---

<!-- /div -->

<!-- div -->

<h3 id="Traverse-prototype-stop" data-member="Traverse" data-category="Methods" data-name="stop"><code>Traverse.stop()</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L278 "View in source") [&#x24C9;][1]

(Function): stop the iteration

#### Returns
*(void)*:

#### Example
```js
traverse({ eh: true, arr: [] }).forEach((key, val, t) => {
  if (isArray(val)) this.stop()
})

```
---

<!-- /div -->

<!-- div -->

<h3 id="Traverse-prototype-update" data-member="Traverse" data-category="Methods" data-name="update"><code>Traverse.update(value=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L440 "View in source") [&#x24C9;][1]

(Function): update the value for the current key


#### @Since
2.0.0

#### Arguments
1. `value=undefined` *(&#42;)*: this.node&#91;this.key&#93; = value

#### Returns
*(void)*:

#### Example
```js
traverse({ eh: true }).forEach((key, val, traverser) => {
  if (this.isRoot) return
  traverser.update(false)
})
//=> {eh: false}

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `clone`

<!-- div -->

<h3 id="clone" data-member="" data-category="Methods" data-name="clone"><code>clone(arg=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L801 "View in source") [&#x24C9;][1]

Function


#### @todos 

- [ ] merge with dopemerge?
- [ ] needs tests converted back for this (observe tests do cover somewhat)
 
#### Arguments
1. `arg=undefined` *(&#42;)*: defaults to this.node

#### Returns
*(&#42;)*: cloned

#### Example
```js
var obj = {}
var cloned = traverse().clone(obj)
obj.eh = true
eq(obj, cloned)
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `copy`

<!-- div -->

<h3 id="copy" data-member="" data-category="Methods" data-name="copy"><code>copy(src=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L808 "View in source") [&#x24C9;][1]

Function


#### @todos 

- [ ] ugh, how to clone better with *recursive* objects?
 
#### Arguments
1. `src=undefined` *(any)*: wip

#### Returns
*(any)*: wip

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `traverse`

<!-- div -->

<h3 id="" data-member="" data-category="Properties" data-name="traverse"><code></code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js#L22 "View in source") [&#x24C9;][1]

unknown

---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #traverse "Jump back to the TOC."
