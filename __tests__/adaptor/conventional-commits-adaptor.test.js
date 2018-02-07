const ConventionalCommitsAdaptor =
  require('../../lib/adaptor/conventional-commits-adaptor.js')

describe('commonality/common-vocabulary', () => {

  let adaptor = ConventionalCommitsAdaptor
  const SPACES = 2

  beforeEach(() => {
    adaptor = ConventionalCommitsAdaptor
  })

  afterEach(() => {
    adaptor = null
  })

  it('builds a standard vocabulary or terms with defintions', () => {
    expect(adaptor).toBeDefined()
    expect(adaptor).not.toBeNull()
    console.log(JSON.stringify(adaptor, null, SPACES))
  })

  it('adapts the conventional-commits-types definitions to its lexicon')
})
