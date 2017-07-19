# pooler.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `pooler`
* <a href="#pooler-prototype-addPoolingTo"  data-meta="addPoolingTo CopyConstructor undefined pooler undefined"  data-call="addPoolingTo CopyConstructor undefined pooler undefined"  data-category="Methods"  data-description="Function Augments CopyConstructor to be a poolable class augmenting only the class itself statically not adding any prototypical fields Any CopyConstructor you give this may have a poolSize property and will look for a prototypical destructor on instances"  data-name="addPoolingTo"  data-member="pooler"  data-all="meta addPoolingTo CopyConstructor undefined pooler undefined call addPoolingTo CopyConstructor undefined pooler undefined category Methods description Function Augments CopyConstructor to be a poolable class augmenting only the class nitself statically not adding any prototypical fields Any CopyConstructor nyou give this may have a poolSize property and will look for a nprototypical destructor on instances name addPoolingTo member pooler see notes todos klassProps" >`pooler.addPoolingTo`</a>
* <a href="#pooler-prototype-oneArgumentPooler"  data-meta="oneArgumentPooler copyFieldsFrom undefined"  data-call="oneArgumentPooler copyFieldsFrom undefined"  data-category="Methods"  data-description="Function Static poolers Several custom versions for each potential number of arguments A completely generic pooler is easy to implement but would require accessing the arguments object In each of these this refers to the Class itself not an instance If any others are needed simply add them here or in their own files"  data-name="oneArgumentPooler"  data-member="pooler"  data-all="meta oneArgumentPooler copyFieldsFrom undefined call oneArgumentPooler copyFieldsFrom undefined category Methods description Function Static poolers Several custom versions for each potential number of narguments A completely generic pooler is easy to implement but would nrequire accessing the arguments object In each of these this refers to nthe Class itself not an instance If any others are needed simply add them nhere or in their own files name oneArgumentPooler member pooler see notes todos klassProps" >`pooler.oneArgumentPooler`</a>
* <a href="#pooler-prototype-standardReleaser"  data-meta="standardReleaser instance undefined"  data-call="standardReleaser instance undefined"  data-category="Methods"  data-description="Function call destructor on a pooled instance put it back in the pool"  data-name="standardReleaser"  data-member="pooler"  data-all="meta standardReleaser instance undefined call standardReleaser instance undefined category Methods description Function call destructor on a pooled instance put it back in the pool name standardReleaser member pooler see notes todos klassProps" >`pooler.standardReleaser`</a>

<!-- /div -->

<!-- div -->

## `pooler.// const pooler`
* <a href="#pooler-prototype-// const pooler"  data-meta="const pooler"  data-call="const pooler"  data-category="Properties"  data-description="Object"  data-name="const pooler"  data-member="pooler"  data-all="meta n const pooler call const pooler category Properties description Object name const pooler member pooler see notes todos klassProps" >`pooler.// const pooler`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `pooler`

<!-- div -->

<h3 id="pooler-prototype-addPoolingTo" data-member="pooler" data-category="Methods" data-name="addPoolingTo"><code>pooler.addPoolingTo(CopyConstructor=undefined, pooler=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/cache/pooler.js#L105 "View in source") [&#x24C9;][1]

(Function): Augments `CopyConstructor` to be a poolable class, augmenting only the class
itself *(statically)* not adding any prototypical fields. Any CopyConstructor
you give this may have a `poolSize` property, and will look for a
prototypical `destructor` on instances.


#### @Since
5.0.0

#### Arguments
1. `CopyConstructor=undefined` *(Function|Object)*: Constructor that can be used to reset.
2. `pooler=undefined` *(Function)*: Customizable pooler.

#### Returns
*(Object)*: enhanced constructor, decorated with pooler

#### Example
```js
class Eh {}
addPoolingTo(Eh) // can optionally pass in pooler as second arg
//=> Eh.instancePool = []
//=> Eh.getPooled = pooler || singleArgumentPooler
//=> Eh.poolSize = 10
//=> Eh.release = standardReleaser

```
---

<!-- /div -->

<!-- div -->

<h3 id="pooler-prototype-oneArgumentPooler" data-member="pooler" data-category="Methods" data-name="oneArgumentPooler"><code>pooler.oneArgumentPooler(copyFieldsFrom=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/cache/pooler.js#L67 "View in source") [&#x24C9;][1]

(Function): Static poolers. Several custom versions for each potential number of
arguments. A completely generic pooler is easy to implement, but would
require accessing the `arguments` object. In each of these, `this` refers to
the Class itself, not an instance. If any others are needed, simply add them
here, or in their own files.


#### @Since
5.0.0

#### Arguments
1. `copyFieldsFrom=undefined` *(Object)*: obj with instance pool

#### Returns
*(Object)*: instance of Klass

#### Example
```js
class Eh {}
addPoolingTo(Eh)
const eh = Eh.getPooled() //=> oneArgumentPooler(Eh)
eh.release()

```
---

<!-- /div -->

<!-- div -->

<h3 id="pooler-prototype-standardReleaser" data-member="pooler" data-category="Methods" data-name="standardReleaser"><code>pooler.standardReleaser(instance=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/cache/pooler.js#L28 "View in source") [&#x24C9;][1]

(Function): call destructor on a pooled instance, put it back in the pool


#### @Since
5.0.0

#### Arguments
1. `instance=undefined` *(Object)*: call destructor

#### Returns
*(void)*:

#### Example
```js
class Eh {}
addPoolingTo(Eh)
const eh = Eh.getPooled()
eh.release()

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `pooler.// const pooler`

<!-- div -->

<h3 id="pooler-prototype-// const pooler" data-member="pooler" data-category="Properties" data-name="// const pooler"><code>pooler.// const pooler</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/cache/pooler.js#L10 "View in source") [&#x24C9;][1]

Object


#### @symb 

🎱 
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #pooler "Jump back to the TOC."
