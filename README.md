
# eslint-plugin-njakob

[![NPM version][npm-status-image]][npm]

ESLint plugin with a collection of personal rules

## Installation

[![NPM][npm-install-image]][npm]


You'll first need to install [ESLint][eslint]:

```
$ npm install eslint --save-dev
```

And then the plugin:

```
$ npm install eslint-plugin-njakob --save-dev
```

**Note:** If you installed ESLint globally then you must also install this project globally.

## Usage

Add `njakob` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "njakob"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "njakob/example": "error"
    }
}
```

## Rules

* `njakob/example`: Just an example

[eslint]: http://eslint.org
[licence]: LICENSE
[npm]: https://nodei.co/npm/eslint-plugin-njakob/
[npm-install-image]: https://nodei.co/npm/eslint-plugin-njakob.png?downloads=true
[npm-status-image]: https://img.shields.io/npm/v/eslint-plugin-njakob.svg