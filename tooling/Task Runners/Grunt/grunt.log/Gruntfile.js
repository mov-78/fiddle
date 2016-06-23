module.exports = function factory(grunt) {

  grunt.registerTask('default', function task() {

    grunt.log.write('grunt.log.write\n')
    grunt.log.writeln('grunt.log.writeln')

    grunt.log.ok() // OK
    grunt.log.ok('grunt.log.ok')
    grunt.log.oklns('grunt.log.oklns') // grunt.log.wraptext(80, msg)

    grunt.log.error() // ERROR
    grunt.log.error('grunt.log.error')
    grunt.log.errorlns('grunt.log.errorlns') // grunt.log.wraptext(80, msg)

    grunt.log.subhead('grunt.log.subhead')

    grunt.log.writeflags({ foo: 'bar' }, 'prefix')

    grunt.log.debug('grunt.log.debug') // $ grunt --debug


    //
    // Utilities
    //

    console.log(
      grunt.log.wordlist(
        [ 'foo', 'bar' ],
        { color: 'cyan', separator: '|' }
      )
    )

    console.log(grunt.log.wraptext(2, 'foobar'))
    console.log( // wrapper for grunt.log.wraptext
      grunt.log.table(
        [ 5, 5, 1 ],
        [ 'foo', 'bar', 'baz' ]
      )
    )

  })

}
