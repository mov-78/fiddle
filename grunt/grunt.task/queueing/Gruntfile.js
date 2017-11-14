const noop = require( 'lodash.noop' )

module.exports = function ( grunt ) {

    grunt.registerTask( 't1' , noop )

    // grunt.task.run( taskName|taskList )
    grunt.registerTask( 't2' , function () {
        grunt.task.run( 't3' )
    } )

    grunt.registerTask( 't3' , noop )

    // grunt.task.clearQueue()
    grunt.registerTask( 't4' , function () {
        grunt.task.clearQueue()
    } )

    grunt.registerTask( 't5' , noop )

    grunt.registerTask( 'default' , [ 't1' , 't2' , 't4' , 't5' ] )

}
