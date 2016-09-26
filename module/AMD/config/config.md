[config](http://requirejs.org/docs/api.html#config-moduleconfig) 选项用于设置模块级配置：

```js
require.config( {
    config : {
        main : { /* module-level configuration */ }
    }
} )

// main.js
define( [ 'module' ] , function factory( module ) {
    var config = module.config()
} )
```
