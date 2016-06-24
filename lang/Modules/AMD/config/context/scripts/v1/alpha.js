console.log('alpha@v1:define')

define(function factory() {
  console.log('alpha@v1:execute')
  return { version: 1 }
})
