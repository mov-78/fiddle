module.exports = function ( grunt ) {

  grunt.config.init( { // alias: grunt.initConfig
    pkg : grunt.file.readJSON( './package.json' ) ,
    phony : {
      target : {
        pkgName : 'pkg:<%= pkg.name %>'
      }
    }
  } )

  grunt.registerTask( 'default' , function () {

    //
    // grunt.config.get( path )
    // 等同于：grunt.config( path )
    // 自动调用 grunt.config.process
    //

    grunt.log.subhead( 'grunt.config.get( path )' )

    console.log( grunt.config( 'phony.target' ) )
    console.log( grunt.config( [ 'phony' , 'target' ] ) )


    //
    // grunt.config.getRaw( path )
    // 不自动调用 grunt.config.process
    //

    grunt.log.subhead( 'grunt.config.getRaw( path )' )
    console.log( grunt.config.get( 'phony.target.pkgName' ) )
    console.log( grunt.config.getRaw( 'phony.target.pkgName' ) )


    //
    // grunt.config.set( path , value )
    // 等同于 grunt.config( path , value )
    //

    grunt.log.subhead( 'grunt.config.set( path , value )' )

    grunt.config( 'phony.target.version' , '1.0.0' )
    console.log( grunt.config( 'phony.target.version' ) )


    //
    // grunt.config.process( value )
    //

    grunt.log.subhead( 'grunt.config.process( value )' )

    console.log( grunt.config.process( '<%= pkg.name %>' ) )
    console.log( grunt.config.process( `<%= grunt.template.today( 'mm/dd' ) %>` ) )


    //
    // grunt.config.escape( path )
    //

    grunt.log.subhead( 'grunt.config.escape( path )' )
    console.log( grunt.config.escape( 'foo.bar' ) )


    //
    // grunt.config.merge( config )
    //

    grunt.log.subhead( 'grunt.config.merge( config )' )

    console.log( grunt.config() )
    grunt.config.merge( { watch : { files : 'path/to/files' } } )
    console.log( grunt.config() )


    //
    // grunt.config.requires( ...path )
    // alias: this.requiresConfig( ...path )
    //

    grunt.log.subhead( 'grunt.config.requires( ...path )' )
    grunt.config.requires( 'pkg' , 'phony.target' )

  } )

}
