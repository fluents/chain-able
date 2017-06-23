const log = require('fliplog')
// const chainsaw = require('./dist/deps/chainsaw')
const chainsaw = require('./chainsaw')

function AddDo(sum) {
  return chainsaw(function(saw) {
    // log.preset('desc').data(saw).bold('CHAINSAW').echo()

    this.add = function(n) {
      console.log('called add')
      sum += n
      saw.next()
    }

    this.do = function(cb) {
      console.log('called do...')
      saw.nest(cb, sum)
    }
  })
}

// class GoGo {
//   constructor() {
//     chainsaw(this)
//   }
//   add(n) {
//     this.saw.next()
//   }
//   call(saw) {
//     this.saw = saw
//     // log.preset('desc').data(saw).bold('CHAINSAW').echo()
//     // log.preset('desc').data(this).bold('CHAINSAW-this').echo()
//   }
// }

// new GoGo()
const eh = AddDo(0)
  .begin()
  .add(5)
  .add(10)
  .do(function(sum) {
    console.log('do 1')
    if (sum > 12) this.add(-10)
  })
  .do(sum => {
    console.log('Sum: ' + sum)
  })

console.log('after-all')

// var xy = []
// var ch = chainsaw(function(saw) {
//   this.h = {
//     x() {
//       console.log('x')
//       xy.push('x')
//       saw.next()
//     },
//     y() {
//       console.log('y')
//       xy.push('y')
//       saw.next()
//     },
//   }
// })
//
// ch.begin().h.x().h.y()
// console.log('called all')

// log.preset('desc').data(eh).echo()
