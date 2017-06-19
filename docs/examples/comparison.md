```js
const {str, eh, dat, easy} = new Chain()
  .transform('str', val => val + '🤖')
  .set('str', 'yo')
  .when(env === 'production', chain => chain.tap('str', str => str + '👆'))

  // adds methods
  .extend(['dis'])
  .remap({dis: 'dat'})
  .dis('into dat')

  .extendGetSet(['easy'])
  .setEasy(true)

  .typed('eh').type(val => val === true)
  .observe('eh', data => console.log(data.eh))

  .observe('dot.prop', data => console.log(data))
  .set('dot.prop', 1)

  .merge({eh: true})

  .entries()
```

```js

let obj = {}

obj.str = 'yo'
obj.str = obj.str + '🤖'

if (env === 'production') {
  obj.str = obj.str + '👆'
}

// or observable, or setInterval
Object.defineProperty(obj, 'dis', {
  configurable: false,
  enumerable: false,
  set(dat) {
    obj.dat = dat
  },
  get() {
    return obj.dat
  }
})
obj.dis = 'into dat'

// or use another library
const observe = ({eh}) => {
  console.log(eh)
}
Object.defineProperty(obj, 'eh', {
  configurable: true,
  enumerable: true,
  get() {
    return obj._eh
  },
  set(eh) {
    if (eh !== true) {
      throw new TypeError('eh must be true')
    }
    observe({eh})
    obj._eh = eh
  }
})

obj.eh = true
obj = lodash.deepMerge(obj, {eh: true})
```


// obj.typed('eh').type(val => val === true)

```js
const obj = new Chain()
obj.extend(['str', 'eh', 'dis'])
obj.remapKey('dis', 'dat')
obj.observe('eh', data => {
  if (data.eh !== true) {
    throw new Error('eh must be true')
  }
})

obj.str = 'yo'
obj.str = obj.str + '🤖'
obj.str = obj.str + '👆'
obj.eh = true

obj.merge({eh: true})
```
