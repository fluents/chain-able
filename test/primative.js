const test = require('ava')
const log = require('fliplog')
const Chain = require('../dist')
const ChainedSet = require('../dist/ChainedSet')

/**
 * @param  {Array<number>} data
 * @return {number} average
 */
function average(data) {
  const sum = data.reduce((prev, curr) => 0 + prev + curr, 0)
  return Math.floor(sum / data.length)
}

class Primative extends Chain {
  toString() {
    let str = ''
    const obj = this.entries()
    const keys = Object.keys(obj)
    keys.forEach(prop => (str += `"${prop}":"${obj[prop]}",`))
    return str
  }
}
class Iteratable extends ChainedSet {
  toNumber() {
    return average(this.values())
  }
}

test('primative string', t => {
  const obj = new Primative()
  obj.set('factory', '🏭')
  obj.set('canada', '🇨🇦')
  const str = obj + ''
  t.true(str === `"factory":"🏭","canada":"🇨🇦",`)
  // log.prettyformat(obj + '').exit()
})

test('primative number', t => {
  const nums = new Iteratable()
  nums.add(1).add(1).add(1).add(1).add(2) // .concat([1, 1, 1])
  t.true(+nums === 1)
})

test('value array concat', t => {
  const nums = new Iteratable()
  nums.add(1).add(1).add(1).add(1).add(2)
  const arr = [].concat(nums.values())
  t.deepEqual(arr, nums.values())
})
