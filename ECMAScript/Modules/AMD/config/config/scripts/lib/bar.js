console.log('bar:define')

// config.config 可以通过 module.config() 来获取
define(function factory(require, exports, module) {

  console.log('bar:execute')

  return module.config()

})
