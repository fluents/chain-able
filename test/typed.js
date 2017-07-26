const log = require('fliplog')
const isLength = require('validator/lib/isLength')
const isNumeric = require('validator/lib/isNumeric')
const trim = require('validator/lib/trim')
const hasOwnProperty = require('../src/deps/util/hasOwnProperty')
const Chain = require('../src')

/* istanbul ignore next: all branches do not need to be called to fail purposefully */
const {isPhone, isString} = {
  isPhone: value => isNumeric(value) && isLength(trim(value), {min: 6}),
  isString: value => typeof value === 'string',
}

const testChecklist = `
    ✔ multiple validators
    ✔ encase validators
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

test(testChecklist, () => {
  /* prettier-ignore */
  const typed = new Chain()
  // can be used shorthand
  typed
    .method('eh')
    .type(isPhone)
    .encase()
    .onValid((val, chain) => chain.set('eh', val))
    .onInvalid((val, chain) => console.log('ignore it.'))
    .build()

  typed.method('short').type('function').build()

  typed.eh('valid string') // .onValid
  typed.eh(Number) // invalid, triggers .onInvalid

  // typed.short(val => {}) // valid function

  try {
    const result = typed.short(!!Boolean) // boolean, not a function, throws
    log.red('SHOULD NOT HIT THIS').data({result}).echo()
  }
  catch (e) {
    return
  }

  /* istanbul ignore next: hit = fail */
  expect(true).toBe(false)
})

test.skip('existing .method add properties', () => {
  const chain = new Chain()

  chain.method('eh').build()

  expect(!!chain.eh('eh')).toBe(true)

  chain.method('eh').type('string').onInvalid(() => false).build()

  expect(!!chain.eh('eh')).toBe(true)
  expect(chain.eh().get('eh') === 'eh').toBe(true)
  expect(chain.eh(false)).toBe(false)
})

/* prettier-ignore */
test(`can use '+' as .build`, () => {
  // eslint-disable-next-line
  +new Chain().method('+')

  const chain = new Chain()

  // eslint-disable-next-line
  ;+chain.method('eh')

  expect(hasOwnProperty(chain, 'eh')).toBe(true)
})

const todo = console.log
todo('.history')

test('.initial', () => {
  const chain = new Chain().method('eh').initial('eh').build()
  expect(chain.get('eh') === 'eh').toBe(true)
})
test('.default', () => {
  const chain = new Chain().method('eh').default('eh').build()
  expect(chain.eh().get('eh') === 'eh').toBe(true)
})

test('.autoIncrement()', () => {
  const i = new Chain()
    .method('index')
    .autoIncrement()
    .build()
    .index(+1)
    .index(+1)
    .get('index')
  expect(i === 2).toBe(true)
})
test(`4.0.0`, () => {
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

todo('use methodChain on obj')

test(`4.0.0 - MethodChain`, () => {
  const MethodChain = require('../src/MethodChain')
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

// test(`custom validators`, t => {
//   const creation = new Chain
//     .method('ignloo')
//     .type(arg => arg && typeof arg === 'string' && arg.includes('cold'))
//     .name('eh')
//     .onInvalid((invalidVal, chain) => {
//       t.true(invalidVal === null || invalidVal === true)
//     })
//     .onValid(validVal => {
//       t.true(!!validVal)
//     })
//
//   creation.eh()
// })

/* istanbul ignore next: depreciated */
// test.skip(`old depreciated .typed`, done => {
//   const typed = new Chain()
//
//   /* prettier-ignore */
//   const creation = typed
//     .typed()
//     .type('string')
//     .name('eh')
//     .onInvalid((invalidVal, chain) => {
//       // console.log('phewph! caught it!')
//       // what we passed in below
//       expect(invalidVal === null || invalidVal === true).toBe(true)
//     })
//     .onValid(validVal => {
//       expect(!!validVal).toBe(true)
//     })
//     .typed()
//     .type(arg => arg && arg.includes('cold'))
//     .name('igloo')
//     .typed() // factory chain!
//     .type('isPhone')
//     .name('ring')
//     .typed('easy').type(() => true)
//     .typed('tooeasy').type(() => false)
//     .typed({
//       name: 'whaaaat',
//       type: str => {
//         return typeof str === 'string'
//       },
//       onValid: () => {},
//       onInvalid: () => {},
//     })
//     .typed('easy2').type(() => true)
//     .typed('easy3').type(() => true)
//     .end()
//
//   typed.eh('string')
//   typed.eh(null)
//   typed.igloo('brr! cold...')
//   typed.easy('so easy')
//   typed.whaaaat('!!!')
//   typed.whaaaat(0)
//   typed.easy2('so easy')
//   typed.easy3('so easy')
//
//   try {
//     typed.ring('1250-555-5555')
//   } catch (e) {
//     // ignore
//   }
//   try {
//     typed.tooeasy()
//   } catch (e) {
//     // ignore
//   }
//
//   try {
//     typed.igloo(!!'boolean') // invalid
//   } catch (e) {
//     return
//   }
//
//   /* istanbul ignore next: hit = fail (no error) */
//   done.fail()
// })
