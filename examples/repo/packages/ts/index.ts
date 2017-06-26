import Chain from 'chain-able'

class Example extends Chain {}

const chain = new Example()
const chained = new Chain()

const {canada, eh} = chain
  .merge({eh: true})
  .set('canada', 'bar')
  .clear()
  .set('eh', 1)
  .entries()

console.log(eh)
