const test = require('ava')
const isLength = require('validator/lib/isLength')
const isNumeric = require('validator/lib/isNumeric')
const trim = require('validator/lib/trim')
const hasOwnProperty = require('../dist/deps/util/hasOwnProperty')
const Chain = require('../dist')

/* istanbul ignore next: all branches do not need to be called to fail purposefully */
const {isPhone, isString} = {
  isPhone: value => isNumeric(value) && isLength(trim(value), {min: 6}),
  isString: value => typeof value === 'string',
}

const testChecklist = `
    ✔ multiple validators
    ✔ onInvalid
    ✔ onValid
    ✔ throw on oncaught invalid
`
const testChecklist2 = `
  ✔ factory chain
  ✔ shorthand easy factory chain
    ✔ str
    ✔ obj
`

test(testChecklist, t => {
  /* prettier-ignore */
  const typed = new Chain()
  // can be used shorthand
  typed
    .method('eh')
    .type(isPhone)
    .onValid((val, chain) => chain.set('eh', val))
    .onInvalid((val, chain) => console.log('ignore it.'))
    .build()

  typed.method('short').type('function').build()

  typed.eh('valid string') // .onValid
  typed.eh(Number) // invalid, triggers .onInvalid

  // typed.short(val => {}) // valid function

  try {
    typed.short(!!Boolean) // boolean, not a function, throws
  }
  catch (e) {
    return t.pass()
  }

  /* istanbul ignore next: hit = fail */
  t.fail()
})

test.failing('existing .method add properties', t => {
  const chain = new Chain()

  chain.method('eh').build()

  t.true(!!chain.eh('eh'))

  chain.method('eh').type('string').onInvalid(() => false).build()

  t.true(!!chain.eh('eh'))
  t.true(chain.eh().get('eh') === 'eh')
  t.false(chain.eh(false))
})

/* prettier-ignore */
test(`can use '+' as .build`, t => {
  // eslint-disable-next-line
  +new Chain().method('+')

  const chain = new Chain()

  // eslint-disable-next-line
  ;+chain.method('eh')

  t.true(hasOwnProperty(chain, 'eh'))
})

test.todo('.history')

test('.initial', t => {
  const chain = new Chain().method('eh').initial('eh').build()
  t.true(chain.get('eh') === 'eh')
})
test('.default', t => {
  const chain = new Chain().method('eh').default('eh').build()
  t.true(chain.eh().get('eh') === 'eh')
})

test('.autoIncrement()', t => {
  const i = new Chain()
    .method('index')
    .autoIncrement()
    .build()
    .index(+1)
    .index(+1)
    .get('index')
  t.true(i === 2)
})
test(`4.0.0`, t => {
  const chain = new Chain()
  chain
    .methods(['eh_oh', 'dust'])
    .default('true')
    .alias('canada')
    .alias(['canada', 'red'])
    .getSet()
    .define()
    .camelCase()
    // .onSet(() => console.log('set'))
    // .onGet(() => console.log('get'))
    // if these ^ are not added, throws, or calls .set
    .onInvalid(e => require('fliplog').data(e).echo())
    // .onValid(() => console.log('valid'))
    // .type('string|boolean')
    // .type('?string')
    // .type('boolean[]')
    .build()

  chain.method('name').type('string').initial('name plz').build()

  chain.setEhOh('true')
  chain.setEhOh(true)
  chain.canada = 'false'
  chain.ehOh = true
  chain.ehOh = [true]
  chain.ehOh = ['false']

  // fullObj.ehOh = 'eh'
  // fullObj.ehOh = !!'INVALID'
  // log.quick(fullObj)
})

test.todo('use methodChain on obj')

test(`4.0.0 - MethodChain`, t => {
  const MethodChain = require('../dist/MethodChain')
  var chain = new MethodChain({})
  // const built =
  chain
    .name('eh_oh')
    .default('true')
    .alias('canada')
    .getSet()
    .define()
    .camelCase()
    .onSet(() => console.log('set'))
    .onGet(() => console.log('get'))
    // if these are not added, throws, or calls .set
    .onInvalid(e => console.log('invalid', e))
    // .onValid(() => console.log('valid'))
    .type('string')
    .build()

  // const built = obj
  // built.ehOh = 'eh'
  // built.ehOh = !!'INVALID'
})

/* istanbul ignore next: depreciated */
test.failing(`old depreciated .typed`, t => {
  const typed = new Chain()

  /* prettier-ignore */
  const creation = typed
    .typed()
    .type('string')
    .name('eh')
    .onInvalid((invalidVal, chain) => {
      // console.log('phewph! caught it!')
      // what we passed in below
      t.true(invalidVal === null || invalidVal === true)
    })
    .onValid(validVal => {
      t.true(!!validVal)
    })
    .typed()
    .type(arg => arg && arg.includes('cold'))
    .name('igloo')
    .typed() // factory chain!
    .type('isPhone')
    .name('ring')
    .typed('easy').type(() => true)
    .typed('tooeasy').type(() => false)
    .typed({
      name: 'whaaaat',
      type: str => {
        return typeof str === 'string'
      },
      onValid: () => {},
      onInvalid: () => {},
    })
    .typed('easy2').type(() => true)
    .typed('easy3').type(() => true)
    .end()

  typed.eh('string')
  typed.eh(null)
  typed.igloo('brr! cold...')
  typed.easy('so easy')
  typed.whaaaat('!!!')
  typed.whaaaat(0)
  typed.easy2('so easy')
  typed.easy3('so easy')

  try {
    typed.ring('1250-555-5555')
  }
  catch (e) {
    // ignore
  }
  try {
    typed.tooeasy()
  }
  catch (e) {
    // ignore
  }

  try {
    typed.igloo(!!'boolean') // invalid
  }
  catch (e) {
    return t.pass()
  }

  /* istanbul ignore next: hit = fail (no error) */
  t.fail()
})
