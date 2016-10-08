```js
require.config( {

    // 确保 IE 下可以正确捕获脚本错误
    // http://requirejs.org/docs/api.html#ieloadfail
    enforceDefine : true ,

    paths : {
        mew : 'https://cdn/mew.js'
    }

} )

require(
    [ 'mew' ] ,
    function callback( Mew ) {
        // pass
    } ,
    function errback( err ) {

        // err.requireType:String - 错误类型
        // err.requireModules:String[] - 导致错误的模块标识列表

        require.undef( err.requireModules[ 0 ] )
        require.config( {
            paths : {
                'mew' : 'vendor/mew'
            }
        } )
        require( [ 'mew' ] )

    }
)
```

等价于：

```js
require.config( {
    paths : {
        mew : [ 'https://cdn/mew.js' , 'vendor/mew' ]
    }
} )
```
