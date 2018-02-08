[![commonality/common-vocabulary logo][product-repo-logo-image]][product-repo-url]

# `common-vocabulary`

> Facilitate communication and avoid confusion with canonical terms: share a common vocabulary.

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Coverage percentage][coveralls-image]][coveralls-url]

## Table of contents
<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC:excludeText=Table of contents) -->
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  * [`Currency`](#currency)
    + [**`getCurrencyByAlphabeticCode`**](#getcurrencybyalphabeticcode)
    + [Example](#example)
    + [Parameters](#parameters)
    + [Return type: [**`Currency`**](Currency.md)](#return-type-currencycurrencymd)
      - [`Currency` Properties](#currency-properties)
    + [Authorization](#authorization)
    + [HTTP request headers](#http-request-headers)
- [Semantic version and `CHANGELOG`](#semantic-version-and-changelog)
- [Contributing](#contributing)
- [License](#license)
<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->



## Installation

**Prerequisite software**

`common-vocabulary` is written for [Node.js][nodejs-url], which must be installed prior to use. Unspecified requires [npm][npmjs-url], which is used for installing dependencies.

```shell
# Install with Unspecified
>
```

## Usage

```js
const CommonVocabulary = require('common-vocabulary')

const lexicon = new CommonVocabulary()
```

## API

_The API section should detail `common-vocabulary`'s objects and functions, their signatures, return types, callbacks, and events in detail. Types should be included where they aren't obvious. Caveats should be made clear. Here's an example a `Currency` object model generated by `swagger-codegen`:_

## Semantic version and `CHANGELOG`

The latest version of `common-vocabulary` is `0.0.0`. View the [`CHANGELOG`][changelog-url] for details.

## Contributing

[![Learn how to make a Pull Request with free training][prs-welcome-badge-image]][prs-welcome-url] [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fcommonality%2Fcommon-vocabulary.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fcommonality%2Fcommon-vocabulary?ref=badge_shield)
We welcome contributions with [Pull Requests (PRs)][prs-welcome-url]!

**[:four_leaf_clover: Read the CONTRIBUTING guidelines to get started. :four_leaf_clover:][contributing-url]**

---

Contributions in the form of GitHub pull requests are welcome. Before embarking on a significant change, please adhere to the following guidelines:

  1. **[Create an issue][issues-url]**&mdash;e.g., a [defect ("bug") report][issues-new-defect-url] or a [feature request][issues-new-feat-url]&mdash;to propose changes.

    _Exceptions:_
    > If you're working on documentation and fixing something simple like a typo or an easy bug, go ahead and make a pull request.

  1. **[Follow the CONTRIBUTING guidelines][contributing-url].**

     _Why:_
     > Standards and guidelines make communication easier. If you're willing and able to program&mdash;or want to learn how&mdash; following the guidelines will increase the likelihood of adding your changes to the software product.

  1. **[Read the Code of Conduct][code-of-conduct-url].**

     _Why:_
     > It's more fun when everybody's friendly and respectful.

  1. **[Make a pull request][pulls-url]** when you're ready for other to review your changes (or you get stuck somewhere).

     _PR novices:_
     > **:raising_hand: Never created a pull request?** No problem. [:free: Take this free online training][prs-welcome-url]. (It even covers most of the conventions in the [CONTRIBUTING guidelines][contributing-url]!)

## License

[MIT][license-url] © [commonality][author-url].




<!-- ⛔️ 📝 NOTE: PLEASE ALPHABETIZE LINK REFERENCES. 📝 ⛔️ -->

[author-url]: https://github.com/gregswindle
[changelog-url]: ./CHANGELOG.md
[code-of-conduct-url]: ./CODE_OF_CONDUCT.md
[contributing-url]: ./CONTRIBUTING.md
[coveralls-image]: https://coveralls.io/repos/commonality/common-vocabulary/badge.svg
[coveralls-url]: https://coveralls.io/r/commonality/common-vocabulary
[daviddm-image]: https://david-dm.org/commonality/common-vocabulary.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/commonality/common-vocabulary
[issues-new-defect-url]: /commonality/common-vocabulary.git/issues/new?title=fix%28affected-scope%29%3A+subject-line-with-very-few-words&labels=Priority%3A+Medium%2CStatus%3A+Review+Needed%2CType%3A+Defect&body=%2A%2A%F0%9F%92%A1+TIP%3A%2A%2A+Select+the+%E2%86%96%EF%B8%8E%E2%8E%BE+Preview+%E2%8F%8B+Tab+above+help+read+these+instructions.%0D%0A%0D%0A%23%23+1.+Issue+type%0D%0A%3E%E2%8C%A6+Type+the+letter+%22x%22+in+the+%22checkbox%22+the+best+describe+this+issue.%0D%0A%0D%0A-+%5Bx%5D+**Feature%3A**+I%27m+requesting+a+product+enhancement.%0D%0A%0D%0A%23%23+2.+User+story+summary%0D%0A%3E%E2%8C%A6+Describe+what+you+want+to+accomplish%2C+in+what+role%2Fcapacity%2C+and+why+it%27s+important+to+you.%0D%0A%0D%0A%3E+**EXAMPLE%3A**%0D%0A%3E+As+a+Applicant%2C%0D%0A%3E+I+want+to+submit+my+resume%0D%0A%3E+In+order+to+be+considered+for+a+job+opening.%0D%0A%0D%0AAs+a+%7Brole%7D%2C%0D%0AI+must%2Fneed%2Fwant%2Fshould+%7Bdo+something%7D%0D%0AIn+order+to+%7Bachieve+value%7D.%0D%0A%0D%0A%23%23+3.+Acceptance+criteria%0D%0A%3E%E2%8C%A6+Replace+the+examples+below+with+your+own+imperative%2C+%22true%2Ffalse%22+statements+for+the+**behavior+you+expect**+to+see%2C+or+the+behavior+that+**would**+be+true+if+there+were+no+errors+%28for+defects%29.%0D%0A%0D%0A-+%5B+%5D+1.+Job+Applicants+receive+a+confirmation+email+after+they+submit+their+resumes.%0D%0A-+%5B+%5D+2.+An+Applicant%27s+resume+information+isn%27t+lost+when+errors+occur.%0D%0A-+%5B+%5D+3.+%7Bcriterion-three%7D%0D%0A-+%5B+%5D+4.+%7Bcriterion-four%7D%0D%0A%0D%0A%3C%21--+%E2%9B%94%EF%B8%8F++Do+not+remove+anything+below+this+comment.+%E2%9B%94%EF%B8%8F++--%3E%0D%0A%5Bicon-info-image%5D%3A+..%2Fdocs%2Fimg%2Ficons8%2Ficon-info-50.png%0D%0A
[issues-new-feat-url]: /commonality/common-vocabulary.git/issues/new?title=feat%28affected-scope%29%3A+subject-line-with-very-few-words&labels=Priority%3A+Medium%2CStatus%3A+Review+Needed%2CType%3A+Feature&body=%2A%2A%F0%9F%92%A1+TIP%3A%2A%2A+Select+the+%E2%86%96%EF%B8%8E%E2%8E%BE+Preview+%E2%8F%8B+Tab+above+help+read+these+instructions.%0D%0A%0D%0A%23%23+1.+Issue+type%0D%0A%3E%E2%8C%A6+Type+the+letter+%22x%22+in+the+%22checkbox%22+the+best+describe+this+issue.%0D%0A%0D%0A-+%5Bx%5D+**Feature%3A**+I%27m+requesting+a+product+enhancement.%0D%0A%0D%0A%23%23+2.+User+story+summary%0D%0A%3E%E2%8C%A6+Describe+what+you+want+to+accomplish%2C+in+what+role%2Fcapacity%2C+and+why+it%27s+important+to+you.%0D%0A%0D%0A%3E+**EXAMPLE%3A**%0D%0A%3E+As+a+Applicant%2C%0D%0A%3E+I+want+to+submit+my+resume%0D%0A%3E+In+order+to+be+considered+for+a+job+opening.%0D%0A%0D%0AAs+a+%7Brole%7D%2C%0D%0AI+must%2Fneed%2Fwant%2Fshould+%7Bdo+something%7D%0D%0AIn+order+to+%7Bachieve+value%7D.%0D%0A%0D%0A%23%23+3.+Acceptance+criteria%0D%0A%3E%E2%8C%A6+Replace+the+examples+below+with+your+own+imperative%2C+%22true%2Ffalse%22+statements+for+the+**behavior+you+expect**+to+see%2C+or+the+behavior+that+**would**+be+true+if+there+were+no+errors+%28for+defects%29.%0D%0A%0D%0A-+%5B+%5D+1.+Job+Applicants+receive+a+confirmation+email+after+they+submit+their+resumes.%0D%0A-+%5B+%5D+2.+An+Applicant%27s+resume+information+isn%27t+lost+when+errors+occur.%0D%0A-+%5B+%5D+3.+%7Bcriterion-three%7D%0D%0A-+%5B+%5D+4.+%7Bcriterion-four%7D%0D%0A%0D%0A%3C%21--+%E2%9B%94%EF%B8%8F++Do+not+remove+anything+below+this+comment.+%E2%9B%94%EF%B8%8F++--%3E%0D%0A%5Bicon-info-image%5D%3A+..%2Fdocs%2Fimg%2Ficons8%2Ficon-info-50.png%0D%0A
[issues-url]: /commonality/common-vocabulary/issues
[license-choose-url]: https://choosealicense.com/
[license-no-license-url]: https://choosealicense.com/no-license/
[license-unlicense-url]: https://choosealicense.com/licenses/#unlicense
[license-url]: ./LICENSE
[nodejs-url]: https://nodejs.org
[npm-image]: https://badge.fury.io/js/common-vocabulary.svg
[npm-url]: https://npmjs.org/package/common-vocabulary
[npmjs-url]: https://www.npmjs.com/
[product-repo-logo-image]:./docs/img/logo-commonalaxy.png
[product-repo-url]:  https://github.com/commonality/common-vocabulary
[prs-welcome-badge-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs-welcome-url]: http://makeapullrequest.com
[pulls-url]: /commonality/common-vocabulary.git/pulls
[travis-image]: https://travis-ci.org/commonality/common-vocabulary.svg?branch=master
[travis-url]: https://travis-ci.org/commonality/common-vocabulary


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fcommonality%2Fcommon-vocabulary.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fcommonality%2Fcommon-vocabulary?ref=badge_large)