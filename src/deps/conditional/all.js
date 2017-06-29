// curry2
const all = test => arr => {
  for (var i in arr) {
    if (!test(arr[i])) return false
  }
  return true
}

module.exports = all
