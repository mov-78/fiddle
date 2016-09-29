```js
require.onError = function onError( err ) {

    // err.requireType:String - 错误类型
    // err.requireModules:String[] - 导致错误的模块标识列表

    throw err

}
```
