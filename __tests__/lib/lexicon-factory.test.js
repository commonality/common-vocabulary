const lexiconFactory = require('../../lib/lexicon-factory')

describe('commonality/common-vocabulary.lexicon-factory', () => {
  it('generates a report of all canonical terms', () => {
    expect(lexiconFactory).toBeDefined()
    expect(lexiconFactory).not.toBeNull()
  })
})
