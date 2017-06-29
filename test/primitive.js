const log = require('fliplog')
const Chain = require('../src')
const ChainedSet = require('../src/ChainedSet')

const stringify = x => JSON.stringify(x, null, 2)

/**
 * @param  {Array<number>} data
 * @return {number} average
 */
function average(data) {
  const sum = data.reduce((prev, curr) => 0 + prev + curr, 0)
  return Math.floor(sum / data.length)
}

class Primitive extends Chain {
  /* istanbul ignore next: not calling this, ensuring string is called */
  toNumber() {
    return 1
  }
  toString() {
    let str = ''
    const obj = this.entries()
    // const keys = Object.keys(obj)
    str = stringify(obj)
    return str
  }
  toJSON() {
    return this.toString()
  }
}
class Iteratable extends ChainedSet {
  toNumber() {
    return average(this.values())
  }
}

// @NOTE emoji = not so good for tests that aren't testing emoji
test('primitive string', () => {
  const obj = new Primitive()
  obj.set('factory', '1') // 🏭
  obj.set('canada', 'c') // 🇨🇦
  const str = `${obj}`
  expect(str).toEqual(stringify({factory: '1', canada: 'c'}))
})

test('primitive number', () => {
  const nums = new Iteratable()
  nums.add(1).add(1).add(1).add(1).add(2) // .concat([1, 1, 1])
  expect(+nums).toEqual(1)
})

test('value array concat', () => {
  const nums = new Iteratable()
  nums.add(1).add(1).add(1).add(1).add(2)
  const arr = [].concat(nums.values())
  expect(arr).toEqual(nums.values())
})
