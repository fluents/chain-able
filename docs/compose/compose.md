# 🎼 compose

use features as needed

- [example](#-example)
- [api](#-api)

## 📘 example

```js
const {compose} = require('chain-able')

const Composed = compose({observe: true})
class Eh extends Composed {}
```

Specifying [SuperClass](#-api)

```js
const {compose} = require('chain-able')

class Canada {}

const Composed = compose(Canada, {observe: true})
class Eh extends Composed {}
```




### 🌐 api

| Name | Type | Description | ?Default | Example  |
| ---- | ---- | ----------- | -------- | -------- |
| options | <code>string &#124; Array&lt;string&gt;</code> | object with properties matching the pre-created compositions | `null` |
| SuperClass | <code>Class / Extendable Function</code> | class to extend | `ChainedMap` |


##### options example

_or `options = true` for everything_

```js

const options = {
  define: true,
  observe: true,
  shorthands: true,
  transform: true,
  types: true,
  dot: true,
  extend: true,
}

```


### how?

<!-- links to the info about this here -->

export classes that dynamically extend a base class, similar to how [decorators](https://ponyfoo.com/articles/javascript-decorators-proposal) work, but much faster.

```js
module.exports = SuperClass => class Eh extends SuperClass {}
```
