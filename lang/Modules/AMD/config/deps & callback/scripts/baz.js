console.log('baz:define')

define(function factory() {
  console.log('baz:execute')
  return 'baz'
})
