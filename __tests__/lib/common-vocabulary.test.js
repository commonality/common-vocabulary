const CommonVocabulary = require('../../lib/common-vocabulary')

describe('commonality/common-vocabulary', () => {

  let cv = null
  const SPACES = 2

  beforeEach(() => {
    cv = new CommonVocabulary()
  })

  afterEach(() => {
    cv = null
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
})
