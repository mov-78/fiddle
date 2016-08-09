let assert = require( 'assert' )
let noop = require( 'lodash.noop' )
let inspect = require( 'util' ).inspect

module.exports = function ( grunt ) {

    grunt.initConfig( {
        task2 : {

            // [1] COMPACT-FORMAT(n:1)
            target1 : {
                src : 'src/**/*.js' ,
                dest : 'dist/all.js'
            } ,

            // [2] FILES-OBJECT-FORMAT(n:1)
            target2 : {
                files : {
                    'dist/all.js' : 'src/**/*.js'
                }
            } ,

            // [3.1] FILES-ARRAY-FORMAT(n:1)
            target3 : {
                files : [
                    {
                        src : 'src/**/*.js' ,
                        dest : 'dist/all.js'
                    }
                ]
            } ,

            // [3.2] FILES-ARRAY-FORMAT(n:n)
            target4 : {
                files : [
                    {
                        expand : true , // 启用一对一映射模式
                        cwd : 'src' ,
                        src : '**/*.js' , // 相对于 `cwd` 解析
                        dest : 'dist' ,
                        ext : '.min.js' ,
                        extDot : 'last'
                    }
                ]
            }

        }
    } )

    grunt.registerTask( 'task0' , noop )

    grunt.registerTask( 'task1' , function () {

        // 异步支持（任务执行上不是异步，而是同步阻塞）
        let done = this.async()

        // 获取当前任务实例：
        // - this 关键字
        // - grunt.task.current
        assert( this === grunt.task.current )

        // grunt.task.exists( taskName )
        assert( grunt.task.exists( 'task0' ) )

        // - this.requires( taskName )
        // - grunt.task.requires( taskName )
        this.requires( 'task0' )

        // - this.requiresConfig( ...path )
        // - grunt.config.requires( ...path )
        this.requiresConfig( 'task2' )

        // - this.name
        // - this.nameArgs
        // - this.args
        // - this.flags
        grunt.log.writeln( `this.name = ${ inspect( this.name ) }` )
        grunt.log.writeln( `this.nameArgs = ${ inspect( this.nameArgs ) }` )
        grunt.log.writeln( `this.args = ${ inspect( this.args ) }` )
        grunt.log.writeln( `this.flags = ${ inspect( this.flags ) }` )

        setTimeout( () => done( true ) , 100 )

    } )

    grunt.registerMultiTask( 'task2' , function () {

        // this.target
        grunt.log.subhead( `======= ${ this.target } =======` )

        // this.files
        grunt.log.subhead( 'this.files' )
        this.files.forEach( mapping => {
            grunt.log.writeln( `${ inspect( mapping.src ) } : ${ inspect( mapping.dest ) }` )
        } )

        // this.filesSrc
        grunt.log.subhead( 'this.filesSrc' )
        grunt.log.writeln( inspect( this.filesSrc ) )

        // this.data
        grunt.log.subhead( 'this.data' )
        grunt.log.writeln( inspect( this.data , { depth : null } ) )

    } )

}
