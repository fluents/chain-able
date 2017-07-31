let path
const {encase} = require('../exports')

// const requireResolve = encase(require.resolve)
// requireResolve.onValid(x => path = x).call('../build/FAKEROOT/_exported')

try {
  path = require.resolve('../build/FAKEROOT/_exported')
}
 catch (e) {
  //
}

// if (path) {
//   const Chainable = require(path)
//   const {filterMap} = Chainable
//
//   const izKeys = Object.keys(Chainable).filter(key => key.startsWith('is'))
//   const filterIzKeys = (value, key) => izKeys.includes(key)
//   const isses = filterMap(Chainable, filterIzKeys, value => value)
//   require('fliplog').prettyformat(isses).exit()
// }

const extend = (fn, key) => {
  expect.extend({
    toBeDivisibleBy(received, argument) {
      const pass = received % argument == 0
      if (pass) {
        return {
          message: () =>
            `expected ${received} not to be divisible by ${argument}`,
          pass: true,
        }
      }
 else {
        return {
          message: () => `expected ${received} to be divisible by ${argument}`,
          pass: false,
        }
      }
    },
  })
};

global.eq = (a, b) => {
  expect(a).toEqual(b)
};

global.fail = reason => {
  console.log('FAILED: ', reason)
  expect(true).toBe(false)
  throw new Error('failed')
};

global.NO_OP = () => {}
global.t = {
  fail: global.fail,
  pass() {
    console.log('called pass')
  },
}
