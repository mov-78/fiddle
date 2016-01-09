console.log('foo:define')

define(function factory() {
  console.log('foo:execute')
  return 'foo'
})
