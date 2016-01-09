console.log('main:define')

define([ 'foo', 'lib/bar', 'baz' ], function factory(foo, bar, baz) {

  console.log('main:execute')

  console.log('foo:', foo)
  console.log('bar:', bar)
  console.log('baz:', baz)

})
