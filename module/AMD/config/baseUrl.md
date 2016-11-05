[baseUrl](http://requirejs.org/docs/api.html#config-baseUrl) 用于设置模块路径解析的根路径：

```js
require.config( {
    baseUrl : 'root/path' // baseUrl 相对于当前 HTML 文档解析
} )
```

`baseUrl` 来源有三（依优先级排序）：

1. 通过 `require.config` 显式配置
2. 通过 [data-main](http://requirejs.org/docs/api.html#data-main) 属性隐式推导
3. 默认相对于当前 HTML 文档解析
