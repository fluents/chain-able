const log = require('fliplog')
const {merge} = require('chain-able')

// @TODO: demo `eq` here too
log.data(merge(undefined, true)).bold('[undefined, true]').echo()
log.data(merge(null, true)).bold('[null, true]').echo()
log.data(merge(true, undefined)).bold('[true, undefined]').echo()
log.data(merge(true, null)).bold('[true, null]').echo()
log.data(merge({arr: []}, {arr: [1]})).bold('[], []').echo()
log.data(merge({obj: {eh: true}}, {obj: {canada: 1}})).bold('obj, obj').echo()
