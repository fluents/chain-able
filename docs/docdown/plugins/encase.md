# encase.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `methodEncasingFactory`
* <a href="#methodEncasingFactory">`methodEncasingFactory`</a>

<!-- /div -->

<!-- div -->

## `scopedEncase`
* <a href="#scopedEncase">`scopedEncase`</a>

<!-- /div -->

<!-- div -->

## `typedOnCall`
* <a href="#typedOnCall">`typedOnCall`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `methodEncasingFactory`

<!-- div -->

<h3 id="methodEncasingFactory"><a href="#methodEncasingFactory">#</a>&nbsp;<code>methodEncasingFactory(name=undefined, parent=undefined, built=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/plugins/encase.js#L30 "View in source") [&#x24C9;][1]

(Function): 3 steps
0. enhance error
1. encase function with a specification
2. build a function to call onInvalid or onInvalid depending


### @symb 

⛑🏭 
#### Since
4.0.0

#### Arguments
1. `name=undefined` *(string)*: name of the method
2. `parent=undefined` *(Function|Object)*: object being decorated by MethodChain
3. `built=undefined` *(Object)*: the current state of the decoration

#### Returns
*(Function)*: curried finisher, for specification

#### Example
```js
methodEncasingFactory('eh', {}, { onSet: console.log })
//=> Function

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `scopedEncase`

<!-- div -->

<h3 id="scopedEncase"><a href="#scopedEncase">#</a>&nbsp;<code>scopedEncase(fnToEncase=undefined, [type=undefined], [specification=undefined])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/plugins/encase.js#L53 "View in source") [&#x24C9;][1]

Function

#### Since
4.0.0-beta.1

#### Arguments
1. `fnToEncase=undefined` *(Function)*: depending on the result of this, call
2. `[type=undefined]` *(|Function|string)*: Type
3. `[specification=undefined]` *(|Function)*: Specification

#### Returns
*(Function)*: the method...

#### Example
```js
const fnToEncase = arg => arg === true
const onInvalid = (error, key, arg, instance) => console.log(arguments)
const onValid = (key, arg, instance) => console.log(arguments)
const encased = scopedEncase(fnToEncase).onValid(onValid).onInvalid(onInvalid)
//=> typedOnCall

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `typedOnCall`

<!-- div -->

<h3 id="typedOnCall"><a href="#typedOnCall">#</a>&nbsp;<code>typedOnCall(arg=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/plugins/encase.js#L87 "View in source") [&#x24C9;][1]

(Function): this is the actual built function

#### Since
4.0.0-beta.1

#### Arguments
1. `arg=undefined` *(any)*: arg to validate

#### Returns
*(Function): typedOnCall(argToValidate: any)*

#### Example
```js
const encased = encase(fnToEncase)
     .onValid()
     .onInvalid(function)
     .call()
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #methodencasingfactory "Jump back to the TOC."
