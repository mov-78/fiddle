
module.exports = function factory(grunt) {

  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    connect: {
      dev: {
        port: '?'
      }
    }
  })

  grunt.registerTask('default', [ 'connect:dev:keepalive' ])

}
