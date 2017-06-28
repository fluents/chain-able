const fwf = require('funwithflags')
const dargs = require('dargs')

const {NODE_ENV} = process.env

// src: [rollup, typescript, buble, babel, browserify, copy/strip]
// setup argv
const argvOpts = {
  boolean: ['sourceMaps', 'tsc', 'production'],
  string: ['format'],
  default: {
    // 'amd', 'iife', 'dev', 'es'
    format: 'dev',
    tsc: true,
    production: true,
  },
}

// setup env
const env = Object.assign({}, process.env)
env._ = []
Object.keys(env).forEach(key => {
  if (/(^[A-_Z]+$)/.test(key)) delete env[key]
  if (/npm/.test(key)) delete env[key]
  if (key === 'Apple_PubSub_Socket_Render') delete env[key]
})

// env -> argv -> vars
const dargv = dargs(env, {allowCamelCase: true})
let argv = fwf(dargv, argvOpts)

module.exports = argv
