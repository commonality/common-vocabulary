#!/usr/bin/env node

const CommonVocabulary = require('./common-vocabulary')
const LexiconFactory = require('./lexicon-factory')
const meow = require('meow')
const path = require('path')

const msg = `
Usage
  $ common-vocabulary [command]

Commands
  clear
    Removes all lexical entrys from the lexicon object.

  define <term> <definition> [<category>]
    Appends a new lexical entry with the given
    definition to the lexicon object. Returns the lexicon object.

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

  report
    Serializes the lexicon as GitHub-flavored Markdown as
    saves it to --output.

  terms
    Is the same function as the definitions.

  toString
    Serialize the lexicon as JSON and send to stdout.

Options
  --output, -o      Path to definition file.
                    [Default: ./docs/common-vocabulary.md]

Examples
  $ common-vocabulary
  # => generates ./docs/common-vocabulary.md
  $ common-vocabulary has foo-bar
  unicorns & rainbows
`

const options = {
  'flags': {
    'output': {
      'alias': 'o',
      'default': path.resolve(process.cwd(), 'docs/common-vocabulary.md'),
      'type': 'string'
    }
  }
}

const decorator = {
  forReports (cli, commonVocabulary) {
    commonVocabulary.report = () => {
      const destination = cli.flags.output || options.flags.output.default
      const lexicon = commonVocabulary.toHtml()
      const lexiconFactory = new LexiconFactory()
      lexiconFactory.report(destination, lexicon)
    }
  },

  forStdout (cli, commonVocabulary) {
    const method = cli.input.shift() || 'report'
    // eslint-disable-next-line no-console
    const out = commonVocabulary[method](cli.input)
    console.log(decorator.toMessage(out))
  },

  toMessage (out) {
    if (!out) {
      return 'Nothing found.'
    }
    return out
  }
}

const init = () => {
  const cli = meow(msg, options)
  const commonVocabulary = new CommonVocabulary()

  decorator.forReports(cli, commonVocabulary)
  decorator.forStdout(cli, commonVocabulary)
}

init()
