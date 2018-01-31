const fs = require('fs-extra')
const {
  kebabCase,
  upperFirst,
  words
} = require('lodash')

const defaultFactoryParams = {
  'category': null,
  'conventionalCommitTypes': [],
  'definition': null,
  'term': null,
  'title': ''
}

module.exports = {
  create (params = defaultFactoryParams) {
    return {
      'category': params.category,
      'conventionalCommitTypes': params.conventionalCommitTypes,
      'dd': params.definition,
      'dfn': params.definition,
      'dt': kebabCase(params.term),
      'title': words(params.term)
        .map((word) => upperFirst(word))
        .join(' ')
    }
  },

  async report (commonVocabulary, destination) {
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
