const conventionalCommitTypes = require('conventional-commit-types')
const {
  kebabCase,
  transform,
  toPairsIn,
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

const toLexicalEntry = (params = defaultFactoryParams) => ({
  'category': params.category,
  'conventionalCommitTypes': params.conventionalCommitTypes,
  'dd': params.definition,
  'dfn': params.definition,
  'dt': kebabCase(params.term),
  'title': words(params.term)
    .map((word) => upperFirst(word))
    .join(' ')
})

class ConventionalCommitsAdaptor {
  static adapt (change = conventionalCommitTypes) {
    const lexicalEntries = transform(change.types, (entries, defn, term) => {
      entries[term] = toLexicalEntry(defn)
    }, {
    })
    return toPairsIn(lexicalEntries)
  }
}

module.exports = ConventionalCommitsAdaptor
