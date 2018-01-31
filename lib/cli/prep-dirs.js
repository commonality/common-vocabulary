
const fs = require('fs-extra')
const path = require('path')

const prepDocsDir = async () => {
  try {
    await fs.emptyDir(path.resolve(__dirname, '../../docs'))
    await fs.ensureDir(path.resolve(__dirname, '../../docs/assets/img'))
    await fs.ensureDir(path.resolve(__dirname, '../../docs/assets/img'))
    await fs.ensureFile(path.resolve(__dirname, '../../docs/readme.md'))
  } catch (err) {
    throw err
  }
}

const prepTestArtifactsDir = async () => {
  try {
    await fs.emptyDir(path.resolve(__dirname, '../../docs/reports'))
  } catch (err) {
    throw err
  }
}

const prepDirs = () => {
  prepDocsDir()
  prepTestArtifactsDir()
}

module.exports = {
  prepDirs,
  prepDocsDir,
  prepTestArtifactsDir
}
