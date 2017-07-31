let hasIn = require('../../src/deps/is/hasIn')
const flip2 = require('../../src/deps/fp/flip2')

hasIn = flip2(hasIn)

const eq = (x, y, msg) => expect(x).toEqual(y)

describe('hasIn', function() {
  const fred = {name: 'Fred', age: 23}
  const anon = {age: 99}

  it('returns a function that checks the appropriate property', function() {
    const nm = hasIn('name')
    eq(typeof nm, 'function')
    eq(nm(fred), true)
    eq(nm(anon), false)
  })

  it('checks properties from the prototype chain', function() {
    const Person = function() {}
    Person.prototype.age = function() {}

    const bob = new Person()
    eq(hasIn('age', bob), true)
  })

  it('works properly when called with two arguments', function() {
    eq(hasIn('name', fred), true)
    eq(hasIn('name', anon), false)
  })
})
