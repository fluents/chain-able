// this file is just when using in dev mode so huge relative paths aren't required
const {resolve} = require('path')
const moduleAlias = require('module-alias')

const res = rel => resolve(__dirname, rel)
moduleAlias.addPath(res('../../../'))
moduleAlias.addPath(res('../../'))
moduleAlias.addPath(res('../../src'))
moduleAlias.addPath(res('./node_modules'))
