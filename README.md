# gulp-hoist-css-imports

[![npm](https://img.shields.io/npm/v/gulp-hoist-css-imports.svg?style=flat-square)](https://www.npmjs.com/package/gulp-hoist-css-imports) [![CircleCI](https://img.shields.io/circleci/project/w00tmast3r/gulp-hoist-css-imports.svg?style=flat-square)](https://circleci.com/gh/w00tmast3r/gulp-hoist-css-imports) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

A simple gulp plugin that moves CSS imports to the top of the file, wherever they may be located. This plugin was written to address the issue of CSS concatenation not producing valid CSS, but feel free to use this plugin if you just don't care where you put your imports ¯\\_(ツ)_/¯

## Usage

`hoistCssImports(options)`

**options.matcher**

Default: `/@import .*?;/g`

The regex matching import statements. The default suits most use cases, but feel free to change this to match other CSS constructs.

**options.delimiter**

Default: `''`

The delimiter appended to each import statement.
