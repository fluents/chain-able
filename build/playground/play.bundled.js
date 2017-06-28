!(function() {
  'use strict'

  var n = function() {},
    t = function() {}
  console.log(function(i) {
    void 0 === i && (i = !1)
    var o = n()
    if (!1 === i) return o
    var r = t()
    return r(this), r(o), o
  })
})()
