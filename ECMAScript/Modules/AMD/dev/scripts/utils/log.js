console.log('utils/log:LOAD')

define(function factory() {

  console.log('utils/log:EXECUTE')

  return function log(message) {
    console.group('LOGGER')
    console.log(message)
    console.groupEnd()
  }

})
