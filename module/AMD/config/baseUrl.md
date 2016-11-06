[baseUrl](http://requirejs.org/docs/api.html#config-baseUrl) 用于设置模块路径解析的根路径：

```js
require.config( {
    baseUrl : 'root/path' // baseUrl 相对于当前 HTML 文档解析
} )
```

`baseUrl` 来源（依优先级排序）：

- 通过 `require.config` 显式配置
- 通过 [data-main](../data-main.md) 属性隐式推导
- 默认相对于当前 HTML 文档解析
