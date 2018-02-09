const ConventionalCommitsAdaptor =
  require('../../lib/adaptor/conventional-commits-adaptor.js')

describe('commonality/common-vocabulary', () => {
  let adaptor = null

  beforeEach(() => {
    adaptor = new ConventionalCommitsAdaptor()
  })

  afterEach(() => {
    adaptor = null
  })

  it('builds a standard vocabulary or terms with defintions', () => {
    expect(adaptor).toBeDefined()
    expect(adaptor).not.toBeNull()
  })

  it('adapts the conventional-commits-types definitions to its lexicon', () => {
    const EXPECTED_LENGTH = 11
    const entries = adaptor.adapt()
    expect(entries.length).toBe(EXPECTED_LENGTH)
  })
})
