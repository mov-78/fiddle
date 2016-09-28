[enforceDefine](http://requirejs.org/docs/api.html#config-enforceDefine) 选项用于设置在加载的脚本不是 AMD 模块且无对应的 `shim` 兼容性配置时，是否抛出异常

```js
require.config( {
    enforceDefine : true
} )
```

> 相关配置项：[shim](http://requirejs.org/docs/api.html#config-shim)
