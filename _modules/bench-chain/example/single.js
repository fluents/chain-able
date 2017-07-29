const Bench = require('../')

const sleep = sleepDuration =>
  new Promise(resolve => setTimeout(resolve, sleepDuration))

/* prettier-ignore */

Bench
  .init(__dirname, 'single1')
  .addAsync('single1', async done => {
    await sleep(100)
    done()
  })
  .run()
