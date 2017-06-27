const log = require('fliplog')
const Chain = require('chain-able')

const chain = new Chain()

/* prettier-ignore */
chain
  .extend(['eh'])
  .observe('eh', data => {
    console.log(data)
  })
  .eh(true)

log.quick(chain)
