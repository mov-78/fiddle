console.log('baz:define')

define([ 'vendor/util' ], function factory(util) {
  console.log('baz:execute')
  return util.version
})
