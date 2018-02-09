const LexicalEntry = require('../../lib/lexical-entry')
describe('commonality/common-vocabulary.lexicon-entry', () => {
  describe('when given an empty contructor,', () => {
    expect(LexicalEntry).toBeDefined()
    expect(LexicalEntry).not.toBeNull()

    it('returns an NullEntryObject', () => {
      const entry = new LexicalEntry()
      expect(entry).toEqual({
        'category': null,
        'conventionalCommitTypes': [],
        'dd': null,
        'dt': '',
        'meta': {
        },
        'title': ''
      })
    })
  })

  describe('when given valid params,', () => {
    it('creates a lexical entry', () => {
      const entry = new LexicalEntry({
        'category': 'foo-bar',
        'conventionalCommitTypes': [
          'build',
          'ci'
        ],
        'dd': 'Something wicked this way SNAFUed',
        'dt': 'foo-bar'
      })

      expect(entry).toEqual({
        'category': 'foo-bar',
        'conventionalCommitTypes': [
          'build',
          'ci'
        ],
        'dd': 'Something wicked this way SNAFUed',
        'dt': 'foo-bar',
        'title': 'Foo Bar'
      })
    })
  })

  describe('when its static factory method "create" is invoked', () => {
    it('creates a lexical entry', () => {
      const entry = LexicalEntry.create('term', 'definition', {
        'category': 'Test Entry'
      })

      expect(entry).toEqual({
        'category': 'Test Entry',
        'conventionalCommitTypes': [],
        'dd': 'definition',
        'dt': 'term',
        'meta': {
        },
        'title': 'Term'
      })
    })
  })
})
