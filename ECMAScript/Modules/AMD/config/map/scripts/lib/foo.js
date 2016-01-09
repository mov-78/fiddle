console.log('foo:define')

define([ 'vendor/util' ], function factory(util) {
  console.log('foo:execute')
  return util.version
})
