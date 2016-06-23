const noop = require( 'lodash.noop' )

module.exports = function ( grunt ) {

  grunt.initConfig( {
    pkg : grunt.file.readJSON( './package.json' ) ,
    foo : {
      options : {
        dedupe : true
      } ,
      phony : {  // for custom-task, phony is a normal config, not a build target
        options : {
          dedupe : false
        }
      }
    } ,
    bar : {
      t1 : {
        pkgName : '<%= pkg.name %>' ,

        // [1] COMPAT FORMAT(n:1)
        src : 'scripts/**/*.js' , // path | glob(node-glob, minimatch)
        dest : 'scripts/dist/all.js'
      } ,
      t2 : {
        // [2] FILES OBJECT FORMAT(n:1)
        files : {
          'scripts/dist/all.js' : 'scripts/**/*.js'
        }
      } ,
      t3 : {
        // [3.1] FILES ARRAY FORMAT(n:1)
        files : [
          {
            src : 'scripts/**/*.js' ,
            dest : 'scripts/dist/all.js'
          }
        ]
      } ,
      t4 : {
        // [3.2] FILES ARRAY FORMAT(n:n)
        files : [
          {
            expand : true , // enable dynamic mapping
            cwd : 'scripts' ,
            src : '**/*.js' , // src relative to `cwd`
            dest : 'scripts/dist' , // dest prefix
            ext : '.min.js' ,
            extDot : 'last'
          }
        ]
      }
    }
  } )


  //
  // [1] Custom Task
  // grunt.registerTask( name , [description] , taskFunction )
  //

  grunt.registerTask( 'stub1' , noop )
  grunt.registerTask( 'stub4' , noop )

  grunt.registerTask( 'stub2' , function () {
    grunt.task.run( 'stub3' )
  } )
  grunt.registerTask( 'stub3' , function () {
    grunt.task.clearQueue()
  } )

  grunt.registerTask( 'foo' , function () {

    // task instance can be referenced by `this` or `grunt.task.current`
    grunt.log.subhead( 'this === grunt.task.current' )
    console.log( this === grunt.task.current )

    // grunt.task.exists( name )
    grunt.log.subhead( 'grunt.task.exists( name )' )
    console.log( grunt.task.exists( 'stub1' ) )
    console.log( grunt.task.exists( 'stubbbb' ) )

    // this.requires( taskList )
    // alias: grunt.task.requires( taskList )
    grunt.log.subhead( 'this.requires( taskList )' )
    this.requires( [ 'stub1' ] )

    // this.requiresConfig( ...key )
    // alias: grunt.config.requires( ...key )
    grunt.log.subhead( 'this.requiresConfig( ...key )' )
    this.requiresConfig( 'foo' )

    grunt.log.subhead( 'this.name' )
    console.log( this.name )
    grunt.log.subhead( 'this.nameArgs' )
    console.log( this.nameArgs )
    grunt.log.subhead( 'this.args' )
    console.log( this.args )
    grunt.log.subhead( 'this.flags' )
    console.log( this.flags )

    // this.errorCount
    grunt.log.subhead( 'this.errorCount' )
    console.log( this.errorCount )
    grunt.log.error()
    console.log( this.errorCount )

    // this.options
    //  - this.options    # task/target specific options
    //  - grunt.options() # CLI/task-independent options
    grunt.log.subhead( 'this.options( [defaults] )' )
    console.log( this.options().deep )
    console.log( this.options( { deep : true } ).deep )
    console.log( this.options().deep )
    console.log( this.options().dedupe )

  } )

  grunt.registerTask( 'foo-async' , function () {
    const done = this.async()
    setTimeout( () => done( true ) , 1000 )
  } )


  //
  // [2] Multi-Task
  // grunt.registerMultiTask( name , [description] , taskFunction )
  //

  grunt.registerMultiTask( 'bar' , function () {

    // this.target
    grunt.log.subhead( 'this.target' )
    console.log( this.target )


    // this.files
    grunt.log.subhead( 'this.files' )
    this.files.forEach( mapping => {
      console.log( mapping.src )
      console.log( mapping.dest )
      console.log( grunt.util.repeat( 40 , '-' ) )
    } )

    // this.filesSrc
    grunt.log.subhead( 'this.filesSrc' )
    console.log( this.filesSrc )

    // this.data
    grunt.log.subhead( 'this.data' )
    console.log( this.data )

  } )


  //
  // [3] Alias Task
  // grunt.registerTask( name , [description] , taskList )
  //

  grunt.registerTask(
    'default' ,
    [ 'stub1' , 'extern' , 'foo-async' , 'foo:m:n' , 'bar' , 'stub2' , 'stub4' ]
  )


  //
  // Load Local/NPM Tasks
  // better: [load-grunt-tasks](https://www.npmjs.com/package/load-grunt-tasks)
  //

  grunt.task.loadTasks( './grunt-tasks' )             // alias: grunt.loadTasks
  grunt.task.loadNpmTasks( 'grunt-contrib-connect' )  // alias: grunt.loadNpmTasks

}
