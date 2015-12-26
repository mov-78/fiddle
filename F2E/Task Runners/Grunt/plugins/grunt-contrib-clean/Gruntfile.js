
module.exports = function factory(grunt) {

  grunt.initConfig({
    clean: {
      all: [ 'tmp', 'scripts' ],
      fiddle: {
        src: [
          'tmp',
          'scripts/*.js',
          '!scripts/*.min.js'
        ]
      }
    }
  })

  grunt.registerTask('mkdir', function task() {

    grunt.file.mkdir('tmp')
    grunt.file.mkdir('scripts')

    grunt.file.write('scripts/fiddle.js')
    grunt.file.write('scripts/fiddle.min.js')

  })

  grunt.loadNpmTasks('grunt-contrib-clean')

}
