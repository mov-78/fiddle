console.log('main:define')

define(function factory() {
  console.log('main:execute')
  return { data: 'foobar' }
})
