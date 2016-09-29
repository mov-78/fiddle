```js
require.config( {
    // 确保 IE 下可以正确捕获脚本错误
    // http://requirejs.org/docs/api.html#ieloadfail
    enforceDefine : true
} )

require.onError = function onError( err ) {

    // err.requireType:String - 错误类型
    // err.requireModules:String[] - 导致错误的模块标识列表

    throw err

}
```
