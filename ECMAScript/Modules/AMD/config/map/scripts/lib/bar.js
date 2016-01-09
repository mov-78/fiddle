console.log('bar:define')

define([ 'vendor/util' ], function factory(util) {
  console.log('bar:execute')
  return util.version
})
