const {readFileSync} = require('fs')
const docdown = require('../')

const read = filePath => readFileSync(filePath, 'utf8')
const toRelative = filePath => filePath.replace(__dirname, '')

const repoPath = 'https://github.com/codehere/'
const codePath = require.resolve('./code')
const code = read(codePath)

const docs = docdown({
  path: codePath,
  url: repoPath + toRelative(codePath),
})

console.log(docs)
