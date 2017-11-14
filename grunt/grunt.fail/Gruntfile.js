module.exports = function ( grunt ) {

    grunt.registerTask( 'default' , function () {

        // grunt.warn( msg , [exitCode] )
        // grunt.fail.warn( msg , [exitCode])
        grunt.fail.warn( 'grunt.fail.warn' , 6 )

        // grunt.fatal( msg , [exitCode] )
        // grunt.fail.fatal( msg , [exitCode] )
        grunt.fail.fatal( 'grunt.fail.fatal' , 1 )

    } )

}
