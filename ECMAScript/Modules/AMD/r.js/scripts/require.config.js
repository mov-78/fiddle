require.config({
  deps: [ 'main' ],
  baseUrl: 'scripts',
  config: {
    'lib/foo': 'foo',
    'bar': 'bar'
  },
  paths: {
    'bar': 'lib/bar'
  },
  shim: {
    'lib/baz': {
      exports: 'baz'
    }
  }
})
