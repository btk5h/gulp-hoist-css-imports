# gulp-hoist-css-imports

[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

Moves CSS imports to the top of the file, wherever they may be located. This module was written to address the issue of css concatenation not producing valid css, but feel free to use this module if you just don't care where you put your imports ¯\\_(ツ)_/¯

## Usage

`hoistCssImports(options)`

**options.matcher**

Default: `/@import .*?;/g`

The regex matching import statements. The default suits most use cases, but feel free to change this to match other css constructs.

**options.delimiter**

Default: `''`

The delimiter appended to each import statement.
