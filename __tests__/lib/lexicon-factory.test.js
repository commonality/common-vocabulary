const LexiconFactory = require('../../lib/lexicon-factory')
const fs = require('fs-extra')
const {commonVocabLogger} = require('../../lib')
const {noop} = require('lodash')

describe('commonality/common-vocabulary.lexicon-factory', () => {

  let lexiconFactory = null

  afterEach(() => {
    fs.writeFile.calls.reset()
    lexiconFactory = null
  })

  it('generates a report of all canonical terms', () => {
    spyOn(fs, 'writeFile').and.callFake(noop)
    lexiconFactory = new LexiconFactory()
    lexiconFactory.report('./docs/common-vocabulary/readme.md')
    expect(fs.writeFile).toHaveBeenCalled()
  })

  it('logs errors thrown on save', () => {
    spyOn(fs, 'writeFile').and.throwError('oops')
    spyOn(commonVocabLogger, 'error').and.callFake(noop)

    lexiconFactory = new LexiconFactory()

    lexiconFactory.report('./docs/common-vocabulary/readme.md')
    expect(commonVocabLogger.error).toHaveBeenCalled()
  })
})
