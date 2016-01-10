console.log('baz:define')

;(function factory(root) {
  console.log('baz:execute')
  root.baz = 'baz'
})(this)
