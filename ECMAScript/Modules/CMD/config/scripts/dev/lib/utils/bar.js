console.info('bar:outside')

define(function factory(require, exports, module) {

  console.info('bar:inside')
  console.log(require('vendor/preload'))

})
