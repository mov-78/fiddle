module.exports = function factory(grunt) {

  grunt.registerTask('default', function task() {

    // $ grunt --foo m --bar n --baz

    grunt.log.subhead('getter')
    console.dir(grunt.option('foo')) // m
    console.dir(grunt.option('bar')) // n

    grunt.log.subhead('setter')
    console.dir(grunt.option('m')) // undefined
    grunt.option('m', 'set')
    console.dir(grunt.option('m')) // set

    grunt.log.subhead('flags')
    console.dir(grunt.option('baz'))    // true
    console.dir(grunt.option('no-baz')) // false

    grunt.log.subhead('dump')
    console.dir(grunt.option.flags())
    grunt.log.writeflags(grunt.option.flags())

    grunt.log.subhead('grunt.option.init(defaults)')
    console.dir(grunt.option('n'))  // undefined
    grunt.option.init({ n: 'set' })
    console.dir(grunt.option('n'))  // set
    console.dir(grunt.option('m'))  // undefined(reset)
    console.dir(grunt.option.flags())
    grunt.log.writeflags(grunt.option.flags())

  })

}
