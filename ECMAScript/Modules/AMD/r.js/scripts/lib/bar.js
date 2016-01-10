console.log('bar:define')

define(function factory(require, exports, module) {
  console.log('bar:execute')
  return module.config()
})
