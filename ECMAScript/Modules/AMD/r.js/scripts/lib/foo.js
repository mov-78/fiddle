console.log('foo:define')

define([ 'module' ], function factory(module) {
  console.log('foo:execute')
  return module.config()
})
