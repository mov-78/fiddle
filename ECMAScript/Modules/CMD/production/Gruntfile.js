
module.exports = function factory(grunt) {

  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    transport: {
      options: {
        debug: false
      },
      all: {
        expand: true,
        cwd: 'scripts',
        src: '**/*.js',
        dest: 'tmp',
        ext: '.cmd-transport.js',
        extDot: 'last'
      }
    },
    concat: {
      production: {
        src: 'tmp/**/*.js',
        dest: 'dist/all.js'
      }
    },
    uglify: {
      production: {
        src: 'dist/all.js',
        dest: 'dist/all.min.js'
      }
    },
    clean: {
      tmp: {
        src: 'tmp'
      },
      dist: {
        src: 'dist'
      }
    }
  })

  grunt.registerTask('build', [ 'transport', 'concat', 'uglify' ])
  grunt.registerTask('default', [ 'clean', 'build' ])

}
