console.log('foo:define')

// config.config 可以通过 module.config() 来获取
define([ 'module' ], function factory(module) {

  console.log('foo:execute')

  return module.config()

})
