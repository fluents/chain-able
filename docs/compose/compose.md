# 🎼 compose

> use features as needed

- [definitions](#Definitions)
- [example](#-example)
  - [default](#Default)
  - [array](#Array)
  - [custom](#Custom)
- [how?](#How)

## Definitions

```ts
const DefaultExt = [Observe, Shorthands, Transform, DotProp]
const Target = class {}

type Exts = Class[] | undefined

// any composable have a .compose method to re-compose them
// default they extend an empty base class
interface Composable extends Class {
	compose: Composer
}

function compose(target?: Class = Target, extensions?: Exts = DefaultExt): Composable
```

## 📘 examples

### Default

```js
const {compose} = require('chain-able')

// uses default params
class Eh extends compose() {}
```

### Array

```js
const {compose} = require('chain-able')
const {Observe} = compose

class Canada {}
const Composed = compose(Canada, [Observe])

class Eh extends Composed {}
```

### Custom

```js
const {compose} = require('chain-able')
const {Observe} = compose

class Canada {}
const Composed = compose(Canada, [Observe])

class Eh extends Composed {}
```

### Decorators

```js
@compose()
class Eh {}
```


### How?

<!-- links to the info about this here -->

export classes that dynamically extend a base class, similar to how [decorators](https://ponyfoo.com/articles/javascript-decorators-proposal) work, but much faster.

❗ they can be used with decorator syntax as well

```js
module.exports = SuperClass => class Eh extends SuperClass {}
```
