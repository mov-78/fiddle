const inspect = require( 'util' ).inspect

module.exports = function ( grunt ) {

  grunt.initConfig( {
    t1 : {
      options : { m : 0 } ,

      // 对于 Function-Task 来说，此处的 `target` 仅仅是一个普通的参数配置
      // 也就是说，Function-Task 只存在一级选项配置，即任务级选项配置
      target : {
        options : { m : 1 , n : 2 }
      }

    } ,
    t2 : {
      options : { m : 0 } ,

      // 对于 Multi-Task 来说，此处的 `target` 标记了一个任务目标
      // 每个任务目标可以独立设置选项配置
      target : {
        options : { m : 1 , n : 2 }
      }

    }
  } )

  // [1] Function-Task
  // grunt.task.registerTask( name , [description] , taskFunction )
  // grunt.registerTask( name , [description] , taskFunction )
  grunt.registerTask( 't1' , function () {

    // - this.options() 只能获取当前任务/目标的选项（options）
    // - grunt.config 接口则可以获取任意任务的配置（config）
    grunt.log.writeln( inspect( this.options() ) )

  } )

  // [2] Multi-Task
  // grunt.task.registerMultiTask( name , [description] , taskFunction )
  // grunt.registerMultiTask( name , [description] , taskFunction )
  grunt.registerMultiTask( 't2' , function () {
    grunt.log.writeln( inspect( this.options() ) )
  } )

  // [3] Alias-Task
  // grunt.task.registerTask( name , [description] , taskList )
  // grunt.registerTask( name , [description] , taskList )
  grunt.registerTask( 'default' , [ 't1' , 't2' ] )

}
