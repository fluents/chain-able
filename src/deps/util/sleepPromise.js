const sleep = (ms = 0) => new Promise(r => setTimeout(r, ms))

module.exports = sleep
