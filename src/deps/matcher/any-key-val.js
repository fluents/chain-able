const tester = require('./to-test')

// @TODO: should use matcher,
// @TODO: should inprove the callback data...
module.exports = (keys, vals) => (prop, val) => {
  for (let i = 0; i < keys.length; i++) {
    if (tester(keys[i], prop, val)) return true
  }
  for (let i = 0; i < vals.length; i++) {
    if (tester(vals[i], val, prop)) return true
  }
  return false
}
