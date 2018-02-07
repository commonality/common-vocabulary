const CommonVocabulary = require('../../lib/common-vocabulary')

describe('commonality/common-vocabulary', () => {

  let cv = null
  let entryCount = 0
  const SPACES = 2

  beforeEach(() => {
    cv = new CommonVocabulary()
    entryCount = cv.lexicon.size
  })

  afterEach(() => {
    cv = null
    entryCount = 0
  })

  it('builds a standard vocabulary or terms with defintions', () => {
    expect(cv).toBeDefined()
    expect(cv).not.toBeNull()
    // console.log(JSON.stringify(cv, null, SPACES))
  })

  it('removes all term/lexical-entry pairs from the lexicon', () => {
    expect(cv.lexicon.size).toBeGreaterThan(0)
    cv.clear()
    expect(cv.lexicon.size).toBe(0)
  })

  it('concatenates other lexicons', () => {
    //console.log(cv.toArray());
  })

  it('adds new terms and definitions to its lexicon', () => {
    cv.define('term', 'definition', 'test-entry')
    expect(cv.lexicon.size).toBe(entryCount + 1)

    cv.set('another-term', {
      "dd": 'Another Definition'
    })

    expect(cv.lexicon.size).toBe(entryCount + 2)
  })

  it('retreives a definition for a given term', () => {
    const entry = cv.definition('catalog')
    expect(entry.dt).toBe('catalog')
    expect(entry.title).toBe('Catalog')
  })

  it('retrieves all terms from its lexicon', () => {
    const definitions = cv.definitions()
    expect(definitions.length).toBe(entryCount)
    expect(cv.entries().length).toBe(entryCount)
  })

  it('removes a term from its lexicon', () => {
    cv.delete('catalog')
    expect(cv.lexicon.size).toBe(entryCount - 1)
    expect(cv.definition('catalog')).toBeUndefined()
  })

  it('retreives all definitions, grouped by category')

  it('declares whether a term exists in its lexicon', () => {
    expect(cv.has('catalog')).toBe(true)
  })

  it('saves all terms to a json file')

  it('returns a list of all terms in its lexicon', () => {
    expect(cv.terms().includes('order')).toBe(true)
    expect(cv.terms().length).toBe(entryCount)
  })

  it('creates a JSON data structure string', () => {
    const json = cv.toString()
    expect(JSON.parse(json)).toBeTruthy()
  })

  it('overrides "valueOf" to return all defintions', () => {
    expect(cv.valueOf().length).toBe(cv.definitions().length)
  })

})
