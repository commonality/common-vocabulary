#!/usr/bin/env node

const CommonVocabulary = require('../common-vocabulary')
const lexiconFactory = require('../lexicon-factory')
const meow = require('meow')
const path = require('path')

const msg = `
Usage
  $ common-vocabulary [input]

Synopsis
  add <term> <definition> [<category>]
    Appends a new lexical entry with the given
    definition to the lexicon object. Returns the lexicon object.

  clear
    Removes all lexical entrys from the lexicon object.

  definitions
    Returns a new Iterator object that contains the lexical
    entries for all terms.

  delete <term>
    Removes the lexical entry associated to the definition.

  entries
    Returns a new Iterator object.

  has <term>
    Returns a boolean asserting whether term exists.

  meta [<name>|<title>]
    Sets the name of the lexicon. If the name is omitted, it
    returns the Common Vocabulary's name.

  terms
    Is the same function as the definitions.

Options
  --output, -o      Path to definition file. [Default: false]

Examples
  $ common-vocabulary
  unicorns
  $ common-vocabulary add fo "bario"
  unicorns & rainbows
`

const options = {
  'flags': {
    'output': {
      'alias': 'o',
      'default': path.resolve(__dirname, '../../docs/common-vocabulary.md'),
      'type': 'string'
    }
  }
}

const main = () => {
  const commonVocabulary = new CommonVocabulary()
  const cli = meow(msg, options)
  const method = cli.input.shift() || 'toHtml'
  const report = commonVocabulary[method](cli.input)
  const destination = cli.flags.output || options.flags.output.default
  lexiconFactory.report(destination, report)
}

main()
