global.fail = reason => {
  console.log('FAILED: ', reason)
  expect(true).toBe(false)
}

global.NO_OP = () => {}
global.t = {
  fail: global.fail,
  pass() {
    console.log('called pass')
  },
}
