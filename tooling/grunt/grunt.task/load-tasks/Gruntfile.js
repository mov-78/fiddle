module.exports = function ( grunt ) {

    grunt.loadTasks( 'grunt-tasks' )
    grunt.loadNpmTasks( 'grunt-cat' )

    grunt.initConfig( {
        cat : {
            README : {
                file : 'README.md'
            }
        }
    } )

}
