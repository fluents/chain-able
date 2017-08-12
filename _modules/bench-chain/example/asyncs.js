const Bench = require('../')

const sleep = sleepDuration =>
  new Promise(resolve => setTimeout(resolve, sleepDuration))

/* prettier-ignore */

Bench
  .init().dir(__dirname).filename('asyncs4.json').setup()
  .name('sleepy4')
  .tags('fresh,MORETAGS,uniqd,4th')

  // can also use .add, and then .runAsync()
  .addAsync('sleep1', async done => {
    await sleep(100)
    done()
  })
  .addAsync('sleep2', async done => {
    await sleep(200)
    done()
  })
  .addAsync('sleep3', async done => {
    await sleep(300)
    done()
  })
  .addAsync('sleep200 4', async done => {
    await sleep(200)
    done()
  })
  .run()
