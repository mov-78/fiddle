define(function factory(require, exports, module) {

  var foobar = require('./foo/bar')
  var logger = require('./utils/logger')

  logger.dump(foobar)

})
