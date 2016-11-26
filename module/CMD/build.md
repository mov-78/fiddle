![构建流程](http://ocv7sq6bh.bkt.clouddn.com/CMD-build-workflow.svg?v=20161122.01)

---

```js
module.exports = function ( grunt ) {

    grunt.loadNpmTasks( 'grunt-cmd-concat' )
    grunt.loadNpmTasks( 'grunt-cmd-transport' )

    grunt.config.init( {

        transport : {
            options : {
                debug : false
            } ,
            all : {
                expand : true ,
                cwd : 'js' ,
                src : '**/*.js' ,
                dest : 'dist'
            }
        } ,

        concat : {
            options : {
                include : 'all' // self|relative|all
            } ,
            main : {
                src : 'dist/main.js' ,
                dest : 'dist/main.bundled.js'
            }
        }

    } )

}
```

> - grunt@0.4.5
> - grunt-cli@1.2.0
> - grunt-cmd-concat@0.2.8
> - grunt-cmd-transport@0.5.1

---

- [构建工具](https://github.com/seajs/seajs/issues/538)
- [grunt-cmd-transport](https://github.com/spmjs/grunt-cmd-transport)
- [grunt-cmd-concat](https://github.com/spmjs/grunt-cmd-concat)
- [为什么要有约定和构建工具](https://github.com/seajs/seajs/issues/426)
