# encase.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `methodEncasingFactory`
* <a href="#methodEncasingFactory">`methodEncasingFactory`</a>

<!-- /div -->

<!-- div -->

## `return function scopedEncase`
* <a href="#return function scopedEncase">`return function scopedEncase`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `methodEncasingFactory`

<!-- div -->

<h3 id="methodEncasingFactory"><a href="#methodEncasingFactory">#</a>&nbsp;<code>methodEncasingFactory(name, parent, built)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/plugins/encase.js#L29 "View in source") [&#x24C9;][1]



#### Since
4.0.0

#### Arguments
1. `name` *(string)*: name of the method
2. `parent` *(Function|Object)*: object being decorated by MethodChain
3. `built` *(Object)*: the current state of the decoration

#### Returns
*(Function)*: curried finisher, for specification

#### Example
```js
methodEncasingFactory('eh', {}, {onSet: console.log})
 // => Function
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `return function scopedEncase`

<!-- div -->

<h3 id="return function scopedEncase"><a href="#return function scopedEncase">#</a>&nbsp;<code>return function scopedEncase(fnToEncase(fnToEncase, [type=undefined], [specification=undefined])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/plugins/encase.js#L49 "View in source") [&#x24C9;][1]



#### Since
4.0.0-beta.1

#### Arguments
1. `fnToEncase` *(Function)*: depending on the result of this, call
2. `[type=undefined]` *(|Function|string)*: Type
3. `[specification=undefined]` *(|Function)*: Specification

#### Returns
*(Function)*: the method...

#### Example
```js
const fnToEncase = arg => arg === true
   const onInvalid = (error, key, arg, instance) => console.log(arguments)
   const onValid = (key, arg, instance) => console.log(arguments)
   const encased = scopedEncase(fnToEncase)
     .onValid(onValid)
     .onInvalid(onInvalid)
   //=> typedOnCall
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #methodencasingfactory "Jump back to the TOC."
