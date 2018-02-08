const CommonVocabulary = require('./common-vocabulary')
const LexicalEntry = require('./lexical-entry')
const bunyan = require('bunyan')

const commonVocabLogger = bunyan.createLogger({
  'level': 'error',
  'name': 'common-vocabulary-logger'
})

module.exports = {
  CommonVocabulary,
  LexicalEntry,
  commonVocabLogger
}
