module.exports = function factory(grunt) {

  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    babel: {
      options: {
        // http://babeljs.io/docs/usage/options/
        sourceMap: true,
        presets: [ 'es2015' ]
      },
      dist: {
        files: {
          'dist/index.js': 'src/index.js'
        }
      }
    }
  })

  grunt.registerTask('default', [ 'babel' ])

}
