[enforceDefine](http://requirejs.org/docs/api.html#config-enforceDefine) 选项用于设置在请求的脚本不是 AMD 模块且无对应的有效兼容性配置时，是否会抛出异常

> 以下均为无效兼容性配置：
> - 对应的 `shim` 配置项不存在
> - 对应的 `shim` 配置项存在，但是不存在 `exports` 子配置项
> - `exports` 子配置项存在，但是不存在指定的全局变量

```js
require.config( {
    enforceDefine : true // 建议开启该选项以辅助 require.js 在 IE 中捕获脚本加载错误 http://requirejs.org/docs/api.html#ieloadfail
} )
```

> 相关配置项：[shim](http://requirejs.org/docs/api.html#config-shim)
