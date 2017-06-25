# [chain-able](https://github.com/fluents/chain-able#readme) *2.0.0-beta.1*

> next level chaining.


### src/Chainable.js


#### new Chainable() 








##### Returns


- `Void`



#### Chainable.constructor(parent) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| parent | `Chainable` `any`  |  | &nbsp; |




##### Returns


- `Void`



#### Chainable.[Iterator]() 








##### Examples

```javascript
for (var [key, val] of chainable) {}
```
```javascript
 * [Symbol.iterator](): void { for (const item of this.store) yield item }
```


##### Returns


- `Object`  {value: undefined | any, done: true | false}



#### [Instance](instance) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| instance | `Chainable` `Object` `any`  |  | &nbsp; |




##### Examples

```javascript
new Chainable() instanceof Chainable
```


##### Returns


- `boolean`  instanceof



#### end() 








##### Returns


- `Chainable` `any`  



#### when(condition) 

when the condition is true,
 trueBrancher is called,
 else, falseBrancher is called




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| condition | `boolean`  |  | &nbsp; |
| trueBrancher&#x3D;Function.prototype | `Function`  | called when true | *Optional* |
| falseBrancher&#x3D;Function.prototype | `Function`  | called when false | *Optional* |




##### Examples

```javascript
 const prod = process.env.NODE_ENV === 'production'
 chains.when(prod, c => c.set('prod', true), c => c.set('prod', false))
```


##### Returns


- `ChainedMap`  



#### clear() 








##### Returns


- `Chainable`  



#### delete(key) 

calls .delete on this.store.map




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `string` `any`  |  | &nbsp; |




##### Returns


- `Chainable`  



#### has(value) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value | `any`  |  | &nbsp; |




##### Examples

```javascript
if (chain.has('eh') === false) chain.set('eh', true)
```


##### Returns


- `boolean`  



#### [Primative](hint) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| hint | `string`  |  | &nbsp; |




##### Examples

```javascript
chain + 1 (calls this)
```


##### Returns


- `Primative`  




### src/ChainedMap.js


#### new ChainedMap() 








##### Returns


- `Void`



#### ChainedMap.constructor(parent) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| parent | `ChainedMap` `Chainable` `any`  |  | &nbsp; |




##### Returns


- `Void`



#### ChainedMap.tap(name, fn) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| name | `string` `any`  | key to `.get` | &nbsp; |
| fn | `Function`  | function to tap with | &nbsp; |




##### Examples

```javascript
 chain
   .set('moose', {eh: true})
   .tap('moose', moose => {moose.eh = false; return moose})
   .get('moose') === {eh: false}
```


##### Returns


- `Chain`  @chainable



#### ChainedMap.from(obj) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj | `Object`  |  | &nbsp; |




##### Examples

```javascript
chain.from({eh: true}) === chain.eh(true)
```


##### Returns


- `Chainable`  @chainable



#### ChainedMap.extend(methods) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| methods | `Array.&lt;string&gt;`  |  | &nbsp; |




##### Examples

```javascript
this.extend(['eh']) === this.eh = val => this.set('eh', val)
```


##### Returns


- `ChainedMap`  



#### ChainedMap.clear() 








##### Returns


- `ChainedMap`  @chainable



#### ChainedMap.entries([chains&#x3D;false]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| chains&#x3D;false | `boolean`  | if true, returns all properties that are chains | *Optional* |




##### Returns


- `Object`  



#### ChainedMap.values() 








##### Returns


- `Array.&lt;any&gt;`  



#### ChainedMap.get(key) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `any`  |  | &nbsp; |




##### Examples

```javascript
chain.set('eh', true).get('eh') === true
```


##### Returns


- `any`  



#### ChainedMap.set(key, value) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `any`  |  | &nbsp; |
| value | `any`  |  | &nbsp; |




##### Examples

```javascript
chain.set('eh', true).get('eh') === true
```


##### Returns


- `ChainedMap`  



#### ChainedMap.merge(obj, cb) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj | `Object`  | object to merge | &nbsp; |
| cb | `Function`  | return the merger to the callback | &nbsp; |




##### Examples

```javascript
chain.set('eh', [1]).merge({eh: [2]}).get('eh') === [1, 2]
```


##### Returns


- `ChainedMap`  @chainable



#### ChainedMap.clean(obj) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj | `Object`  | object to clean, usually .entries() | &nbsp; |




##### Returns


- `Object`  




### src/ChainedSet.js


#### new ChainedSet() 








##### Returns


- `Void`



#### ChainedSet.constructor(parent) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| parent | `ChainedSet` `Chainable` `any`  |  | &nbsp; |




##### Returns


- `Void`



#### ChainedSet.add(value) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value | `any`  |  | &nbsp; |




##### Returns


- `ChainedSet`  @chainable



#### ChainedSet.prepend(value) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value | `any`  |  | &nbsp; |




##### Returns


- `ChainedSet`  @chainable



#### ChainedSet.values() 








##### Returns


- `Array.&lt;any&gt;`  



#### ChainedSet.merge(arr) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| arr | `Array` `Set` `Concatable`  |  | &nbsp; |




##### Returns


- `ChainedSet`  @chainable




### src/compose/Child.js


#### module.exports() 

ChildChain






##### Returns


- `Void`




### src/compose/Define.js


#### clean(methods) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| methods | `Array.&lt;string&gt;` `Object`  |  | &nbsp; |




##### Returns


- `This`  @chainable



#### defineGetSet(methods) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| methods | `Array.&lt;string&gt;`  |  | &nbsp; |




##### Examples

```javascript
  // defining
  this.eh = val => this.set('eh', val)
  this.defineGetSet(['eh'])

  // usage
  this.eh = true
  this.eh == true
  this.eh(true).eh() == true
```


##### Returns


- `This`  @chainable



#### extendGetSet(methods, thisArg) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| methods | `Array.&lt;string&gt;`  |  | &nbsp; |
| thisArg | `Object`  |  | &nbsp; |




##### Examples

```javascript
 .extendGetSet(['eh'], this)
 -> setEh()
 -> .getEh,
 -> .eh {
     get(getter): getEh,
     set(setter): setEh
    }
```
```javascript
 // usage
 this.extendGetSet(['ehOh'])

 // with methods
 this.ehOh(true)
 this.ehOh() === this.getEhOh() === true

 // with defined set and get + symbol toPrimative
 this.ehOh = false
 this.ehOh == false
 this.ehOh.valueOf() === false
```


##### Returns


- `This`  @chainable




### src/compose/DotProp.js


#### module.exports() 








##### Returns


- `Void`



#### dotter([name&#x3D;null]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| name&#x3D;null | `string`  |  | *Optional* |




##### Returns


- `Object`  



#### _dotter(name) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| name | `string`  |  | &nbsp; |




##### Returns


- `Object`  




### src/compose/Extend.js


#### ChainedMap() 








##### Returns


- `Void`



#### module.exports() 








##### Returns


- `Void`



#### get() 








##### Returns


- `Void`



#### debug([should&#x3D;true]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| should&#x3D;true | `boolean`  |  | *Optional* |




##### Returns


- `Chainable`  @chainable



#### decorateParent(decorations) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| decorations | `Array.&lt;string|Object&gt;`  |  | &nbsp; |




##### Returns


- `ChainedMapExtendable`  @chainable



#### extendAlias(methods, name[, thisArg&#x3D;null]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| methods | `Array.&lt;string&gt;`  |  | &nbsp; |
| name | `string`  |  | &nbsp; |
| thisArg&#x3D;null | `Boolean`  |  | *Optional* |




##### Examples

```javascript
 chain.extendAlias(['eh'], 'canada')
 chain.eh == chain.canada
```


##### Returns


- `ChainedMap`  



#### toarr() 

prettier-ignore






##### Returns


- `Void`



#### extendPrefixed(methods, val[, prefix&#x3D;&#x27;no&#x27;, inverseValue&#x3D;&#x27;todo&#x27;]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| methods | `Array.&lt;string&gt;`  |  | &nbsp; |
| val | `any`  |  | &nbsp; |
| prefix&#x3D;&#x27;no&#x27; | `string`  |  | *Optional* |
| inverseValue&#x3D;&#x27;todo&#x27; | `string`  |  | *Optional* |




##### Returns


- `ChainedMapExtendable`  @chainable



#### extendWith(methods, val[, prefix]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| methods | `Array.&lt;string&gt;`  |  | &nbsp; |
| val | `any`  |  | &nbsp; |
| prefix | `string`  |  | *Optional* |




##### Returns


- `ChainedMapExtendable`  @chainable



#### extendBool(methods, val[, prefix&#x3D;&#x27;no&#x27;]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| methods | `Array.&lt;string&gt;`  |  | &nbsp; |
| val | `any`  |  | &nbsp; |
| prefix&#x3D;&#x27;no&#x27; | `string`  |  | *Optional* |




##### Returns


- `ChainedMapExtendable`  @chainable



#### extendFalse(methods) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| methods | `Array.&lt;string&gt;`  |  | &nbsp; |




##### Examples

```javascript
this.extendFalse('eh').eh().get('eh') === false
```


##### Returns


- `ChainedMapExtendable`  @chainable



#### extendTrue(methods) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| methods | `Array.&lt;string&gt;`  |  | &nbsp; |




##### Examples

```javascript
this.extendTrue('eh').eh().get('eh') === true
```


##### Returns


- `ChainedMapExtendable`  @chainable



#### extendIncrement(methods) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| methods | `Array.&lt;string&gt;`  |  | &nbsp; |




##### Examples

```javascript
this.extendIncrement(['eh']).eh().eh().eh().get('eh') === 3
```


##### Returns


- `ChainedMap`  



#### extendDefault(methods, val) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| methods | `Object`  |  | &nbsp; |
| val | `any`  | default value | &nbsp; |




##### Returns


- `ChainedMap`  




### src/compose/Immutable.js


#### module.exports() 








##### Returns


- `Void`




### src/compose/Observe.js


#### observe(properties, cb) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| properties | `string`  |  | &nbsp; |
| cb | `Function`  |  | &nbsp; |




##### Examples

```javascript
  chain
    .extend(['eh'])
    .observe('eh', data => data.eh === true)
    .eh(true)
```


##### Returns


- `Chain`  @chainable




### src/compose/Shorthands.js


#### module.exports() 








##### Returns


- `Void`



#### concat(key, value) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `any`  |  | &nbsp; |
| value | `Array.&lt;any&gt;`  |  | &nbsp; |




##### Returns


- `ChainedMap`  @chainable



#### append(key, value) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `any`  |  | &nbsp; |
| value | `string` `Array`  |  | &nbsp; |




##### Returns


- `ChainedMap`  @chainable



#### bindMethods(methods) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| methods | `Array.&lt;string&gt;`  |  | &nbsp; |




##### Returns


- `This`  @chainable



#### chainWrap(name, fn) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| name | `string`  |  | &nbsp; |
| fn | `Function`  |  | &nbsp; |




##### Returns


- `This`  @chainable



#### setIfEmpty(name, value) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| name | `string`  |  | &nbsp; |
| value | `any`  |  | &nbsp; |




##### Returns


- `This`  @chainable



#### return(value) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value | `any`  | value to return at the end of a chain | &nbsp; |




##### Returns


- `any`  




### src/compose/Symbols.js


#### [Iterator]() 








##### Examples

```javascript
for (var [key, val] of chainable) {}
```
```javascript
 * [Symbol.iterator](): void { for (const item of this.store) yield item }
```


##### Returns


- `Object`  {value: undefined | any, done: true | false}



#### [Symbol.hasInstance](instance) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| instance | `Chainable` `Object` `any`  |  | &nbsp; |




##### Examples

```javascript
new Chainable() instanceof Chainable
```


##### Returns


- `boolean`  instanceof



#### [Primative](hint) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| hint | `string`  |  | &nbsp; |




##### Examples

```javascript
chain + 1 (calls this)
```


##### Returns


- `Primative`  




### src/compose/Transform.js


#### traverse([useThis&#x3D;false]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| useThis&#x3D;false | `boolean`  |  | *Optional* |




##### Returns


- `ChainedMapExtendable`  @chainable



#### transform(key, value) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `string` `Function`  | currently just string | &nbsp; |
| value | `any` `Function`  |  | &nbsp; |




##### Examples

```javascript
  this
    .transform('dis', val => (typeof val === 'string' ? val : val.id))
    .set('dis', 'eh') // .get('dis') === 'eh'
    .set('dis', {id: 'eh'}) // .get('dis') === 'eh'
```


##### Returns


- `This`  @chainable



#### set() 








##### Returns


- `Void`



#### if() 

prettier-ignore






##### Returns


- `Void`



#### from(obj) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj | `Object`  |  | &nbsp; |




##### Examples

```javascript
chain.from({eh: true}) === chain.merge({eh: true})
```


##### Returns


- `Chain`  @chainable



#### remapKey(from, to) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| from | `string`  | property name | &nbsp; |
| to | `string`  | property name to change key to | &nbsp; |




##### Examples

```javascript
 this
   .remapKeys()
   .remapKey('dis', 'dat')
   .from({dis: true})
 == {dat: true}
```


##### Returns


- `Chain`  @chainable




### src/compose/Types.js


#### validators(validators) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| validators | `Object`  |  | &nbsp; |




##### Returns


- `TypeChain`  @chainable



#### typed([name&#x3D;null]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| name&#x3D;null | `string`  | shorthand for .name | *Optional* |




##### Returns


- `FactoryChain`  @chainable



#### extendTyped(name, type[, onInvalid&#x3D;null, onValid&#x3D;null]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| name | `string`  |  | &nbsp; |
| type | `any`  |  | &nbsp; |
| onInvalid&#x3D;null | `Function`  |  | *Optional* |
| onValid&#x3D;null | `Function`  |  | *Optional* |




##### Returns


- `This`  @chainable




### src/deps/camel-case.js


#### module.exports(str) 

https://github.com/andrewplummer/Sugar/blob/9c018a257a38714b81f7df033b74d236dbf1e861/lib/string.js




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| str | `string`  |  | &nbsp; |




##### Returns


- `string`  
s.charAt(0).toLowerCase() + string.slice(1)




### src/deps/kind-of.js


#### module.exports(val) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `any`  |  | &nbsp; |




##### Returns


- `string`  Native javascript type




### src/deps/props.js


#### allKeys() 

prettier-ignore






##### Returns


- `Void`



#### chain(obj[, o&#x3D;null]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj | `Object`  |  | &nbsp; |
| o&#x3D;null | `Object`  |  | *Optional* |




##### Returns


- `Object` `Array`  chain object, or array/object of the properties



#### allProps(obj[, o&#x3D;{}]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj | `Object`  |  | &nbsp; |
| o&#x3D;{} | `Object`  |  | *Optional* |




##### Returns


- `Array`  




### src/FactoryChain.js


#### new FactoryChain() 








##### Returns


- `Void`



#### FactoryChain.chainUpDowns(methods) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| methods | `Array.&lt;string&gt;`  |  | &nbsp; |




##### Returns


- `FactoryChain`  @chainable



#### FactoryChain._call(name)  *private method*






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| name | `string`  | method name | &nbsp; |




##### Returns


- `FactoryChain`  @chainable




### src/MergeChain.js


#### new MergeChain() 








##### Returns


- `Void`



#### MergeChain.init(parent) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| parent | `Chainable`  | required, for merging | &nbsp; |




##### Returns


- `MergeChain`  @chainable



#### MergeChain.constructor() 








##### Returns


- `Void`



#### MergeChain.onExisting(cb) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| cb | `Function`  |  | &nbsp; |




##### Returns


- `MergeChain`  @chainable



#### MergeChain.onValue(cb) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| cb | `Function`  |  | &nbsp; |




##### Examples

```javascript
.onValue(val => val !== null && val !== undefined)
```


##### Returns


- `MergeChain`  @chainable



#### MergeChain.obj(obj) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj | `Object`  |  | &nbsp; |




##### Returns


- `MergeChain`  @chainable



#### MergeChain.merger(opts) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| opts | `Object` `Function`  |  | &nbsp; |




##### Examples

```javascript
{
  stringToArray: true,
  boolToArray: false,
  boolAsRight: true,
  ignoreTypes: ['null', 'undefined', 'NaN'],
  debug: false,
}
```
```javascript
 .merger(require('lodash.mergewith')())
```


##### Returns


- `MergeChain`  @chainable



#### MergeChain.merge(obj2) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj2 | `Object`  | object to merge in | &nbsp; |




##### Returns


- `MergeChain`  @chainable




### src/TraverseChain.js


#### module.exports() 








##### Returns


- `Void`



#### constructor() 








##### Returns


- `Void`



#### build([should&#x3D;false]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| should&#x3D;false | `boolean`  |  | *Optional* |




##### Returns


- `Traverser`  



#### obj([obj&#x3D;null, isBuilder&#x3D;null]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj&#x3D;null | `Object`  |  | *Optional* |
| isBuilder&#x3D;null | `boolean`  | whether it is a function returning sub traversers | *Optional* |




##### Returns


- `Cleaner`  @chainable



#### keys(tests) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| tests | `Array.&lt;Regexp|Function&gt;`  |  | &nbsp; |




##### Returns


- `Traverser`  @chainable



#### vals(tests) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| tests | `Array.&lt;Regexp|Function&gt;`  |  | &nbsp; |




##### Returns


- `Traverser`  @chainable



#### onMatch([cb&#x3D;null]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| cb&#x3D;null | `Function`  | defaults to .remove | *Optional* |




##### Returns


- `Matcher`  @chainable



#### onNonMatch([cb&#x3D;null]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| cb&#x3D;null | `Function`  | defaults to .remove | *Optional* |




##### Returns


- `Matcher`  @chainable



#### traverse([shouldReturn&#x3D;false]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| shouldReturn&#x3D;false | `boolean`  | returns object | *Optional* |




##### Returns


- `any`  this.obj/data cleaned



#### traversed() 








##### Returns


- `Object` `Array` `any`  




*Documentation generated with [doxdox](https://github.com/neogeek/doxdox).*
