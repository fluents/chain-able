const some = test => arr => {
  for (var i in arr) {
    if (test(arr[i])) return true
  }
  return false
}

module.exports = some
