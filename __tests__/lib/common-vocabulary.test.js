/* eslint max-statements: ["error", 25] */
const CommonVocabulary = require('../../lib/common-vocabulary')
const {commonVocabLogger} = require('../../lib')
const {first, last, noop} = require('lodash')
const fs = require('fs-extra')

describe('commonality/common-vocabulary', () => {
  let cv = null
  let entryCount = 0

  beforeAll(() => {
    jest.enableAutomock()
  })

  beforeEach(() => {
    cv = new CommonVocabulary()
    entryCount = cv.lexicon.size
  })

  afterEach(() => {
    cv = null
    entryCount = null
    jest.clearAllTimers()
  })

  afterAll(() => {
    jest.disableAutomock().resetAllMocks()
      .resetModules()
  })

  it('builds a standard vocabulary or terms with defintions', () => {
    expect(cv).toBeDefined()
    expect(cv).not.toBeNull()
  })

  it('removes all term/lexical-entry pairs from the lexicon', () => {
    const ZERO = 0
    expect(cv.lexicon.size).toBeGreaterThan(ZERO)
    cv.clear()
    expect(cv.lexicon.size).toBe(ZERO)
  })

  it('concatenates other lexicons', () => {
    // Console.log(cv.toArray());
  })

  it('adds new terms and definitions to its lexicon', () => {
    cv.define('term', 'definition', 'test-entry')
    // eslint-disable-next-line no-magic-numbers
    let SIZE = entryCount + 1
    expect(cv.lexicon.size).toBe(SIZE)

    cv.set('another-term', {
      'dd': 'Another Definition'
    })

    // eslint-disable-next-line no-magic-numbers
    SIZE = entryCount + 2
    expect(cv.lexicon.size).toBe(SIZE)
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
    // eslint-disable-next-line no-magic-numbers
    expect(cv.lexicon.size).toBe(entryCount - 1)
    expect(cv.definition('catalog')).toBeUndefined()
  })

  it('sorts all definitions alphabetically by term', () => {
    const sortedEntries = cv.sort()
    expect(first(sortedEntries).dt).toBe('build')
    expect(last(sortedEntries).dt).toBe('workflow')
  })

  it('declares whether a term exists in its lexicon', () => {
    expect(cv.has('catalog')).toBe(true)
  })

  it('saves all terms to a json file', async () => {
    spyOn(fs, 'writeJson').and.callFake(noop)
    await cv.save()
    expect(fs.writeJson).toHaveBeenCalled()
  })

  it('logs errors thrown on save', async () => {
    spyOn(fs, 'writeJson').and.throwError('oops')
    spyOn(commonVocabLogger, 'error').and.callFake(noop)
    await cv.save()
    expect(commonVocabLogger.error).toHaveBeenCalled()
  })

  it('returns a list of all terms in its lexicon', () => {
    expect(cv.terms().includes('order')).toBe(true)
    expect(cv.terms().length).toBe(entryCount)
  })

  it('creates a JSON data structure string', () => {
    const json = cv.toString()
    expect(JSON.parse(json)).toBeTruthy()
  })

  it('creates an HTML view of the lexicon', () => {
    const html = cv.toHtml()
    expect(typeof html).toBe('string')
  })

  it('generates an array of [term, entry] pairs', () => {
    const array = cv.toArray()
    expect(Array.isArray(first(array))).toBe(true)
  })

  it('overrides "valueOf" to return all defintions', () => {
    expect(cv.valueOf().length).toBe(cv.definitions().length)
  })
})
