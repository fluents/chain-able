const {basename} = require('path')

const getFolderName = file => {
  const fileParts = file.split('/')
  fileParts.pop()
  return fileParts.pop()
}
const getFileName = (file, withExt = false) => {
  let filename = basename(file)

  if (withExt === false && filename.includes('.')) {
    filename = filename.split('.').shift()
  }

  return filename
}
const getFolderAndFileName = (abs, withExt = false) => {
  const folder = getFolderName(abs, withExt)
  const file = getFileName(abs, withExt)
  return [folder, file, abs]
}

module.exports = {getFolderName, getFileName, getFolderAndFileName}
