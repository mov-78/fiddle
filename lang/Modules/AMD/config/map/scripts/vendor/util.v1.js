console.log('util.v1:define')

define(function factory() {
  console.log('util.v1:execute')
  return { version: 1 }
})
