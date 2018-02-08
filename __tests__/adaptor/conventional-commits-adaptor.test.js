const ConventionalCommitsAdaptor =
  require('../../lib/adaptor/conventional-commits-adaptor.js')

describe('commonality/common-vocabulary', () => {

  let adaptor = null
  const SPACES = 2

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
    const entries = adaptor.adapt()
    expect(entries.length).toBe(11)
    // console.log(JSON.stringify(entries, null, SPACES))
  })
})
