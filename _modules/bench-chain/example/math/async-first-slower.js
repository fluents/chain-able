const Bench = require('../../')

const sleep = sleepDuration =>
  new Promise(resolve => setTimeout(resolve, sleepDuration))

/* prettier-ignore */

Bench
  .init().dir(__dirname).filename('async-first-faster2.json').setup()
  .addAsync('snail2', async done => {
    await sleep(200)
    done()
  })
  .addAsync('zoomzoom2', async done => {
    await sleep(10)
    done()
  })
  .run()
