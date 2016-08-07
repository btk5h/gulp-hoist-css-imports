'use strict'

const through = require('through2')
const {PluginError} = require('gulp-util')

module.exports = ({matcher = /@import .*?;/g, delimiter = ''} = {}) => {
  function transform (file, enc, cb) {
    if (file.isNull()) {
      return cb(null, file)
    }

    if (file.isStream()) {
      return cb(new PluginError('gulp-hoist-css-imports', 'Streaming not supported'))
    }

    let imports = new Set()
    let contents = file.contents.toString()

    let match
    while ((match = matcher.exec(contents))) {
      imports.add(match[0])
    }

    contents = new Buffer(contents.replace(matcher, ''))
    imports = [...imports].map(i => new Buffer(`${i}${delimiter}`))

    file.contents = Buffer.concat([...imports, contents])

    cb(null, file)
  }

  return through.obj(transform)
}
