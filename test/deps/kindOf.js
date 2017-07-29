const getTag = require('../../src/deps/is/toS')
const kindOf = require('../../src/deps/util/kindOf')
const stress = require('../_stress')

test('kindOf', () => {
  stress(x => expect(getTag(x).toLowerCase()).toContain(kindOf(x)))
})
