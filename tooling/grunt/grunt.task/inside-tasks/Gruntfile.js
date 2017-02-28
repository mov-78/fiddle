const assert = require( 'assert' )
const noop = require( 'lodash.noop' )
const inspect = require( 'util' ).inspect

module.exports = function ( grunt ) {

    grunt.initConfig( {
        t1 : {
            options : {
                foo : 'bar'
            }
        } ,
        t2 : {

            // COMPACT FORMAT (n:1)
            target1 : {
                src : 'js/**/*.js' ,
                dest : 'dist/all.js'
            } ,

            // COMPACT FORMAT (n:n)
            target2 : {
                expand : true , // 启用一对一映射模式
                cwd : 'js' ,
                src : '**/*.js' , // 相对于 `cwd` 解析
                dest : 'dist' ,
                ext : '.min.js' ,
                extDot : 'last'
            } ,

            // FILES OBJECT FORMAT (n:1)
            target3 : {
                files : {
                    'dist/all.js' : 'js/**/*.js'
                }
            } ,

            // FILES ARRAY FORMAT (n:1)
            target4 : {
                files : [
                    {
                        src : 'js/**/*.js' ,
                        dest : 'dist/all.js'
                    }
                ]
            } ,

            // FILES ARRAY FORMAT (n:n)
            target5 : {
                files : [
                    {
                        expand : true , // 启用一对一映射模式
                        cwd : 'js' ,
                        src : '**/*.js' , // 相对于 `cwd` 解析
                        dest : 'dist' ,
                        ext : '.min.js' ,
                        extDot : 'last'
                    }
                ]
            }

        }
    } )

    grunt.registerTask( 't0' , noop )

    grunt.registerTask( 't1' , function () {

        const done = this.async() // 异步支持
        setTimeout( () => done( true ) , 100 )

        // 获取当前任务实例：
        // - this 关键字
        // - grunt.task.current
        assert( this === grunt.task.current )

        // grunt.task.exists( taskName )
        assert( grunt.task.exists( 't0' ) )
        assert( grunt.task.exists( 't1' ) )

        // - this.requires( ...taskName )
        // - grunt.task.requires( ...taskName )
        this.requires( 't0' )
        grunt.task.requires( 't0' )

        // - this.requiresConfig( ...path )
        // - grunt.config.requires( ...path )
        this.requiresConfig( 't2' )
        grunt.config.requires( 't2' )

        // this.options( [defaults] )
        grunt.log.writeln( `this.options() = ${ inspect( this.options() ) }` )

        // - this.name
        // - this.nameArgs
        // - this.args
        // - this.flags
        grunt.log.writeln( `this.name = ${ inspect( this.name ) }` )
        grunt.log.writeln( `this.nameArgs = ${ inspect( this.nameArgs ) }` )
        grunt.log.writeln( `this.args = ${ inspect( this.args ) }` )
        grunt.log.writeln( `this.flags = ${ inspect( this.flags ) }` )

    } )

    grunt.registerMultiTask( 't2' , function () {

        // this.target
        grunt.log.subhead( `======= ${ this.target } =======` )

        // this.files
        grunt.log.subhead( 'this.files' )
        this.files.forEach( function ( mapping ) {
            grunt.log.writeln( `${ inspect( mapping.src ) } → ${ inspect( mapping.dest ) }` )
        } )

        // this.filesSrc
        grunt.log.subhead( 'this.filesSrc' )
        grunt.log.writeln( inspect( this.filesSrc ) )

        // this.data
        grunt.log.subhead( 'this.data' )
        grunt.log.writeln( inspect( this.data , { depth : null } ) )

    } )

}
