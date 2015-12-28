
module.exports = function factory(grunt) {

  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    connect: {
      all: {
        port: '?'
      }
    },
    wiredep: {
      all: {
        src: 'index.html'
      }
    }
  })

  grunt.registerTask('default', [ 'wiredep', 'connect:all:keepalive' ])

}
