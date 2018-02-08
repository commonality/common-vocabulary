const conventionalCommitTypes = require('conventional-commit-types')
const LexicalEntry = require('../lexical-entry')

class ConventionalCommitsAdaptor {
  constructor () {
    this.types = conventionalCommitTypes.types
  }

  adapt () {
    return Object.keys(this.types).map((type) => new LexicalEntry({
      'category': 'conventional-commit-type',
      'dd': this.types[type].description,
      'dt': type,
      'meta': {
        '$ref': `https://raw.githubusercontent.com/commitizen/conventional-commit-types/master/index.json#types.${type}`
      },
      'title': this.types[type].title
    }))
  }
}

module.exports = ConventionalCommitsAdaptor
