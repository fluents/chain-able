module.exports = function(name, parent) {
  return this.initial(0).onCall(() => parent.tap(name, num => num + 1))
}
