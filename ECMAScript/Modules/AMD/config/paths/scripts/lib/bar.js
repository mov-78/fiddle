console.log('bar:define')

define(function factory() {
  console.log('bar:execute')
  return 'bar'
})
