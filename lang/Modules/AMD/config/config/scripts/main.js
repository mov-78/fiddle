console.log('main:define')

define([ 'lib/foo', 'lib/bar' ], function factory(foo, bar) {

  console.log('main:execute')

  console.log('foo:', foo)
  console.log('bar:', bar)

})
