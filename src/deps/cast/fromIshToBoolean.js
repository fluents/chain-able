const {isTruish, isFalsish} = require('../regexp/matchBooleanish')
const toBoolean = require('./toBoolean')

const fromIshToBoolean = x => {
  if (isTruish(x)) return true
  else if (isFalsish(x)) return false
  else return toBoolean(x)
}

module.exports = fromIshToBoolean
