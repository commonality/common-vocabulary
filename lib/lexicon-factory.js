const fs = require('fs-extra')
const {noop} = require('lodash')

class LexiconFactory {
  constructor (toLexicalEntryStrategy = noop) {
    this.toLexicalEntry = toLexicalEntryStrategy
  }

  static async report (commonVocabulary, destination) {
    const definitionList = commonVocabulary.toHtml()
    await fs.writeFile(destination, definitionList, {
      'flag': 'w'
    }, (err) => {
      if (err) {
        console.error(err)
      } else {
        console.info(`Generated: ${destination}`)
      }
    })
  }
}

module.exports = LexiconFactory
