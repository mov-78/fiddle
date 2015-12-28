console.info('main:outside')
define(function factory(require, exports, module) {

  console.info('main:inside')

  var logger = require('./utils/logger')
  logger.log('it works!')

})
