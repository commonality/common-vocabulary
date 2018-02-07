const nullLexicalEntry = require('./null-lexical-entry')
const {
  kebabCase,
  upperFirst,
  words
} = require('lodash')

/**
 * @private
 * @ignore
 */

const toTitleCase = (term) => words(term)
  .map((word) => upperFirst(word))
  .join(' ')

/**
 * Represents a canonical term in a common vocabulary's lexicon.
 *
 * @prop {string} category - Classifies the term by shared characteristics.
 * @prop {array.<string>} conventionalCommitTypes - Conventional Commit
 *  Message Specification types pertinant to the LexicalEntry.
 * @prop {string} dd - A statement of the exact meaning of the LexicalEntry;
 *  LexicalEntry#dt's definition.
 * @prop {string} dt - The canonical term (word) used to denote the
 *  LexicalEntry.
 * @prop {object=} meta - A "placeholder" object for contexutal "metadata".
 * @prop {string} title - The LexicalEntry#dt's value, auto-formatted to "title
 * case."
 * @example
 * const search = new LexicalEntry({
 *   catetory: 'Feature',
 *   conventionalCommitTypes: [
 *     'feat'
 *   ],
 *   dd: 'Filters products available for purchase by free-text',
 *   dt: 'search'
 * })
 */

class LexicalEntry {
  constructor (params = nullLexicalEntry) {
    this.category = params.category
    this.conventionalCommitTypes = params.conventionalCommitTypes
    this.dd = params.dd
    this.dt = kebabCase(params.dt)
    this.meta = params.meta
    this.title = toTitleCase(params.dt)
  }

  /**
   * @static create - Create a valid LexicalEntry given only a term and
   *  definition.
   *
   * @param {string} term - The canonical term (word) used to denote the
   *  LexicalEntry.
   * @param {string} definition - A statement of the exact meaning of the LexicalEntry.
   * @param {type} [params] - A optional object for any other LexicalEntry's
   *  properties.
   * @example
   * const search = new LexicalEntry(
   *   'search',
   *   'Filters products available for purchase by free-text', {
   *   catetory: 'Feature',
   *   conventionalCommitTypes: [
   *     'feat'
   *   ]
   * })
   *
   * @returns {LexicalEntry} A LexicalEntry.
   */

  static create (term, definition, params) {
    const parameters = Object.assign(nullLexicalEntry, params)
    parameters.dd = definition
    parameters.dt = term
    return new LexicalEntry(parameters)
  }
}

module.exports = LexicalEntry
