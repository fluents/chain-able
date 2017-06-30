const {compose} = require('chain-able')

class Winning {}
class Yes extends compose(Winning) {
  get winning() {
    return true
  }
}
const yes = new Yes()
console.log('winning?', yes instanceof Winning, yes.winning)
