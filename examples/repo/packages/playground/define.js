const log = require('fliplog')
const Chain = require('chain-able')

class SimpleDefine extends Chain {
  constructor(parent) {
    super(parent)
    this.methods(['ehOh']).getSet().define().build()
  }
}

const simpleDefine = new SimpleDefine()

// or it can be done inline
const simple = new Chain().methods(['ehOh']).getSet().define().build()

// --- automatically defines when using `getSet` and nothing specified ---
class Defined extends Chain {
  /* prettier-ignore */
  constructor(parent) {
    super(parent);
    +this.method({
      ehOh: {
        get(arg) {
          // require('fliplog').trace().stack().exit()
          console.log(arg === undefined)
          return 0
        },
        set(arg) {
          return this.set('ehOh', arg)
        },
      },
      ohEh(arg) {
        console.log(arg === 0)
      },
    })
  }
}

const defined = new Defined()
defined.setEhOh(true)
defined.getEhOh()

defined.ohEh(0)

log.quick(defined)
