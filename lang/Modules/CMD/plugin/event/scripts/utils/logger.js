console.info('logger:outside')
define(function factory(require, exports, module) {

  console.info('logger:inside')

  exports.log = function log(msg) {
    console.log('[LOGGER]' + msg)
  }

})
