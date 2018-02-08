const ConventionalCommitsAdaptor = require('./adaptor/conventional-commits-adaptor')
const LexicalEntry = require('./lexical-entry')
const fs = require('fs-extra')
const objectHash = require('object-hash')
const path = require('path')
const lexicon = require('./db/en/lexicon.json')
const {commonVocabLogger} = require('.')
const {
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

const toSha1 = (object) => {
  const START = 0
  const LENGTH = 7
  return objectHash(object).substr(START, LENGTH)
}

const entryTemplate = `# Common Vocabulary

> Generated on <%- new Date().toISOString() %>.

## Index of terms

<% _.forEach(entries, (entry) => { %> 1. [**<%= entry.dt %>**](#<%= entry.dt %>) <sup><%- entry.category %></sup>
<% }) %>

## Definitions

<dl>
  <% _.forEach(entries, (entry) => { %>
  <!-- definition -->
  <dt><a name="<%= entry.dt %>"></a><%= entry.dt %></dt>
  <dd><%= entry.dd %></dd>
  <ul>
  <!-- categories -->
  <% if (!_.isEmpty(entry.category)) { %>
  <p><em>Category:</em>
    <blockquote><ul>
      <li><%= entry.category %></li>
    </blockquote>
  <% } %>
  <!-- commit log headers -->
  <% if (!_.isEmpty(entry.conventionalCommitTypes)) { %>
    <p><em>Commit log headers</em>
      <blockquote>
        <ul>
          <% _.forEach(entry.conventionalCommitTypes, (change) => { %>
          <li><em>Scope:</em> <code><%- entry.dt %></code>
            <p><li><em>Type:</em> <code><%- change %></code>
            <p>Sample commit message header:
            <pre class="ini"><code><%- change %>(<%- entry.dt %>): 50-character change summary</code></pre>
          <% }) %>
        </ul>
      </blockquote>
    </li>
    <% } %>
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
    this.concat(new ConventionalCommitsAdaptor().adapt())
  }

  clear () {
    return this.lexicon.clear()
  }

  concat (lexicalEntries) {
    lexicalEntries.forEach((entry) => this.set(entry.dt, entry))
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

  has (term) {
    return this.lexicon.has(term)
  }

  async save (destPath = './db/en/common-vocabulary-lexion') {
    try {
      const json = this.definitions()
      const targetPath =
        path.resolve(__dirname, `${destPath}.${toSha1(json)}.json`)
      await fs.writeJson(targetPath, json)
    } catch (err) {
      commonVocabLogger.error(err)
    }
  }

  set (term, definition) {
    const params = Object.assign(definition, {
      'dt': term
    })
    const entry = new LexicalEntry(params)
    return this.lexicon.set(term, entry)
  }

  sort (iteratees = ['dt']) {
    return sortBy(this.definitions(), iteratees)
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
    return JSON.stringify(this.definitions())
  }

  valueOf () {
    return this.definitions()
  }
}

module.exports = CommonVocabulary
