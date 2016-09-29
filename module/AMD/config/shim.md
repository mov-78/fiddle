[shim](http://requirejs.org/docs/api.html#config-shim) 选项用于兼容非 AMD 模块

```js
require.config( {
    shim : {

        backbone : {
            deps : [ 'underscore' , 'jquery' ] ,
            exports : 'Backbone' ,
            init : function init( underscore , jquery ) {
                // - 可选
                // - this 为全局对象
                // - 若 init 方法返回任意真值，则该返回值将覆盖 exports 配置项
            }

        } ,

        // 简化写法（在开启 enforceDefine 配置项时会抛出异常）
        'underscore.string' : [ 'underscore' ]

    }
} )
```

> 相关配置项：[enforceDefine](http://requirejs.org/docs/api.html#config-enforceDefine)
