const log = require('fliplog')
const Chain = require('chain-able')

const chain = new Chain()

chain.methods().onValid(arg => console.log(arg)).schema()
// .onValid((arg, two, nulls) => console.log(arg, two))
// .onSet(arg => console.log('onset...'))
// .onCall(arg => console.log({arg}))
