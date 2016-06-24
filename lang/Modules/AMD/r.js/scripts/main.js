console.log('main:define')

define([ 'lib/foo', 'bar', 'lib/baz' ], function factory(foo, bar, baz) {

  console.log('main:execute')

  console.group('main')
  console.log('foo:', foo)
  console.log('bar:', bar)
  console.log('baz:', baz)
  console.groupEnd()

})
