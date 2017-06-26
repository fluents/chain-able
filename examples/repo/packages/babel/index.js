// @NOTE: fliplog uses chain-able not v4 so have to global it first
global.log = require('fliplog')

require('module-alias/register')
require('babel-core/register')

require('./decorators')
