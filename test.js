'use strict'

import test from 'ava'
import File from 'vinyl'
import hoistImports from '.'

test.cb('basic import hoisting', t => {
  let testFile = new File({
    contents: new Buffer('@import "firstImport"; css-rule {} @import "secondImport";')
  })

  let hoist = hoistImports()

  hoist.write(testFile)

  hoist.once('data', file => {
    t.is(file.contents.toString(), '@import "firstImport";@import "secondImport"; css-rule {} ')
    t.end()
  })
})
