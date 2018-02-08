[![commonality/common-vocabulary logo][product-repo-logo-image]][product-repo-url]

# `common-vocabulary`

> Facilitate communication and avoid confusion with canonical terms: share a common vocabulary.

[![License][license-badge-image]][license-url]
[![NPM version][npm-image]][npm-url]
[![FOSSA Status][fossa-image]][fossa-url]
[![NSP Status][nsp-image]][nsp-url]<br>
[![macOS Build Status][travis-image]][travis-url]
[![AppVeyor Windows build status][appveyor-image]][appveyor-url]
[![Coverage percentage][coveralls-image]][coveralls-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![PRs Welcome][makeapullrequest-image]][makeapullrequest-url]

## Table of contents
<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC:excludeText=Table of contents) -->
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Semantic version and `CHANGELOG`](#semantic-version-and-changelog)
- [Contributing](#contributing)
- [License](#license)
<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->

## Installation

**Prerequisite software**

`common-vocabulary` is written for [Node.js][nodejs-url], which must be installed prior to use. Unspecified requires [npm][npmjs-url], which is used for installing dependencies.

```bash
# Install with Unspecified
$ npm i common-vocabulary
```

## Usage

You can add, edit, and remove entries directly from a Terminal.

```bash
# Examples
```

## API

```js
const CommonVocabulary = require('common-vocabulary')

const cv = new CommonVocabulary()
cv.toHtml()
```

## Semantic version and `CHANGELOG`

The latest version of `common-vocabulary` is `0.0.0`. View the [`CHANGELOG`][changelog-url] for details.

## Contributing

[![Learn how to make a Pull Request with free training][prs-welcome-badge-image]][prs-welcome-url] We welcome contributions with [Pull Requests (PRs)][prs-welcome-url]!

---

[![Request a feature][issues-new-feat-image]][issues-new-feat-url]
[![Report a defect][issues-new-defect-image]][issues-new-defect-url]

[![Read the CONTRIBUTING guidelines][contributing-image]][contributing-url]

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

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fcommonality%2Fcommon-vocabulary.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fcommonality%2Fcommon-vocabulary?ref=badge_large)


<!-- ⛔️ 📝 NOTE: PLEASE ALPHABETIZE LINK REFERENCES. 📝 ⛔️ -->

[appveyor-image]: https://img.shields.io/appveyor/ci/commonality/common-vocabulary.svg?style=flat-square&logo=appveyor
[appveyor-url]: https://ci.appveyor.com/project/commonality/common-vocabulary
[author-url]: https://github.com/commonality
[changelog-url]: ./CHANGELOG.md
[codacy-image]: https://img.shields.io/codacy/grade/58a7e841538a49cc8a5d35eba00e6c07.svg?style=flat-square
[codacy-url]: https://www.codacy.com/app/commonality/common-vocabulary?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=commonality/common-vocabulary&amp;utm_campaign=Badge_Grade
[code-of-conduct-url]: ./CODE_OF_CONDUCT.md
[code-of-conduct-url]: https://github.com/commonality/common-vocabulary/blob/master/.github/CODE_OF_CONDUCT.md
[contributing-image]: https://img.shields.io/badge/read---CONTRIBUTING%20Guidelines---yellow.svg?style=for-the-badge&label=read+the
[contributing-url]: ./CONTRIBUTING.md
[coveralls-image]: https://img.shields.io/coveralls/repos/commonality/common-vocabulary/badge.svg?branch=master&style=flat-square
[coveralls-url]: https://coveralls.io/r/commonality/common-vocabulary
[daviddm-image]: https://david-dm.org/commonality/common-vocabulary.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/commonality/common-vocabulary
[fossa-image]: https://app.fossa.io/api/projects/git%2Bgithub.com%2Fcommonality%2Fcommon-vocabulary.svg?type=shield&style=flat-square
[fossa-url]: https://app.fossa.io/projects/git%2Bgithub.com%2Fcommonality%2Fcommon-vocabulary?ref=badge_shield
[issues-new-defect-image]: https://img.shields.io/badge/report---defect---lightgrey.svg?style=for-the-badge&label=report+a
[issues-new-defect-url]: /commonality/common-vocabulary.git/issues/new?title=fix%28affected-scope%29%3A+subject-line-with-very-few-words&labels=Priority%3A+Medium%2CStatus%3A+Review+Needed%2CType%3A+Defect&body=%2A%2A%F0%9F%92%A1+TIP%3A%2A%2A+Select+the+%E2%86%96%EF%B8%8E%E2%8E%BE+Preview+%E2%8F%8B+Tab+above+help+read+these+instructions.%0D%0A%0D%0A%23%23+1.+Issue+type%0D%0A%3E%E2%8C%A6+Type+the+letter+%22x%22+in+the+%22checkbox%22+the+best+describe+this+issue.%0D%0A%0D%0A-+%5Bx%5D+**Feature%3A**+I%27m+requesting+a+product+enhancement.%0D%0A%0D%0A%23%23+2.+User+story+summary%0D%0A%3E%E2%8C%A6+Describe+what+you+want+to+accomplish%2C+in+what+role%2Fcapacity%2C+and+why+it%27s+important+to+you.%0D%0A%0D%0A%3E+**EXAMPLE%3A**%0D%0A%3E+As+a+Applicant%2C%0D%0A%3E+I+want+to+submit+my+resume%0D%0A%3E+In+order+to+be+considered+for+a+job+opening.%0D%0A%0D%0AAs+a+%7Brole%7D%2C%0D%0AI+must%2Fneed%2Fwant%2Fshould+%7Bdo+something%7D%0D%0AIn+order+to+%7Bachieve+value%7D.%0D%0A%0D%0A%23%23+3.+Acceptance+criteria%0D%0A%3E%E2%8C%A6+Replace+the+examples+below+with+your+own+imperative%2C+%22true%2Ffalse%22+statements+for+the+**behavior+you+expect**+to+see%2C+or+the+behavior+that+**would**+be+true+if+there+were+no+errors+%28for+defects%29.%0D%0A%0D%0A-+%5B+%5D+1.+Job+Applicants+receive+a+confirmation+email+after+they+submit+their+resumes.%0D%0A-+%5B+%5D+2.+An+Applicant%27s+resume+information+isn%27t+lost+when+errors+occur.%0D%0A-+%5B+%5D+3.+%7Bcriterion-three%7D%0D%0A-+%5B+%5D+4.+%7Bcriterion-four%7D%0D%0A%0D%0A%3C%21--+%E2%9B%94%EF%B8%8F++Do+not+remove+anything+below+this+comment.+%E2%9B%94%EF%B8%8F++--%3E%0D%0A%5Bicon-info-image%5D%3A+..%2Fdocs%2Fimg%2Ficons8%2Ficon-info-50.png%0D%0A
[issues-new-feat-image]: https://img.shields.io/badge/request---feature---blue.svg?style=for-the-badge&label=request+a
[issues-new-feat-url]: /commonality/common-vocabulary.git/issues/new?title=feat%28affected-scope%29%3A+subject-line-with-very-few-words&labels=Priority%3A+Medium%2CStatus%3A+Review+Needed%2CType%3A+Feature&body=%2A%2A%F0%9F%92%A1+TIP%3A%2A%2A+Select+the+%E2%86%96%EF%B8%8E%E2%8E%BE+Preview+%E2%8F%8B+Tab+above+help+read+these+instructions.%0D%0A%0D%0A%23%23+1.+Issue+type%0D%0A%3E%E2%8C%A6+Type+the+letter+%22x%22+in+the+%22checkbox%22+the+best+describe+this+issue.%0D%0A%0D%0A-+%5Bx%5D+**Feature%3A**+I%27m+requesting+a+product+enhancement.%0D%0A%0D%0A%23%23+2.+User+story+summary%0D%0A%3E%E2%8C%A6+Describe+what+you+want+to+accomplish%2C+in+what+role%2Fcapacity%2C+and+why+it%27s+important+to+you.%0D%0A%0D%0A%3E+**EXAMPLE%3A**%0D%0A%3E+As+a+Applicant%2C%0D%0A%3E+I+want+to+submit+my+resume%0D%0A%3E+In+order+to+be+considered+for+a+job+opening.%0D%0A%0D%0AAs+a+%7Brole%7D%2C%0D%0AI+must%2Fneed%2Fwant%2Fshould+%7Bdo+something%7D%0D%0AIn+order+to+%7Bachieve+value%7D.%0D%0A%0D%0A%23%23+3.+Acceptance+criteria%0D%0A%3E%E2%8C%A6+Replace+the+examples+below+with+your+own+imperative%2C+%22true%2Ffalse%22+statements+for+the+**behavior+you+expect**+to+see%2C+or+the+behavior+that+**would**+be+true+if+there+were+no+errors+%28for+defects%29.%0D%0A%0D%0A-+%5B+%5D+1.+Job+Applicants+receive+a+confirmation+email+after+they+submit+their+resumes.%0D%0A-+%5B+%5D+2.+An+Applicant%27s+resume+information+isn%27t+lost+when+errors+occur.%0D%0A-+%5B+%5D+3.+%7Bcriterion-three%7D%0D%0A-+%5B+%5D+4.+%7Bcriterion-four%7D%0D%0A%0D%0A%3C%21--+%E2%9B%94%EF%B8%8F++Do+not+remove+anything+below+this+comment.+%E2%9B%94%EF%B8%8F++--%3E%0D%0A%5Bicon-info-image%5D%3A+..%2Fdocs%2Fimg%2Ficons8%2Ficon-info-50.png%0D%0A
[issues-url]: /commonality/common-vocabulary/issues
[license-badge-image]: https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square
[license-choose-url]: https://choosealicense.com/
[license-no-license-url]: https://choosealicense.com/no-license/
[license-unlicense-url]: https://choosealicense.com/licenses/#unlicense
[license-url]: ./LICENSE
[makeapullrequest-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[makeapullrequest-url]: http://makeapullrequest.com/
[nodejs-url]: https://nodejs.org
[npm-image]: https://img.shields.io/npm/v/common-vocabulary.svg?style=flat-square
[npm-url]: https://npmjs.org/package/common-vocabulary
[npmjs-url]: https://www.npmjs.com/
[nsp-image]: https://nodesecurity.io/orgs/gregswindle/projects/da7e6d96-620d-4acb-8559-85c06c66921a/badge?style=flat-square
[nsp-url]: https://nodesecurity.io/orgs/gregswindle/projects/da7e6d96-620d-4acb-8559-85c06c66921a
[pr-url]: https://github.com/commonality/common-vocabulary/pulls
[product-repo-logo-image]:./docs/img/logo-commonalaxy.png
[product-repo-url]:  https://github.com/commonality/common-vocabulary
[prs-welcome-badge-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs-welcome-url]: http://makeapullrequest.com
[pulls-url]: /commonality/common-vocabulary.git/pulls
[readme-score-img]: http://readme-score-api.herokuapp.com/score.svg?url=https://github.com/commonality/common-vocabulary
[readme-score-url]: http://clayallsopp.github.io/readme-score?url=https://github.com/commonality/common-vocabulary
[refactoring-url]: https://github.com/commonality/common-vocabulary/wiki/Refactorings-by-category
[scoreme-url]: http://clayallsopp.github.io/readme-score/?url=https://github.com/commonality/common-vocabulary/blob/master/README.md
[travis-image]: https://img.shields.io/travis/commonality/common-vocabulary/master.svg?style=flat-square
[travis-image]: https://travis-ci.org/commonality/common-vocabulary.svg?branch=master
[travis-url]: https://travis-ci.org/commonality/common-vocabulary
