const {execFileSync} = require('child_process')

const cmd = 'ioreg'
const args = ['-n', 'AppleSmartBattery', '-r', '-a']

function strip(i) {
  return i.replace(/[\n\r\t]/gim, '').replace(/<\/?[^>]+(>|$)/g, '')
}

function plist(str) {
  const data = {}
  let current = {}
  str.split('\n').forEach(item => {
    if (item.includes('key') === true) {
      current.key = strip(item)
    }
    else {
      current.val = strip(item)
      data[current.key] = current.val
      current = {}
    }
  })
  return data
}

function battery() {
  if (process.platform !== 'darwin') return 'NA: ' + process.platform
  return plist(execFileSync(cmd, args).toString())
}

const b = battery()

let Battery = {}
if (process.platform === 'darwin') {
  Battery = {
    amperage: Number(b.Amperage),
    currentCapacity: Number(b.CurrentCapacity),
    percent: Math.floor(b.Current / b.Capacity * 100),
    charging: b.IsCharging,
    temp: Number(b.Temperature),
  }
}

module.exports = Battery
