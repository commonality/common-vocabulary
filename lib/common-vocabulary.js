const ConventionalCommitsAdaptor =
  require('./adaptor/conventional-commits-adaptor')
const LexicalEntry = require('./lexical-entry')
const ejs = require('ejs')
const fs = require('fs-extra')
const lexicon = require('./db/en/lexicon.json')
const objectHash = require('object-hash')
const path = require('path')
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

class CommonVocabulary {
  constructor () {
    this.lexicon = new Map(fromArray(lexicon))
    this.concat(new ConventionalCommitsAdaptor().adapt())
    this.defaultTemplate =
      ejs.fileLoader(path.resolve(
        __dirname,
        './templates/en/page-template.md.html'
      ))
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
    const compiled = template(this.defaultTemplate)
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
