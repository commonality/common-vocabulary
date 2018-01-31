const lexiconFactory = require('../../lib/lexicon-factory')

describe('commonality/common-vocabulary.lexicon-factory', () => {
  describe('when given an empty contructor,', () => {
    expect(lexiconFactory).toBeDefined()
    expect(lexiconFactory).not.toBeNull()

    it('returns and NullEntryObject', () => {
      const entry = lexiconFactory.create()
      expect(entry).toEqual({
        'category': null,
        'conventionalCommitTypes': [],
        'dd': null,
        'dfn': null,
        'dt': '',
        'title': ''
      })
    })
  })

  describe('when given valid params,', () => {
    it('creates a lexical entry', () => {
      const entry = lexiconFactory.create({
        'category': 'foo-bar',
        'conventionalCommitTypes': [
          'build',
          'ci'
        ],
        'definition': 'Something SNAFUed',
        'term': 'FooBar'
      })

      expect(entry).toEqual({
        'category': 'foo-bar',
        'conventionalCommitTypes': [
          'build',
          'ci'
        ],
        'dd': 'Something SNAFUed',
        'dfn': 'Something SNAFUed',
        'dt': 'foo-bar',
        'title': 'Foo Bar'
      })
    })
  })
})
