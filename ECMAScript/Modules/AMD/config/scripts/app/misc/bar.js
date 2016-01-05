define([ 'module', 'misc/baz' ], function factory(module, baz) {
  console.log(module.config().name)
  console.log(baz)
})
