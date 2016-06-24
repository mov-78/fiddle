console.info('preload:outside')

define(function factory(require, exports, module) {

  console.info('preload:inside')

  module.exports = 'preload'

})
