const test = require('ava')
// const log = require('fliplog')
// const izz = require('izz')
const TypeChain = require('../dist')

// const isURL = require('validator/lib/isURL')
// const isEmail = require('validator/lib/isEmail')
const isLength = require('validator/lib/isLength')
const isNumeric = require('validator/lib/isNumeric')
const trim = require('validator/lib/trim')
// const isUUIDValidator = require('validator/lib/isUUID')
// const validUrl = require('valid-url')

// const isNotEmpty = value =>
//   typeof value !== 'undefined' && value !== undefined && value !== null
const validators = {
  // alwaysTrue: value => true,
  // isBool: value => value === true || value === false || typeof value === 'boolean',
  // isNotEmpty,
  // isEmpty: value => !isNotEmpty(value),
  // isObj: value => value && typeof value === 'object',
  // isArray: Array.isArray,
  // isString: value => value && typeof value === 'string',
  // isUUID: value => isNotEmpty(value) && isUUIDValidator(value),
  // isURL,
  // isEmail,
  // isLength,
  // isWebUri: validUrl.isWebUri,
  // validUrl,
  isPhone: value => isNumeric(value) && isLength(trim(value), {min: 6}),
}

test(`
    ✔ multiple validators
    ✔ onInvalid
    ✔ onValid
    ✔ throw on oncaught invalid
    ✔ factory chain
    ✔ shorthand easy factory chain
      ✔ str
      ✔ obj
`, t => {
  /* prettier-ignore */
  const typed = new TypeChain()
    .validators({string: val => typeof val === 'string'})
    // can be used shorthand
    .typed('short').type(val => typeof val === 'function')
    // or more verbose
    .typed()
      .type('string')
      .name('eh')
      .onValid((val, chain) => chain.set('eh', val))
      .onInvalid((val, chain) => console.log('ignore it.'))

  typed.eh('valid string') // .onValid
  typed.eh(Number) // invalid, triggers .onInvalid
  typed.short(val => {}) // valid function

  try {
    typed.short(!!Boolean) // boolean, not a function, throws
  }
  catch (e) {
    return t.pass()
  }

  // if no error
  t.fail()
})

test(`restore from backup`, t => {
  const typed = new TypeChain()

  /* prettier-ignore */
  const creation = typed
    .validators(validators)
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
  // .end()

  typed.eh('string')
  typed.eh(null)
  typed.igloo('brr! cold...')
  typed.easy('so easy')
  typed.whaaaat('!!!')

  try {
    typed.ring('1250-555-5555')
  }
  catch (e) {}

  try {
    typed.igloo(!!'boolean') // invalid
  }
  catch (e) {
    return t.pass()
  }

  // if no error
  t.fail()
})
