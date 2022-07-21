# Zapper ESLint Plugin

Zapper.fi's set of custom ESLint rules

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
pnpm i eslint --save-dev
```

Next, install `@zapper-fi/eslint-plugin`:

```sh
pnpm install @zapper-fi/eslint-plugin --save-dev
```

## Usage

Add `@zapper-fi` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["@zapper-fi"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "@zapper-fi/ethereum-address": 2
    }
}
```

## Supported Rules

* `ethereum-address`: Requires Ethereum-style addresses to be lowercased
