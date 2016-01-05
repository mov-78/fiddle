console.info('foo:outside')

define(function factory(require, exports, module) {

  console.info('foo:inside')
  console.log(require('vendor/preload'))

})
