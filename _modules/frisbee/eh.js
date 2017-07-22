require('isomorphic-fetch')
const log = require('fliplog')
const Frisbee = require('./src/frisbee')
require('./test-setup')

global._server.start()

async function eh() {
  const api = new Frisbee(global._options)
  const querystring = {
    a: 'blue',
    b: 'cyan',
    c: 'pink',
  }
  const getRes = await api.get('/querystring', {
    body: querystring,
  })

  console.log(typeof getRes.body)
  console.log(getRes.body)

  const delRes = await api.get('/querystring', {
    body: querystring,
  })
  console.log(typeof delRes.body)
  console.log(delRes.body)
}
eh()
