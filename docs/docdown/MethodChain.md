# MethodChain.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `/* eslint complexity`
* <a href="#/* eslint complexity">`/&#42; eslint complexity`</a>

<!-- /div -->

<!-- div -->

## `MethodChain.prototype`
* <a href="#MethodChain-prototype-_build">`MethodChain.prototype._build`</a>
* <a href="#MethodChain-prototype-_defaults">`MethodChain.prototype._defaults`</a>
* <a href="#MethodChain-prototype-autoIncrement">`MethodChain.prototype.autoIncrement`</a>
* <a href="#MethodChain-prototype-build">`MethodChain.prototype.build`</a>
* <a href="#MethodChain-prototype-decorate">`MethodChain.prototype.decorate`</a>
* <a href="#MethodChain-prototype-decorate" class="alias">`MethodChain.prototype.extendParent` -> `decorate`</a>
* <a href="#MethodChain-prototype-name">`MethodChain.prototype.name`</a>
* <a href="#MethodChain-prototype-schema">`MethodChain.prototype.schema`</a>

<!-- /div -->

<!-- div -->

## `add`
* <a href="#add">`add`</a>

<!-- /div -->

<!-- div -->

## `alias`
* <a href="#alias">`alias`</a>

<!-- /div -->

<!-- div -->

## `if`
* <a href="#if">`if`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `/* eslint complexity`

<!-- div -->

<h3 id="/* eslint complexity"><a href="#/* eslint complexity">#</a>&nbsp;<code>/* eslint complexity</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L13 "View in source") [&#x24C9;][1]



---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `MethodChain.prototype`

<!-- div -->

<h3 id="MethodChain-prototype-_build"><a href="#MethodChain-prototype-_build">#</a>&nbsp;<code>MethodChain.prototype._build(name, parent)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L344 "View in source") [&#x24C9;][1]



#### Since
4.0.0-alpha.1

#### Arguments
1. `name` *(Primitive)*:
2. `parent` *(Object)*:

#### Returns
*(void)*:

---

<!-- /div -->

<!-- div -->

<h3 id="MethodChain-prototype-_defaults"><a href="#MethodChain-prototype-_defaults">#</a>&nbsp;<code>MethodChain.prototype._defaults(name, parent, built)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L306 "View in source") [&#x24C9;][1]



#### Since
4.0.0

#### Arguments
1. `name` *(Primitive)*: method name
2. `parent` *(Object)*: being decorated
3. `built` *(Object)*: method being built

#### Returns
*(void)*:

#### Example
```js
._defaults('', {}, {})
```
---

<!-- /div -->

<!-- div -->

<h3 id="MethodChain-prototype-autoIncrement"><a href="#MethodChain-prototype-autoIncrement">#</a>&nbsp;<code>MethodChain.prototype.autoIncrement()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L646 "View in source") [&#x24C9;][1]



#### Since
4.0.0-beta.1 <- moved to plugin

#### Returns
*(MethodChain)*: @chainable

#### Example
```js
chain.methods(['index']).autoIncrement().build().index().index(+1).index()
    chain.get('index')
    //=> 3
```
---

<!-- /div -->

<!-- div -->

<h3 id="MethodChain-prototype-build"><a href="#MethodChain-prototype-build">#</a>&nbsp;<code>MethodChain.prototype.build([returnValue=undefined])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L265 "View in source") [&#x24C9;][1]



#### Since
4.0.0

#### Arguments
1. `[returnValue=undefined]` *(any)*: returned at the end of the function for ease of use

#### Returns
*(MethodChain)*: @chainable

#### Example
```js
var obj = {}
   const one = new MethodChain(obj).methods('eh').getSet().build(1)
   //=> 1

   typeof obj.getEh
   //=> 'function'
```
---

<!-- /div -->

<!-- div -->

<h3 id="MethodChain-prototype-decorate"><a href="#MethodChain-prototype-decorate">#</a>&nbsp;<code>MethodChain.prototype.decorate([parentToDecorate=undefined])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L615 "View in source") [&#x24C9;][1]



#### Since
4.0.0-beta.1 <- moved to plugin

#### Aliases
*MethodChain.prototype.extendParent*

#### Arguments
1. `[parentToDecorate=undefined]` *(Object)*: decorate a specific parent shorthand

#### Returns
*(ChainedMap)*: @chainable

#### Example
```js
var obj = {}
 new MethodChain({}).name('eh').decorate(obj).build()
 typeof obj.eh
 //=> 'function'
```
---

<!-- /div -->

<!-- div -->

<h3 id="MethodChain-prototype-name"><a href="#MethodChain-prototype-name">#</a>&nbsp;<code>MethodChain.prototype.name(methods)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L204 "View in source") [&#x24C9;][1]



#### Since
4.0.0-beta.1 <- moved to plugin

#### Arguments
1. `methods` *(Object|string|string&#91;&#93;)*: method names to build

#### Returns
*(MethodChain)*: @chainable

#### Example
```js
var obj = {}
   new MethodChain(obj).name('eh').build()
   typeof obj.eh
   //=> 'function'
```
---

<!-- /div -->

<!-- div -->

<h3 id="MethodChain-prototype-schema"><a href="#MethodChain-prototype-schema">#</a>&nbsp;<code>MethodChain.prototype.schema(obj)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L242 "View in source") [&#x24C9;][1]



#### Since
4.0.0-beta.1 <- moved to plugin

#### Arguments
1. `obj` *(Object)*: schema

#### Returns
*(MethodChain)*: @chainable

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `add`

<!-- div -->

<h3 id="add"><a href="#add">#</a>&nbsp;<code>add(methodFactory)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L681 "View in source") [&#x24C9;][1]



#### Since
4.0.0-beta.2

#### Arguments
1. `methodFactory` *(Object)*: factories to add

#### Returns
*(void)*:

#### Example
```js
function autoGetSet(name, parent) {
    const auto = arg =>
      (isUndefined(arg) ? parent.get(name) : parent.set(name, arg))

    //so we know if we defaulted them
    auto.autoGetSet = true
    return this.onSet(auto).onGet(auto).onCall(auto)
  }
  MethodChain.addPlugin({autoGetSet})


  const chain = new Chain()
  chain.methods('eh').autoGetSet().build()

  chain.eh(1)
  //=> chain
  chain.eh()
  //=> 1 *
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `alias`

<!-- div -->

<h3 id="alias"><a href="#alias">#</a>&nbsp;<code>alias(aliases)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L157 "View in source") [&#x24C9;][1]



#### Since
2.0.0

#### Arguments
1. `aliases` *(string|string&#91;&#93;)*: aliases to remap to the current method being built

#### Returns
*(MethodChain)*: @chainable

#### Example
```js
const chain = new Chain()
    chain.methods(['canada']).alias(['eh']).build()
    chain.eh('actually...canada o.o')
    chain.get('canada')
    //=> 'actually...canada o.o')
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `if`

<!-- div -->

<h3 id="if"><a href="#if">#</a>&nbsp;<code>if()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/MethodChain.js#L212 "View in source") [&#x24C9;][1]



---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #/* eslint complexity "Jump back to the TOC."
