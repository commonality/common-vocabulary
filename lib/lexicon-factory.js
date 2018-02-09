const CommonVocabulary = require('./common-vocabulary')
const fs = require('fs-extra')
const path = require('path')
const {commonVocabLogger} = require('.')

class LexiconFactory {
  constructor () {
    this.commonVocabulary = new CommonVocabulary()
  }

  async report (destination) {
    try {
      const html = this.commonVocabulary.toHtml()
      await fs.writeFile(path.resolve(__dirname, destination), html)
      console.log(`Generated: ${destination}`)
    } catch (err) {
      commonVocabLogger.error(err)
    }
  }
}

module.exports = LexiconFactory
