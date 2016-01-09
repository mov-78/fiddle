console.log('alpha@v2:define')

define(function factory() {
  console.log('alpha@v2:execute')
  return { version: 2 }
})
