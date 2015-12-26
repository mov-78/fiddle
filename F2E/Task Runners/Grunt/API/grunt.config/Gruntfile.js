module.exports = function factory(grunt) {

  grunt.config.init({ // aka grunt.initConfig
    pkg: grunt.file.readJSON('./package.json'),
    phony: {
      foo: {
        pkgName: 'pkg:<%= pkg.name %>'
      }
    }
  })

  grunt.registerTask('default', function task() {

    //
    // grunt.config([key])
    //

    grunt.log.subhead('grunt.config([key])')

    console.dir(grunt.config())
    console.dir(grunt.config('pkg'))

    console.dir(grunt.config('phony.foo'))
    console.dir(grunt.config([ 'phony', 'foo' ]))


    //
    // grunt.config(key[, value])
    //

    grunt.log.subhead('grunt.config(key[, value])')

    console.dir(grunt.config('foo'))  // getter

    grunt.config('foo', 'bar')        // setter
    console.dir(grunt.config('foo'))
    console.dir(grunt.config())


    //
    // grunt.config.get[Raw](key)
    //

    grunt.log.subhead('grunt.config.get[Raw](key)')

    console.dir(grunt.config.get('phony.foo.pkgName'))
    console.dir(grunt.config.getRaw('phony.foo.pkgName'))


    //
    // grunt.config.set(key, value)
    //

    grunt.log.subhead('grunt.config.set(key, value)')

    console.dir(grunt.config.get('baz'))
    console.dir(grunt.config.getRaw('baz'))

    grunt.config.set('baz', '<%= Math.random() %>')

    console.dir(grunt.config.get('baz'))
    console.dir(grunt.config.getRaw('baz'))


    //
    // grunt.config.process(template)
    //

    grunt.log.subhead('grunt.config.process(template)')

    console.dir(grunt.config.process('<%= pkg.name %>'))
    console.dir(grunt.config.process('<%= grunt.template.today("mm/dd") %>'))


    //
    // grunt.config.escape(prop)
    //

    grunt.log.subhead('grunt.config.escape(prop)')

    console.dir(grunt.config.escape('foo.bar'))


    //
    // grunt.config.merge(config)
    //

    grunt.log.subhead('grunt.config.merge(config)')

    console.dir(grunt.config())

    grunt.config.merge({ baz: 'baz', foobar: 'foobar' })
    console.dir(grunt.config())


    //
    // grunt.config.requires(config...)
    //

    grunt.log.subhead('grunt.config.requires(config...)')

    grunt.config.requires('foo', 'bar')

  })

}
