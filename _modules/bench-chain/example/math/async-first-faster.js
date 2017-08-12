const Bench = require('../../')

const sleep = sleepDuration =>
  new Promise(resolve => setTimeout(resolve, sleepDuration))

/* prettier-ignore */

Bench
  .init().dir(__dirname).filename('async-first-faster.json').setup()
  .addAsync('zoomzoom', async done => {
    await sleep(10)
    done()
  })
  .addAsync('snail', async done => {
    await sleep(200)
    done()
  })
  .run()
