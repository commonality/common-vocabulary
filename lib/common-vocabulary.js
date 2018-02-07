const ConventionalCommitsAdaptor = require('./adaptor/conventional-commits-adaptor')

// Const lexicalEntry = require('./lexical-entry')

const LexicalEntry = require('./lexical-entry')
const fs = require('fs-extra')
const lexicon = require('./lexion.json')
const {
  groupBy,
  kebabCase,
  sortBy,
  template
} = require('lodash')

const fromArray = (array, term = 'dt') => array.map((entry) => {
  const termKebabed = kebabCase(entry[term])
  return [
    termKebabed,
    entry
  ]
})

const timestamp = () => new Date()
  .toISOString()
  .replace(/-/gm, '')
  .replace(/:/gm, '')

const entryTemplate = `  <dl>
    <% _.forEach(entries, (entry) => { %>
    <!-- definition -->
    <dt><%= entry.dt %></dt>
    <dd><%= entry.dd %></dd>
    <ul>
    <!-- categories -->
    <p><em>Category:</em>
      <blockquote><ul>
        <li><%= entry.category %></li>
      </blockquote>
    <!-- commit log headers -->
      <li><em>Commit log headers</em>
        <blockquote>
          <ul>
            <% _.forEach(entry.conventionalCommitTypes, (change) => { %>
            <li><em>Scope:</em> <code><%- entry.dt %></code>
              <p><li><em>Type:</em> <code><%- change %></code>
              <p>Sample commit message header: <pre><code>
                <%- change %>(<%- entry.dt %>): 50-character change summary
              </code></pre>
            <% }) %>
          </ul>
        </blockquote>
      </li>
      <!-- labels -->
      <% if (_.gte(entry.conventionalCommitTypes, 0)) { %><li>
        <em>Labels</em>
        <blockquote><% _.forEach(entry.conventionalCommitTypes, (change) => { %>
          <p><kbd><%- change.type %>: <%- dt %></kbd>
        <% }) %></blockquote>
      </li><% } %>
    </ul><% }) %>
  </dl>`

class CommonVocabulary {
  constructor (...termDbs) {
    this.lexicon = new Map(fromArray(lexicon))
    this.concat(fromArray(ConventionalCommitsAdaptor.adapt()))
  }

  clear () {
    return this.lexicon.clear()
  }

  concat (lexicalEntries) {
    lexicalEntries.forEach((entry, term) => this.lexicon.set(entry, term))
    return this.lexicon
  }

  define (term, definition, category) {
    const entry = new LexicalEntry({
      category,
      'dd': definition,
      'dt': term
    })
    return this.lexicon.set(entry.dt, entry)
  }

  definition (term) {
    return this.lexicon.get(term)
  }

  definitions () {
    return Array.from(this.lexicon.values())
  }

  delete (term) {
    return this.lexicon.delete(term)
  }

  entries () {
    return this.definitions()
  }

  groupBy (key = 'category') {
    return groupBy(this.lexicon, key)
  }

  has (term) {
    return this.lexicon.has(term)
  }

  async save (destPath = './db/en/common-vocabulary-lexion') {
    try {
      const targetPath = `${destPath}.${timestamp()}.json`
      await fs.writeJson(targetPath, this.toArray())
    } catch (err) {
      throw err
    }
  }

  set (term, definition) {
    const params = Object.assign(definition, {
      'dt': term
    })
    const entry = new LexicalEntry(params)
    return this.lexicon.set(term, entry)
  }

  sortBy (iteratees = ['dt']) {
    return sortBy(this.lexicon, iteratees)
  }

  terms () {
    return Array.from(this.lexicon.keys())
  }

  toArray () {
    return Array.from(this.lexicon)
  }

  toHtml () {
    const compiled = template(entryTemplate)
    return compiled({
      'entries': this.definitions()
    })
  }

  toString () {
    const SPACES = 1
    return JSON.stringify(this.definitions(), null, SPACES)
  }

  valueOf () {
    return this.definitions()
  }
}

module.exports = CommonVocabulary
