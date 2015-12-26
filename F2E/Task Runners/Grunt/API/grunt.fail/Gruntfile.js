module.exports = function factory(grunt) {

  grunt.registerTask('default', function task() {

    // grunt.warn(msg[, exitCode])
    // grunt.fail.warn(msg[, exitCode])
    grunt.fail.warn('grunt.fail.warn', 6)

    // grunt.fatal(msg[, exitCode])
    // grunt.fail.fatal(msg[, exitCode])
    grunt.fail.fatal('grunt.fail.fatal', 1)

  })

}
