
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
        dest: 'tmp/cmd',
        ext: '.cmd.js',
        extDot: 'last'
      }
    },
    concat: {
      production: {
        src: 'tmp/cmd/**/*.js',
        dest: 'dist/all.js'
      }
    },
    uglify: {
      production: {
        src: 'dist/all.js',
        dest: 'dist/all.min.js'
      }
    },
    connect: {
      production: {
        port: '?'
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
  grunt.registerTask(
    'default',
    [ 'clean', 'build', 'connect:production:keepalive' ]
  )

}
