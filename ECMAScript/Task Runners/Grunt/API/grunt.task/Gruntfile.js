
module.exports = function factory(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),
    foo: {
      options: {
        dedupe: true
      },
      phony: {  // for custom-task, phony is a normal config, not a build target
        options: {
          dedupe: false
        }
      }
    },
    bar: {
      t1: {
        pkgName: '<%= pkg.name %>',

        // SPECIFYING SRC-DEST MAPPING: 1. COMPAT FORMAT(n:1)
        src: 'scripts/**/*.js', // path | glob(node-glob, minimatch)
        dest: 'scripts/dist/all.js'
      },
      t2: {
        // SPECIFYING SRC-DEST MAPPING: 2. FILES OBJECT FORMAT(n:1)
        files: {
          'scripts/dist/all.js': 'scripts/**/*.js'
        }
      },
      t3: {
        // SPECIFYING SRC-DEST MAPPING: 3. FILES ARRAY FORMAT(n:1)
        files: [
          {
            src: 'scripts/**/*.js',
            dest: 'scripts/dist/all.js'
          }
        ]
      },
      t4: {
        // SPECIFYING SRC-DEST MAPPING: 3. FILES ARRAY FORMAT(n:n)
        files: [
          {
            expand: true,         // enable dynamic mapping
            cwd: 'scripts',
            src: '**/*.js',       // src relative to `cwd`
            dest: 'scripts/dist', // dest prefix
            ext: '.min.js',
            extDot: 'last'
          }
        ]
      }
    }
  })


  //
  // Custom Task
  //

  grunt.registerTask('stub1', function noop() {})
  grunt.registerTask('stub4', function noop() {})

  grunt.registerTask('stub2', function task() {
    grunt.task.run('stub3')
  })
  grunt.registerTask('stub3', function task() {
    grunt.task.clearQueue()
  })

  // grunt.registerTask
  // grunt.task.registerTask
  grunt.registerTask('foo', 'a custom task', function task() {

    // task instance can be referenced by `this` or `grunt.task.current`
    grunt.log.subhead('this === grunt.task.current')
    console.dir(this === grunt.task.current)

    // grunt.task.exists(taskName)
    grunt.log.subhead('grunt.task.exists(taskName)')
    console.dir(grunt.task.exists('stub1'))
    console.dir(grunt.task.exists('stubbbb'))

    // this.requires(taskList)
    // aka, grunt.task.requires(taskList)
    grunt.log.subhead('this.requires(taskList)')
    this.requires(['stub1'])

    // this.requiresConfig(props...)
    // aka, grunt.config.requires(props...)
    grunt.log.subhead('this.requiresConfig(props...)')
    this.requiresConfig('foo')
    // this.requiresConfig('phony')

    // $ grunt stub1 foo:m:n
    grunt.log.subhead('this.name')
    console.dir(this.name)      // foo
    grunt.log.subhead('this.nameArgs')
    console.dir(this.nameArgs)  // foo:m:n
    grunt.log.subhead('this.args')
    console.dir(this.args)      // [ 'm', 'n' ]
    grunt.log.subhead('this.flags')
    console.dir(this.flags)     // { m: true, n: true }

    // this.errorCount
    grunt.log.subhead('this.errorCount')
    console.dir(this.errorCount)  // 0
    grunt.log.error()
    console.dir(this.errorCount)  // 1

    // this.options
    //  - this.options      # task/target specific options
    //  - grunt.options()   # CLI/task-independent options
    grunt.log.subhead('this.options([defaults])')
    console.dir(this.options().deep)                // undefined
    console.dir(this.options({ deep: true }).deep)  // true
    console.dir(this.options().deep)                // undefined
    console.dir(this.options().dedupe)              // true

  })

  grunt.registerTask('foo-async', 'an async custom task', function task() {
    var done = this.async()
    setTimeout(function timeout() {
      done(true)
    }, 3000)
  })


  //
  // Multi Task
  //

  // grunt.registerMultiTask
  // grunt.task.registerMultiTask
  grunt.registerMultiTask('bar', 'a multi task', function task() {

    // this.target
    grunt.log.subhead('this.target')
    console.dir(this.target)

    // this.data
    grunt.log.subhead('this.data')
    console.dir(this.data)

    // this.filesSrc
    grunt.log.subhead('this.filesSrc')
    console.dir(this.filesSrc)

    // this.files
    grunt.log.subhead('this.files')
    this.files.forEach(function each(mapping) {
      console.dir(mapping.src)
      console.dir(mapping.dest)
      console.log(grunt.util.repeat(40, '-'))
    })

  })


  //
  // Alias Task
  //

  // speficying tasks:
  // - aliasTask
  // - customTask[:arg1[:arg2[:...]]]
  // - multiTask[:target[:arg1[:...]]]
  grunt.registerTask(
    'default',
    'an alias task',
    [ 'stub1', 'extern', 'foo:m:n', 'bar', 'stub2', 'stub4' ]
  )


  //
  // Load Local/NPM Tasks
  // better: [load-grunt-tasks](https://www.npmjs.com/package/load-grunt-tasks)
  //

  grunt.task.loadTasks('./grunt-tasks')             // aka, grunt.loadTasks
  grunt.task.loadNpmTasks('grunt-contrib-connect')  // aka, grunt.loadNpmTasks

}
