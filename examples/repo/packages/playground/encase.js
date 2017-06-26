const log = require('fliplog')
const Chain = require('chain-able')

class Encased extends Chain {
  couldThrow(shouldThrow = false) {
    if (shouldThrow === true) {
      throw new Error('should throw')
    }
    return this
  }
}

let invalids = 0
const en = new Encased()
  .method('couldThrow')
  .encase()
  .onValid(val => {
    console.log('good :-)', val)
  })
  .onInvalid(e => {
    console.log('phew!', invalids++)
  })
  .build()
  .couldThrow('no throw!')
  .couldThrow(true)
  .couldThrow(true)
  .couldThrow(true)
  .couldThrow(true)
