module.exports = function ( grunt ) {

    grunt.registerTask( 'default' , function () {

        //
        // grunt.option( key , [value] )
        //

        grunt.log.subhead( 'grunt.option( key , [value] )' )

        console.log( grunt.option( 'foo' ) )
        console.log( grunt.option( 'bar' ) )

        console.log( grunt.option( 'baz' ) )
        console.log( grunt.option( 'no-baz' ) )

        console.log( grunt.option( 'qux' ) )
        grunt.option( 'qux' , false )
        console.log( grunt.option( 'qux' ) )
        console.log( grunt.option( 'no-qux' ) )


        //
        // grunt.option.flags()
        //

        grunt.log.subhead( 'grunt.option.flags()' )

        console.log( grunt.option.flags() )
        grunt.log.writeflags( grunt.option.flags() )


        //
        // grunt.option.init( [defaults] )
        //

        grunt.log.subhead( 'grunt.option.init( [defaults] )' )

        grunt.option.init( { quux : true } )
        console.log( grunt.option.flags() )
        grunt.log.writeflags( grunt.option.flags() )

    } )

}
